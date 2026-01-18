'use client';

import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postSkinDiagnosis } from '@/services/postSkinDiagnosis';
import Image from 'next/image';
import { SkinDiagnosisResponse } from '@/services/postSkinDiagnosis';

export default function SkinDiagnosis() {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [result, setResult] = useState<SkinDiagnosisResponse | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const mutation = useMutation({
        mutationFn: postSkinDiagnosis,
        onSuccess: (data: SkinDiagnosisResponse) => {
            setResult(data);
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
        <div className="flex flex-col items-center gap-6 p-4">
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

            {result && (
                <div className="w-full mt-6 bg-white rounded-lg shadow-md p-6 max-w-md">
                    <h2 className="text-xl font-bold mb-4">진단 결과</h2>

                    {result.diagnosis === "피부 사진이 아닙니다." ? (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        업로드하신 사진은 피부 사진이 아닌 것으로 판별되었습니다.<br />
                                        피부 부위가 잘 보이도록 다시 촬영하여 업로드해주세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-700">진단명</h3>
                                <p className="text-gray-900 mt-1">{result.diagnosis}</p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-700">추천 내용</h3>
                                <p className="text-gray-900 mt-1 whitespace-pre-wrap">{result.recommendation}</p>
                            </div>

                            {result.graph_image && (
                                <div className="mt-4">
                                    <h3 className="font-semibold text-gray-700 mb-2">분석 그래프</h3>
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src={`data:image/png;base64,${result.graph_image}`}
                                            alt="Analysis Graph"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
