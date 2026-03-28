'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

// Configure the worker for react-pdf securely over HTTPS
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PdfCropper({ 
    file, 
    onCrop 
}: { 
    file: File | string, 
    onCrop: (base64: string) => void 
}) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    useEffect(() => {
        if (file instanceof File) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setFileUrl(file);
        }
    }, [file]);
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [crop, setCrop] = useState<Crop>();
    const pageRef = useRef<HTMLDivElement>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const handleConfirmCrop = () => {
        try {
            if (!crop || !pageRef.current || crop.width === 0 || crop.height === 0) {
                alert('No crop area selected. Drag a box over the PDF first!');
                return;
            }
            const wrapper = pageRef.current;
            const canvasObj = wrapper.querySelector('canvas');
            if (!canvasObj) {
                alert('Could not locate the PDF rendering canvas. Please wait for it to fully render.');
                return;
            }

            // The canvas dimensions vs CSS displayed dimensions
            const scaleX = canvasObj.width / wrapper.clientWidth;
            const scaleY = canvasObj.height / wrapper.clientHeight;

            const cropCanvas = document.createElement('canvas');
            cropCanvas.width = crop.width * scaleX;
            cropCanvas.height = crop.height * scaleY;
            const ctx = cropCanvas.getContext('2d');

            if (ctx) {
                // Remove background transparency just in case
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
                ctx.drawImage(
                    canvasObj,
                    crop.x * scaleX,
                    crop.y * scaleY,
                    crop.width * scaleX,
                    crop.height * scaleY,
                    0,
                    0,
                    crop.width * scaleX,
                    crop.height * scaleY
                );
                // Default to 85% quality JPEG
                const base64 = cropCanvas.toDataURL('image/jpeg', 0.85);
                onCrop(base64);
                setCrop(undefined); // Reset crop box after capture
            } else {
                alert('Failed to obtain 2d rendering context from crop canvas.');
            }
        } catch (e: any) {
            console.error('Cropper Error:', e);
            alert(`Cropper failed: ${e.message || 'Unknown Security or CORS error preventing canvas extraction.'}`);
        }
    };

    return (
        <div style={{ flex: 1, padding: '16px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ margin: 0, fontSize: '15px', color: '#f1f5f9' }}>PDF Image Snipper (Crop to extract)</h4>
                
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button onClick={() => setPageNumber(p => Math.max(1, p - 1))} disabled={pageNumber <= 1} style={styles.navBtn}>← Prev</button>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>Page {pageNumber} of {numPages}</span>
                    <button onClick={() => setPageNumber(p => Math.min(numPages, p + 1))} disabled={pageNumber >= numPages} style={styles.navBtn}>Next →</button>
                </div>

                <button 
                    onClick={handleConfirmCrop} 
                    disabled={!crop?.width} 
                    style={{ 
                        ...styles.cropBtn, 
                        opacity: crop?.width ? 1 : 0.4, 
                        cursor: crop?.width ? 'pointer' : 'not-allowed' 
                    }}
                >
                    Extract Snipping ✂️
                </button>
            </div>
            
            <div style={{ overflow: 'auto', flex: 1, border: '1px solid #334155', borderRadius: '8px', background: '#e2e8f0', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                    <div ref={pageRef} style={{ pointerEvents: 'none', maxWidth: '100%' }}>
                        {fileUrl && (
                            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page 
                                    pageNumber={pageNumber} 
                                    // Use a responsive pixel density without dominating the parent flexbox
                                    width={500} 
                                    renderTextLayer={false} 
                                    renderAnnotationLayer={false} 
                                    loading={<div style={{ padding: '40px', color: '#475569' }}>Rendering precise PDF canvas...</div>}
                                />
                            </Document>
                        )}
                    </div>
                </ReactCrop>
            </div>
            <p style={{ marginTop: '12px', fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
                Instruction: Drag a box over any image, diagram, or formula in the PDF above, then click 'Extract Snipping' to hold it in your clipboard, then click 'Paste from Snipper' on any specific question!
            </p>
        </div>
    );
}

const styles = {
    navBtn: {
        background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px'
    },
    cropBtn: {
        background: '#3b82f6', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600
    }
};
