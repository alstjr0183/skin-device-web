import Image from 'next/image';

interface AnalysisGraphProps {
    graphImage: string;
}

export default function AnalysisGraph({ graphImage }: AnalysisGraphProps) {
    return (
        <div>
            <h3 className="font-semibold text-gray-700 mb-2">분석 그래프</h3>
            <div className="relative w-full aspect-square md:aspect-video bg-gray-50 rounded-lg overflow-hidden border">
                <Image
                    src={`data:image/png;base64,${graphImage}`}
                    alt="Analysis Graph"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
