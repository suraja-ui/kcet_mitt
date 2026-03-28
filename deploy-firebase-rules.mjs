// deploy-firebase-rules.mjs
// Deploys Firestore rules + indexes and Storage rules using the Admin SDK service account
// Run with: node deploy-firebase-rules.mjs

import { readFileSync } from 'fs';
import { GoogleAuth } from 'google-auth-library';

const PROJECT_ID = 'prep2kcet-a0b0a';
const SERVICE_ACCOUNT_PATH = 'C:/Users/Lenovo/Downloads/prep2kcet-a0b0a-firebase-adminsdk-fbsvc-c6c87105aa.json';

const FIRESTORE_RULES = readFileSync('./firestore.rules', 'utf-8');
const STORAGE_RULES = readFileSync('./storage.rules', 'utf-8');
const INDEXES = JSON.parse(readFileSync('./firestore.indexes.json', 'utf-8'));

async function getAccessToken() {
    const auth = new GoogleAuth({
        keyFile: SERVICE_ACCOUNT_PATH,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token.token;
}

async function deployFirestoreRules(token) {
    const url = `https://firebaserules.googleapis.com/v1/projects/${PROJECT_ID}/rulesets`;

    // 1. Create a new ruleset
    const rulesetRes = await fetch(url, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            source: {
                files: [{ name: 'firestore.rules', content: FIRESTORE_RULES }]
            }
        })
    });
    const ruleset = await rulesetRes.json();
    if (!rulesetRes.ok) {
        console.error('❌ Firestore ruleset creation failed:', ruleset);
        return;
    }
    console.log('✅ Firestore ruleset created:', ruleset.name);

    // 2. Release it (apply to the project)
    const releaseId = 'cloud.firestore';
    const releaseName = `projects/${PROJECT_ID}/releases/${releaseId}`;
    const releaseUrl = `https://firebaserules.googleapis.com/v1/${releaseName}`;

    // Try PATCH first (update existing release)
    let releaseRes = await fetch(releaseUrl, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ release: { name: releaseName, rulesetName: ruleset.name } })
    });

    if (!releaseRes.ok) {
        // First time — create the release
        const createUrl = `https://firebaserules.googleapis.com/v1/projects/${PROJECT_ID}/releases`;
        releaseRes = await fetch(createUrl, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: releaseName, rulesetName: ruleset.name })
        });
    }

    const releaseText = await releaseRes.text();
    console.log('Release response status:', releaseRes.status);
    console.log('Release response body:', releaseText.substring(0, 500));
}

async function deployStorageRules(token) {
    const url = `https://firebaserules.googleapis.com/v1/projects/${PROJECT_ID}/rulesets`;

    const rulesetRes = await fetch(url, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            source: {
                files: [{ name: 'storage.rules', content: STORAGE_RULES }]
            }
        })
    });
    const ruleset = await rulesetRes.json();
    if (!rulesetRes.ok) {
        console.error('❌ Storage ruleset creation failed:', ruleset);
        return;
    }
    console.log('✅ Storage ruleset created:', ruleset.name);

    // Release for Firebase Storage
    const releaseUrl = `https://firebaserules.googleapis.com/v1/projects/${PROJECT_ID}/releases/firebase.storage/${PROJECT_ID}.appspot.com`;
    const releaseRes = await fetch(releaseUrl, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `projects/${PROJECT_ID}/releases/firebase.storage/${PROJECT_ID}.appspot.com`, rulesetName: ruleset.name })
    });
    const release = await releaseRes.json();
    if (!releaseRes.ok) {
        console.error('❌ Storage release failed:', release);
    } else {
        console.log('✅ Storage rules released');
    }
}

async function main() {
    console.log('🔐 Getting access token...');
    const token = await getAccessToken();

    console.log('\n📜 Deploying Firestore rules...');
    await deployFirestoreRules(token);

    console.log('\n📦 Deploying Storage rules...');
    await deployStorageRules(token);

    console.log('\n🎉 Done! Rules deployed to Firebase project:', PROJECT_ID);
}

main().catch(console.error);
