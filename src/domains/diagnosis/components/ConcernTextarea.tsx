'use client';

interface ConcernTextareaProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function ConcernTextarea({ value, onChange, disabled }: ConcernTextareaProps) {
    return (
        <div className="w-full">
            <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-2">
                피부 고민 (선택사항)
            </label>
            <textarea
                id="concern"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                placeholder="피부 고민을 자유롭게 적어주세요. (예: 요즘 속건조가 너무 심해요)"
                className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:text-gray-500"
            />
        </div>
    );
}
