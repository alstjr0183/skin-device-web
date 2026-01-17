'use client';

import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postSkinDiagnosis } from '@/services/postSkinDiagnosis';
import Image from 'next/image';

export default function SkinDiagnosis() {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const mutation = useMutation({
        mutationFn: postSkinDiagnosis,
        onSuccess: (data) => {
            alert('진단이 완료되었습니다! (결과: ' + JSON.stringify(data) + ')');
            // 여기에 결과 페이지 이동 등의 로직 추가 가능
        },
        onError: (error) => {
            console.error('Error uploading photo:', error);
            alert('사진 업로드 중 오류가 발생했습니다.');
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleUpload = () => {
        if (file) {
            mutation.mutate(file);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">피부 진단</h1>

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
                onChange={handleFileChange}
                accept="image/*"
                capture="user" // 모바일에서 카메라 바로 실행
                className="hidden"
            />

            <button
                onClick={handleUpload}
                disabled={!file || mutation.isPending}
                className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all
          ${!file || mutation.isPending
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 shadow-lg active:scale-95'
                    }`}
            >
                {mutation.isPending ? '분석 중...' : '진단하기'}
            </button>

            {mutation.isError && (
                <p className="text-red-500 text-sm mt-2">
                    오류가 발생했습니다. 다시 시도해주세요.
                </p>
            )}
        </div>
    );
}
