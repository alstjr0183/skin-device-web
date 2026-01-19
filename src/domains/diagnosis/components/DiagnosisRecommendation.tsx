interface DiagnosisRecommendationProps {
    recommendation: string;
}

export default function DiagnosisRecommendation({ recommendation }: DiagnosisRecommendationProps) {
    return (
        <div>
            <h3 className="font-semibold text-gray-700 text-lg">총평 및 추천</h3>
            <p className="text-gray-900 mt-1 whitespace-pre-wrap">{recommendation}</p>
        </div>
    );
}
