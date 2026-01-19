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
            <h3 className="font-semibold text-gray-700 mb-2">관리 우선순위</h3>
            <div className="flex flex-wrap gap-2">
                {priorities.map((priority, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {index + 1}. {SKIN_PROBLEMS[priority] || priority}
                    </span>
                ))}
            </div>
        </div>
    );
}
