export default function ErrorMessage() {
    return (
        <div className="w-full bg-red-50 border border-red-100 rounded-xl p-4 mt-4 animate-shake">
            <p className="text-red-600 text-sm font-medium text-center flex items-center justify-center gap-2">
                <span>⚠️</span> 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
            </p>
        </div>
    );
}
