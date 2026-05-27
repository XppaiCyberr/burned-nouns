'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F5F5F5] text-[#1A1A1A] flex flex-col font-sans antialiased selection:bg-[#E2FF33]">
      {/* Top Bar */}
      <nav className="h-12 border-b border-[#E5E5E5] px-4 flex justify-between items-center bg-white flex-shrink-0">
        <Link href="/" className="font-bold tracking-tighter text-sm uppercase">Burned Nouns</Link>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#999]">
          <Link href="/context" className="hover:text-black transition-colors">Context</Link>
          <Link href="/about" className="text-black transition-colors">About</Link>
        </div>
      </nav>

      {/* Main Content Area - Wide horizontal layout */}
      <div className="flex-1 overflow-y-auto bg-[#F0F0F0] p-4 lg:p-12 flex justify-center items-start">
        <div className="max-w-2xl w-full bg-white border border-[#E5E5E5] p-6 lg:p-10 my-4 lg:my-8 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_15px_30px_-10px_rgba(0,0,0,0.08)]">
          <header className="mb-6 border-b border-black pb-4">
            <span className="block text-[7px] font-bold uppercase tracking-[0.3em] text-[#AAA] mb-2">Historical Archive</span>
            <h1 className="text-xl lg:text-3xl font-black tracking-tighter leading-[0.95] uppercase">
              The Burned<br />Nouns Era
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[9px] lg:text-[11px] leading-relaxed text-[#555] font-medium">
            <div className="space-y-6">
              <p>
                The project focuses on the <strong className="text-black">“Burned Nouns”</strong> era in Nouns DAO history.
              </p>

              <p>
                Following Proposal 955, executed on April 25, 2026 — “Set Auction Reserve Price to 2.8 ETH” proposed by makenounsgreatagain.eth — the auction reserve price was raised to 2.8 ETH. As a result, many daily Noun auctions received no bids, causing those Nouns to be permanently burned.
              </p>

              <p>
                This created a unique and short-lived period where multiple Nouns ceased to exist immediately after minting due to receiving no bids.
              </p>            </div>

            <div className="space-y-6">
              <p>
                The situation changed after Proposal 968, executed on May 25, 2026 — “Route No-Bid Nouns to the Treasury and NounsAuctionHouseV4 Upgrade” proposed by nocguild.eth. The upgrade introduced a new mechanism where any Noun receiving no bids would no longer be burned, but instead transferred directly to the treasury.
              </p>

              <div className="bg-[#F5F5F5] p-8 border-l-4 border-black">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#999] mb-3">Scope of Records</span>
                <p className="text-2xl font-bold tracking-tight text-black italic leading-tight">
                  “Because of this change, the ‘Burned Nouns’ era only includes Noun IDs 1888 through 1913.”
                </p>
              </div>

              <p>
                After Noun 1913, all no-bid Nouns were preserved in the treasury instead of being destroyed. The project aims to document, preserve, and celebrate this rare chapter in Nouns history.
              </p>

              <div className="pt-10 border-t border-[#EEE]">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-black mb-4">Creator's Note // xppaicyber</span>
                <div className="bg-black text-white p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[20px]">☢</span>
                  </div>
                  <p className="text-xs lg:text-sm font-bold leading-relaxed italic mb-4">
                    "With this project, I am trying something entirely new compared to everything I've done before. I'm venturing into territory that some might consider dangerous, sensitive, or even taboo."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-80">
                    My hope is that this archive attracts attention—be it in a good way, or even a bad way. It needs to be seen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-[#E5E5E5] flex justify-between items-center">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
              Back to Archive
            </Link>
            <span className="font-mono text-[10px] text-[#999]">ARCHIVE_DOC_955_968_V1.2</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-8 border-t border-[#E5E5E5] px-4 flex justify-between items-center bg-white text-[9px] text-[#999] uppercase tracking-widest flex-shrink-0">
        <a href="https://etherscan.io/address/0xE11018C82D4405bDBc7414eC988Fd08351666666" target="_blank" className="hover:text-black transition-colors">xppaicyber.eth</a>
        <span className="font-mono">© 2026</span>
      </footer>
    </main>
  );
}
