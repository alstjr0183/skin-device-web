import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
                <h1 className="text-4xl font-bold">Skin Device Web</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    피부 진단 서비스를 시작해보세요.
                </p>

                <Link
                    href="/diagnosis"
                    className="rounded-full bg-blue-600 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                    진단 시작하기
                </Link>
            </main>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
                <p>© 2026 Skin Device Web. All rights reserved.</p>
            </footer>
        </div>
    );
}
