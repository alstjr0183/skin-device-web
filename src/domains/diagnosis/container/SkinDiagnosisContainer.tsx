'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postSkinDiagnosis } from '@/domains/diagnosis/api/postSkinDiagnosis';
import { PostSkinDiagnosisResponse } from '@/domains/diagnosis/api/postSkinDiagnosis';
import ImageUploader from '../components/ImageUploader';
import ErrorMessage from '../components/ErrorMessage';

import DiagnosisResult from '../components/DiagnosisResult';

export default function SkinDiagnosisContainer() {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [result, setResult] = useState<PostSkinDiagnosisResponse | null>(null);

    const mutation = useMutation({
        mutationFn: postSkinDiagnosis,
        onSuccess: (data: PostSkinDiagnosisResponse) => {
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

            <ImageUploader
                preview={preview}
                file={file}
                isPending={mutation.isPending}
                onFileSelect={handleFileChange}
                onUpload={handleUpload}
            />

            {mutation.isError && <ErrorMessage />}

            {result && <DiagnosisResult result={result} />}
        </div>
    );
}
