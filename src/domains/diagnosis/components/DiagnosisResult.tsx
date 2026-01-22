'use client';

import { PostSkinDiagnosisResponse } from '@/domains/diagnosis/api/postSkinDiagnosis';
import NonSkinWarning from './NonSkinWarning';
import DiagnosisName from './DiagnosisName';
import DiagnosisRecommendation from './DiagnosisRecommendation';
import AnalysisGraph from './AnalysisGraph';
import CarePriorities from './CarePriorities';
import RecommendedIngredients from './RecommendedIngredients';

interface DiagnosisResultProps {
    result: PostSkinDiagnosisResponse;
}

export default function DiagnosisResult({ result }: DiagnosisResultProps) {
    return (
        <div className="w-full mt-8 bg-white rounded-3xl shadow-xl p-8 max-w-2xl border border-gray-100 animate-fade-in-up">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">진단 결과</h2>
                <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">
                    AI 분석 완료
                </span>
            </div>

            {!result.is_skin ? (
                <NonSkinWarning />
            ) : (
                <div className="space-y-10">
                    <DiagnosisName diagnosis={result.diagnosis} />

                    <DiagnosisRecommendation recommendation={result.recommendation} />

                    {result.graph_image && <AnalysisGraph graphImage={result.graph_image} />}

                    <CarePriorities priorities={result.priorities} />

                    <RecommendedIngredients ingredients={result.recommended_ingredients} />
                </div>
            )}
        </div>
    );
}
