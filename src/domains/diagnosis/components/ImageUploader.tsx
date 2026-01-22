'use client';

import { useRef, ChangeEvent } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
    preview: string | null;
    onFileSelect: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUploader({
    preview,
    onFileSelect,
}: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div
                className="relative w-64 h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 transition-colors"
                onClick={() => fileInputRef.current?.click()}
            >
                {preview ? (
                    <Image
                        src={preview}
                        alt="Skin preview"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="text-gray-500 text-center p-4">
                        <span className="block text-4xl mb-2">📸</span>
                        <span className="text-sm">터치하여 사진을 찍거나<br />업로드하세요</span>
                    </div>
                )}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={onFileSelect}
                accept="image/*"
                capture="user"
                className="hidden"
            />

        </div>
    );
}
