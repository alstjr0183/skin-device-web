interface DiagnosisNameProps {
    diagnosis: string;
}

export default function DiagnosisName({ diagnosis }: DiagnosisNameProps) {
    return (
        <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">피부 타입 진단명</h3>
            <p className="text-xl font-bold text-blue-600 tracking-tight leading-tight">
                {diagnosis}
            </p>
        </div>
    );
}
