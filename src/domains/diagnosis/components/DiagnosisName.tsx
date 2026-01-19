interface DiagnosisNameProps {
    diagnosis: string;
}

export default function DiagnosisName({ diagnosis }: DiagnosisNameProps) {
    return (
        <div>
            <h3 className="font-semibold text-gray-700 text-lg">진단명</h3>
            <p className="text-gray-900 mt-1 text-lg">{diagnosis}</p>
        </div>
    );
}
