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
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">추천 성분</h3>
            <div className="grid grid-cols-1 gap-5">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
                                    {ingredient.name_ko}
                                </span>
                                <span className="text-sm font-medium text-gray-500 mt-0.5">
                                    {ingredient.name_en}
                                </span>
                            </div>
                            <span className={`text-xs px-2.5 py-1.5 rounded-lg font-medium tracking-tight ${ingredient.usage_time === 'NIGHT'
                                    ? 'bg-indigo-50 text-indigo-600'
                                    : 'bg-green-50 text-green-600'
                                }`}>
                                {USAGE_TIME_MAP[ingredient.usage_time] || ingredient.usage_time}
                            </span>
                        </div>

                        <div className="space-y-2 mb-5">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold text-gray-900 mr-2">효능</span>
                                {ingredient.efficacy}
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <span className="font-semibold text-gray-900 mr-2">추천 이유</span>
                                {ingredient.match_reason}
                            </p>
                            {ingredient.caution && (
                                <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg leading-relaxed mt-2">
                                    <span className="font-semibold mr-1">주의</span>
                                    {ingredient.caution}
                                </p>
                            )}
                        </div>

                        {ingredient.products && ingredient.products.length > 0 && (
                            <div className="pt-5 border-t border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-sm font-bold text-gray-800">올리브영 추천 제품</h4>
                                    <span className="text-[11px] text-gray-400">인기순 Top 3</span>
                                </div>
                                <div className="space-y-2.5">
                                    {ingredient.products.map((product, pIndex) => (
                                        <a
                                            key={pIndex}
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                                        >
                                            <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-medium text-gray-500 mb-0.5">{product.brand}</p>
                                                <p className="text-sm font-semibold text-gray-900 truncate leading-tight group-hover:text-blue-600 transition-colors">
                                                    {product.name}
                                                </p>
                                            </div>
                                            <div className="text-gray-300 group-hover:text-blue-400 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
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
