interface DiagnosisButtonProps {
    onClick: () => void;
    disabled: boolean;
    isPending: boolean;
}

export default function DiagnosisButton({ onClick, disabled, isPending }: DiagnosisButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform duration-200
      ${disabled
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'
                }`}
        >
            {isPending ? (
                <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>분석 중...</span>
                </div>
            ) : (
                '피부 진단하기'
            )}
        </button>
    );
}
