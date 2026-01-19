import { PostSkinDiagnosisIngredient } from "@/domains/diagnosis/api/postSkinDiagnosis";

interface RecommendedIngredientsProps {
    ingredients: PostSkinDiagnosisIngredient[];
}

const USAGE_TIME_MAP: Record<string, string> = {
    DAY: '낮',
    NIGHT: '밤',
    ANY: '낮/밤',
};

export default function RecommendedIngredients({ ingredients }: RecommendedIngredientsProps) {
    return (
        <div>
            <h3 className="font-semibold text-gray-700 mb-3">추천 성분</h3>
            <div className="grid grid-cols-1 gap-4">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-gray-50 hover:shadow-sm transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <span className="font-bold text-lg text-gray-900">{ingredient.name_ko}</span>
                                <span className="text-sm text-gray-500 ml-2">({ingredient.name_en})</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${ingredient.usage_time === 'NIGHT' ? 'bg-indigo-100 text-indigo-800' : 'bg-green-100 text-green-800'}`}>
                                {USAGE_TIME_MAP[ingredient.usage_time] || ingredient.usage_time}
                            </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">효능:</span> {ingredient.efficacy}</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">추천 이유:</span> {ingredient.match_reason}</p>
                        {ingredient.caution && (
                            <p className="text-sm text-red-600 mt-1"><span className="font-semibold">주의:</span> {ingredient.caution}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
