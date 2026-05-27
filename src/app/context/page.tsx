'use client';

import Link from 'next/link';

export default function Context() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F5F5F5] text-[#1A1A1A] flex flex-col font-sans antialiased selection:bg-[#E2FF33]">
      {/* Top Bar */}
      <nav className="h-12 border-b border-[#E5E5E5] px-4 flex justify-between items-center bg-white flex-shrink-0">
        <Link href="/" className="font-bold tracking-tighter text-sm uppercase">Burned Nouns</Link>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#999]">
          <Link href="/context" className="text-black transition-colors">Context</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-[#F0F0F0] p-4 lg:p-12 flex justify-center items-start lg:items-center">
        <div className="max-w-3xl w-full bg-white border border-[#E5E5E5] p-6 lg:p-10 my-4 lg:my-8 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_20px_40px_-12px_rgba(0,0,0,0.1)]">
          
          <header className="mb-8 border-b border-black pb-6">
            <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-[#AAA] mb-2">Historical Context // Prop 955</span>
            <h1 className="text-2xl lg:text-4xl font-black tracking-tighter leading-[0.95] uppercase">
              The Great<br />Floor Debate
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-[10px] lg:text-xs leading-relaxed text-[#555] font-medium">
            
            {/* The Proposal */}
            <div className="space-y-6">
              <section>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-black mb-2">The Proposal</span>
                <p>
                  Proposal 955, submitted by <strong className="text-black">makenounsgreatagain.eth</strong>, was a pivot point in the DAO's economic strategy. It sought to raise the auction reserve price from its nominal level to <strong className="text-black">2.8 ETH</strong>.
                </p>
              </section>

              <section>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-black mb-2">The Rationale</span>
                <p>
                  The proposer argued that the DAO was facing a "voter dilution crisis." By allowing Nouns to be sold for nearly zero during market downturns, the "Book Value" of each Noun was being ignored, and the treasury's Net Asset Value (NAV) was being drained by participants with short-term incentives.
                </p>
              </section>

              <div className="bg-[#F5F5F5] p-6 border-l-2 border-black">
                <span className="block text-[7px] font-bold uppercase tracking-widest text-[#AAA] mb-2">Core Argument</span>
                <p className="italic text-black">
                  "We must protect the floor to ensure that every new member is a long-term steward who values the treasury as much as the art."
                </p>
              </div>
            </div>

            {/* The Debate */}
            <div className="space-y-6">
              <section>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-black mb-2">Community Sentiment</span>
                <div className="space-y-4">
                  <div className="p-3 border border-[#EEE]">
                    <span className="text-[7px] font-bold text-green-600 uppercase mb-1 block">In Favor // Value Preservation</span>
                    <p>Supporters emphasized that a 2.8 ETH floor reflected the actual cash-value held by the treasury, preventing arbitrage and preserving the "prestige" of the collection.</p>
                  </div>
                  <div className="p-3 border border-[#EEE]">
                    <span className="text-[7px] font-bold text-red-600 uppercase mb-1 block">Against // Proliferation First</span>
                    <p>Opponents viewed the move as "elitist," arguing that Nouns should remain accessible. They feared a "walled garden" would stifle the very diversity that made the DAO successful.</p>
                  </div>
                </div>
              </section>

              <section>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-black mb-2">The Outcome</span>
                <p>
                  Despite the heated debate, the proposal passed. Executed on <strong className="text-black">April 25, 2026</strong>, it immediately halted the "low-cost" era, leading to the first string of 0-bid auctions and the subsequent "Burned Nouns" chapter.
                </p>
              </section>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex justify-between items-center">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
              Back to Archive
            </Link>
            <span className="font-mono text-[9px] text-[#AAA]">SOURCE_NOUNS_CAMP_955</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-8 border-t border-[#E5E5E5] px-4 flex justify-between items-center bg-white text-[9px] text-[#999] uppercase tracking-widest flex-shrink-0">
        <span>Economic Registry v1.2</span>
        <span className="font-mono">© 2026</span>
      </footer>
    </main>
  );
}
