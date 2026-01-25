'use client';

import { useState, useRef, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postSkinDiagnosis } from '@/domains/diagnosis/api/postSkinDiagnosis';
import { PostSkinDiagnosisResponse } from '@/domains/diagnosis/api/postSkinDiagnosis';
import ImageUploader from '../components/ImageUploader';
import ErrorMessage from '../components/ErrorMessage';

import ConcernTextarea from '../components/ConcernTextarea';
import DiagnosisButton from '../components/DiagnosisButton';
import DiagnosisResult from '../components/DiagnosisResult';

export default function SkinDiagnosisContainer() {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [concern, setConcern] = useState<string>('');
    const [result, setResult] = useState<PostSkinDiagnosisResponse | null>(null);

    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (result && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [result]);

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

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleClickUpload = () => {
        if (file) {
            mutation.mutate({ file, concern });
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 p-4 w-full max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">피부 진단</h1>

            <ImageUploader
                preview={preview}
                onChangeFile={handleChangeFile}
            />

            <ConcernTextarea
                value={concern}
                onChange={setConcern}
                disabled={mutation.isPending}
            />

            <DiagnosisButton
                onClickUpload={handleClickUpload}
                disabled={!file || mutation.isPending}
                isPending={mutation.isPending}
            />

            {mutation.isError && <ErrorMessage />}

            {result && (
                <div ref={resultRef} className="w-full flex justify-center scroll-mt-4">
                    <DiagnosisResult result={result} />
                </div>
            )}
        </div>
    );
}
