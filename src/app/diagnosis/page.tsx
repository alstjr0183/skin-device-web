import SkinDiagnosis from '@/domains/diagnosis/container/SkinDiagnosisContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "핏스킨 (FitSkin) - 피부진단",
    description: "AI 기반 맞춤형 피부 진단 서비스",
};

export default function DiagnosisPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <SkinDiagnosis />
        </main>
    );
}
