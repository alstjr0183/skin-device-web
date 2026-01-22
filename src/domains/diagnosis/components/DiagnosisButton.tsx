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
            className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all
      ${disabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg active:scale-95'
                }`}
        >
            {isPending ? '분석 중...' : '진단하기'}
        </button>
    );
}
