import Logo from "@/app/components/common/Logo";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <section>
                <Logo width={340} height={93} className="block mx-auto" />
                <h1 className="text-center text-xl font-semibold text-zinc-800 mt-6">We are very hard at work &ndash; check back later!</h1>
            </section>
        </main>
    );
}