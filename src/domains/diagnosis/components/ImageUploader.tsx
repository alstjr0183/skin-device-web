'use client';

import { useRef, ChangeEvent } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
    preview: string | null;
    onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUploader({
    preview,
    onChangeFile,
}: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div
                className="relative w-full aspect-square max-w-[280px] bg-gray-50 rounded-3xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-gray-200 cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 group"
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
                    <div className="text-gray-400 text-center p-6 transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:shadow-sm transition-colors">
                            <span className="text-3xl">📸</span>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mb-1 group-hover:text-blue-600 transition-colors">
                            사진을 등록해주세요
                        </p>
                        <p className="text-xs text-gray-400">
                            터치하여 촬영 또는 업로드
                        </p>
                    </div>
                )}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={onChangeFile}
                accept="image/*"
                capture="user"
                className="hidden"
            />
        </div>
    );
}
