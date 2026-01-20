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

                        {ingredient.products && ingredient.products.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <h4 className="text-sm font-semibold text-gray-700 mb-1">올리브영 추천 제품</h4>
                                <p className="text-xs text-gray-500 mb-3">
                                    올리브영에서 해당 성분 검색 시 추천순 상위 3개 제품입니다.
                                </p>
                                <div className="space-y-3">
                                    {ingredient.products.map((product, pIndex) => (
                                        <a
                                            key={pIndex}
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-2 bg-white rounded border hover:border-blue-300 transition-colors"
                                        >
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs text-gray-500 mb-0.5">{product.brand}</p>
                                                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
