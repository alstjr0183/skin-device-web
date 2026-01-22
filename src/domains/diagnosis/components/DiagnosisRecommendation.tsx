interface DiagnosisRecommendationProps {
    recommendation: string;
}

export default function DiagnosisRecommendation({ recommendation }: DiagnosisRecommendationProps) {
    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">총평 및 추천</h3>
            <p className="text-gray-700 leading-8 text-[15px] whitespace-pre-wrap bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                {recommendation}
            </p>
        </div>
    );
}
