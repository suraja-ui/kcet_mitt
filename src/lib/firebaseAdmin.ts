// src/lib/firebaseAdmin.ts
// Server-side Firebase Admin SDK — Firestore only (for submissions + leaderboard)
// CDN delivery is handled by Vercel Blob — no Firebase Storage needed

import * as admin from 'firebase-admin';

const serviceAccount = {
    type: 'service_account',
    project_id: process.env.FIREBASE_PROJECT_ID,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

function getAdminApp() {
    if (admin.apps.length > 0) return admin.apps[0]!;
    return admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
}

const adminApp = getAdminApp();
export const adminDb = admin.firestore(adminApp);
export { admin };
