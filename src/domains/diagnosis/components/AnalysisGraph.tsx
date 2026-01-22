import Image from 'next/image';

interface AnalysisGraphProps {
    graphImage: string;
}

export default function AnalysisGraph({ graphImage }: AnalysisGraphProps) {
    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">분석 그래프</h3>
            <div className="relative w-full aspect-square md:aspect-video bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image
                    src={`data:image/png;base64,${graphImage}`}
                    alt="Analysis Graph"
                    fill
                    className="object-contain p-4"
                />
            </div>
        </div>
    );
}
