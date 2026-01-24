import Image from 'next/image';

interface AnalysisGraphProps {
    graphImage: string;
}

export default function AnalysisGraph({ graphImage }: AnalysisGraphProps) {
    return (
        <div className="relative z-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">분석 그래프</h3>

            <div className="group relative w-full aspect-square md:aspect-video bg-gray-50 rounded-2xl border border-gray-100 shadow-sm cursor-zoom-in">
                {/* 기본 이미지 뷰 */}
                <div className="w-full h-full overflow-hidden rounded-2xl transition-opacity duration-300 group-hover:opacity-30">
                    <Image
                        src={`data:image/png;base64,${graphImage}`}
                        alt="Analysis Graph"
                        fill
                        className="object-contain p-4"
                    />
                </div>

                {/* 호버 시 나타나는 확대 뷰 (오버레이) - 모바일에서는 숨김 처리 */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] flex-col items-center justify-center z-50 pointer-events-none opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300 ease-out">
                    <div className="relative w-full h-full bg-white rounded-2xl p-2 shadow-2xl border border-gray-100 ring-4 ring-black/5">
                        <Image
                            src={`data:image/png;base64,${graphImage}`}
                            alt="Enlarged Analysis Graph"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <p className="text-xs text-center text-gray-400 mt-2 flex items-center justify-center gap-1">
                <span className="text-base">🔍</span> 마우스를 올리면 크게 볼 수 있습니다
            </p>
        </div>
    );
}
