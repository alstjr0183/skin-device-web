import Link from "next/link";
import Image from "next/image";
import icon from "./icon.png";

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-noto-sans-kr)]">
            {/* Header */}
            <header className="w-full max-w-screen-xl mx-auto p-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                        <Image src={icon} alt="FitSkin Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">핏스킨</span>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-20 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 tracking-tight">
                    AI 기반 맞춤형 피부 진단
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    내 피부에 딱 맞는 <br />
                    <span className="text-blue-600">진단 & 솔루션</span>
                </h1>
                <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
                    사진 한 장으로 피부 상태를 정밀 분석하고<br /> 당신에게 꼭 필요한 성분과 제품을 추천해드려요.
                </p>

                <Link
                    href="/diagnosis"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                    지금 무료로 진단받기
                    <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </Link>

                {/* Features / Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl w-full text-left">
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4">📸</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">간편한 촬영</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">얼굴 사진을 업로드하거나 촬영하면 AI가 즉시 분석을 시작합니다.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4">📊</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">정밀 진단</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">주름, 모공, 트러블 등 7가지 항목을 상세하게 리포트로 제공합니다.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4">🧴</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">맞춤 솔루션</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">내 피부 타입에 딱 맞는 성분과 올리브영 추천 제품을 확인하세요.</p>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
                <p>© 2026 FitSkin. All rights reserved.</p>
            </footer>
        </div>
    );
}
