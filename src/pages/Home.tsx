import BackgroundMusic from "@/components/BackgroundMusic";
import DancingCouple from "@/components/DancingCouple";
import Footer from "@/components/Footer";
import PoemCard from "@/components/PoemCard";
import Toast from "@/components/Toast";
import { getPoemText } from "@/utils/poem";
import { useEffect, useState } from "react";

export default function Home() {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastOpen) return;
    const t = window.setTimeout(() => setToastOpen(false), 2200);
    return () => window.clearTimeout(t);
  }, [toastOpen]);

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage("Poem copied.");
      setToastOpen(true);
    } catch {
      setToastMessage("Copy failed. You can select the poem text manually.");
      setToastOpen(true);
    }
  }

  return (
    <div className="font-cute">
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-140px] h-[420px] w-[420px] rounded-full bg-blush-100/70 blur-3xl" />
          <div className="absolute right-[-160px] top-[10%] h-[520px] w-[520px] rounded-full bg-blush-200/70 blur-3xl" />
          <div className="absolute bottom-[-200px] left-[15%] h-[520px] w-[520px] rounded-full bg-blush-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-5xl">
          <div className="rounded-[32px] border border-white/70 bg-white/60 p-5 shadow-soft ring-1 ring-blush-200 backdrop-blur sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h1 className="truncate text-3xl font-black tracking-tight text-ink sm:text-4xl">Nicole Missiona</h1>
                <p className="mt-1 text-sm font-semibold text-ink/70">
                  Sa pink na munting pahina, may tula at sayaw na pangarap.
                </p>
              </div>

              <div className="flex justify-start sm:justify-end">
                <BackgroundMusic
                  title="For the Dancing and the Dreaming"
                  src="/audio/for-the-dancing-and-the-dreaming.mp3?v=2"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[1.25fr_0.75fr] md:items-stretch">
              <div className="min-w-0">
                <PoemCard onCopy={copyText} />
              </div>
              <div className="hidden md:block">
                <DancingCouple />
              </div>
            </div>

            <div className="mt-5 md:hidden">
              <DancingCouple />
            </div>

            <Footer />
          </div>
        </div>

        <div className="sr-only">{getPoemText()}</div>
        <Toast open={toastOpen} message={toastMessage} />
      </main>
    </div>
  );
}
