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
      <div className="flex-1 overflow-y-auto bg-[#F0F0F0] p-4 lg:p-12 flex justify-center items-start">
        <div className="max-w-5xl w-full bg-white border border-[#E5E5E5] p-8 lg:p-16 my-4 lg:my-8 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_20px_-40px_-12px_rgba(0,0,0,0.1)]">
          
          <header className="mb-12 border-b border-black pb-8">
            <div className="flex justify-between items-end mb-4">
              <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-[#AAA]">Registry // Historical Records</span>
              <span className="font-mono text-[9px] text-[#AAA]">DOC_955_958_961_969</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[0.85] uppercase">
              The Great<br />Floor Debate
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: The Catalyst (Prop 955) */}
            <div className="lg:col-span-5 space-y-10">
              <section>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-black mb-4 border-b border-[#EEE] pb-1">The Catalyst // Prop 955</span>
                <p className="text-sm lg:text-base leading-relaxed text-[#444] mb-4">
                  Proposal 955 (April 25, 2026) raised the auction reserve to <strong className="text-black">2.8 ETH</strong>.
                </p>
                <p className="text-xs leading-relaxed text-[#666] mb-4">
                  The goal was to protect the treasury's Net Asset Value (NAV) and prevent "cheap" Nouns from diluting existing holders during market lulls. This move effectively ended the "low-floor" era and triggered the first burns.
                </p>
                <div className="bg-black text-white p-4 mb-4">
                  <span className="block text-[8px] font-bold uppercase tracking-[0.3em] mb-2 opacity-60">Critical Participation</span>
                  <p className="text-[10px] leading-relaxed">
                    <strong className="text-[#E2FF33]">vote.nounders.eth</strong>—the address controlled by the Nounders / founding contributors—participated in this vote, casting an <strong className="text-[#E2FF33]">AGAINST</strong> vote on Prop 955.
                  </p>
                  <p className="text-[9px] mt-2 opacity-80 italic">
                    This marked their first participation since <strong className="text-white">Proposal 732</strong> (Nouns DUNA Reserve Admin 2025), where they also voted against.
                  </p>
                </div>
              </section>

              <div className="bg-[#F5F5F5] p-6 border-l-2 border-black">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-[#AAA] mb-3">Core Rationale</span>
                <p className="text-sm italic font-bold tracking-tight text-black leading-tight">
                  "Protect the floor to ensure every new member is a long-term steward."
                </p>
              </div>
            </div>

            {/* Right: The Resistance (Props 958, 961, 969) */}
            <div className="lg:col-span-7 space-y-12">
              <section>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-black mb-6 border-b border-[#EEE] pb-1">The Resistance // The Push to Revert</span>
                <p className="text-sm leading-relaxed text-[#444] mb-8">
                  As the burns began, a faction of the community—led by <strong className="text-black">coolbeans1r.eth</strong>—mounted a persistent legislative counter-offensive to return the reserve price to <strong className="text-black">0 ETH</strong>.
                </p>

                <div className="space-y-8">
                  {/* Prop 958 */}
                  <div className="border border-[#E5E5E5] p-5 hover:border-black transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xs font-black uppercase tracking-widest">Proposal 958</h3>
                      <span className="text-[9px] font-mono bg-gray-100 px-1.5 py-0.5 uppercase">Canceled</span>
                    </div>
                    <p className="text-[11px] text-[#666] mb-4 italic leading-snug">
                      "Let the auction be a playground, not a boardroom. A reserve price is a crutch."
                    </p>
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#AAA]">Date: 23 April 2026</div>
                  </div>

                  {/* Prop 961 */}
                  <div className="border border-[#E5E5E5] p-5 hover:border-black transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xs font-black uppercase tracking-widest">Proposal 961</h3>
                      <div className="flex gap-2">
                        <span className="text-[9px] font-mono bg-red-50 text-red-600 px-1.5 py-0.5 uppercase">Defeated</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-[#F9F9F9] py-1"><span className="block text-[8px] uppercase text-[#AAA]">For</span><span className="text-[10px] font-bold">90</span></div>
                      <div className="bg-[#F9F9F9] py-1"><span className="block text-[8px] uppercase text-[#AAA]">Against</span><span className="text-[10px] font-bold">434</span></div>
                      <div className="bg-[#F9F9F9] py-1"><span className="block text-[8px] uppercase text-[#AAA]">Quorum</span><span className="text-[10px] font-bold">203</span></div>
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#AAA]">Date: 26 April 2026</div>
                  </div>

                  {/* Prop 969 */}
                  <div className="border border-[#E5E5E5] p-5 hover:border-black transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xs font-black uppercase tracking-widest">Proposal 969</h3>
                      <div className="flex gap-2">
                        <span className="text-[9px] font-mono bg-red-50 text-red-600 px-1.5 py-0.5 uppercase">Defeated</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#444] mb-4 leading-relaxed">
                      Argument: "The auction is the heartbeat. Zero sales means zero revenue and zero momentum. Turn the lights back on."
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-[#F9F9F9] py-1"><span className="block text-[8px] uppercase text-[#AAA]">For</span><span className="text-[10px] font-bold">123</span></div>
                      <div className="bg-[#F9F9F9] py-1"><span className="block text-[8px] uppercase text-[#AAA]">Against</span><span className="text-[10px] font-bold">281</span></div>
                      <div className="bg-[#F9F9F9] py-1"><span className="block text-[8px] uppercase text-[#AAA]">Quorum</span><span className="text-[10px] font-bold">204</span></div>
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#AAA]">Date: 16 May 2026</div>
                  </div>
                </div>
              </section>

              <footer className="pt-8 border-t border-[#E5E5E5]">
                <p className="text-[11px] text-[#666] leading-relaxed">
                  These failed attempts demonstrated a deep split in the DAO's identity: whether Nouns are primarily an <strong className="text-black">Economic Asset</strong> (to be protected) or a <strong className="text-black">Cultural Heartbeat</strong> (to be proliferated at any cost).
                </p>
              </footer>
            </div>

          </div>

          <div className="mt-16 pt-10 border-t border-[#E5E5E5] flex justify-between items-center">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
              Back to Archive
            </Link>
            <span className="font-mono text-[9px] text-[#AAA]">SOURCES: PROP_958_961_969</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-8 border-t border-[#E5E5E5] px-4 flex justify-between items-center bg-white text-[9px] text-[#999] uppercase tracking-widest flex-shrink-0">
        <span>Legislative History v1.2</span>
        <span className="font-mono">© 2026</span>
      </footer>
    </main>
  );
}
