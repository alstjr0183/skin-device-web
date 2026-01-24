'use client';

import { PostSkinDiagnosisResponse } from '@/domains/diagnosis/api/postSkinDiagnosis';
import NonSkinWarning from './NonSkinWarning';
import DiagnosisName from './DiagnosisName';
import DiagnosisRecommendation from './DiagnosisRecommendation';
import AnalysisGraph from './AnalysisGraph';
import CarePriorities from './CarePriorities';
import RecommendedIngredients from './RecommendedIngredients';
import DiagnosisHeader from './DiagnosisHeader';

interface DiagnosisResultProps {
    result: PostSkinDiagnosisResponse;
}

export default function DiagnosisResult({ result }: DiagnosisResultProps) {
    return (
        <div className="w-full mt-8 bg-white rounded-3xl shadow-xl p-6 md:p-8 max-w-2xl border border-gray-100 animate-fade-in-up">
            <DiagnosisHeader />

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
