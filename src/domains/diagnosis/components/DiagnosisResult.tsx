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
        <div className="w-full mt-6 bg-white rounded-lg shadow-md p-6 max-w-2xl">
            <h2 className="text-xl font-bold mb-4">진단 결과</h2>

            {!result.is_skin ? (
                <NonSkinWarning />
            ) : (
                <div className="space-y-6">
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
