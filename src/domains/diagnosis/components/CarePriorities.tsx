const SKIN_PROBLEMS: Record<string, string> = {
    wrinkles: '주름',
    pores: '모공',
    pigmentation: '색소침착',
    acne: '트러블',
    redness: '붉은기',
    elasticity: '탄력',
    hydration: '수분',
};

interface CarePrioritiesProps {
    priorities: string[];
}

export default function CarePriorities({ priorities }: CarePrioritiesProps) {
    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">관리 우선순위</h3>

            <div className="flex flex-wrap gap-2.5">
                {priorities.map((priority, index) => (
                    <span
                        key={index}
                        className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold tracking-tight transition-all hover:scale-105
                            ${index === 0
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                : 'bg-blue-50 text-blue-600'
                            }`}
                    >
                        <span className="mr-1.5 opacity-80">{index + 1}.</span>

                        {SKIN_PROBLEMS[priority] || priority}
                    </span>
                ))}
            </div>
        </div>
    );
}
