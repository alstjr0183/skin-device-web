'use client';

interface ConcernTextareaProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function ConcernTextarea({ value, onChange, disabled }: ConcernTextareaProps) {
    return (
        <div className="w-full">
            <label htmlFor="concern" className="block text-base font-bold text-gray-900 mb-3 tracking-tight">
                피부 고민 <span className="text-gray-400 font-normal text-sm ml-1">(선택)</span>
            </label>
            <div className="relative">
                <textarea
                    id="concern"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    placeholder="예) 요즘 이마에 여드름이 자주 나요."
                    className="w-full h-36 p-5 bg-gray-50 border border-transparent rounded-2xl resize-none outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50 disabled:text-gray-400 text-gray-800 leading-relaxed"
                />
            </div>
            <p className="text-xs text-gray-400 mt-2 px-1">
                구체적으로 적어주실수록 정확한 진단에 도움이 됩니다.
            </p>
        </div>
    );
}
