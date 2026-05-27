'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchNounMetadata, fetchBurnedNounsRange } from '@/lib/nouns';

export default function Home() {
  const [metadata, setMetadata] = useState<any>(null);
  const [burnedNouns, setBurnedNouns] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [gridLoading, setGridLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadArchive() {
      try {
        const data = await fetchBurnedNounsRange(1888, 1913);
        setBurnedNouns(data);
      } catch (err) {
        console.error('Failed to load burned nouns archive:', err);
      } finally {
        setGridLoading(false);
      }
    }
    loadArchive();
  }, []);

  const handleFetch = async (id: string) => {
    if (!id) return;

    setLoading(true);
    setError('');
    setMetadata(null);
    try {
      const data = await fetchNounMetadata(id);
      setMetadata(data);
    } catch (err) {
      setError('Not found.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F5F5F5] text-[#1A1A1A] flex flex-col font-sans antialiased selection:bg-[#E2FF33]">
      {/* Top Bar */}
      <nav className="h-12 border-b border-[#E5E5E5] px-4 flex justify-between items-center bg-white flex-shrink-0">
        <Link href="/" className="font-bold tracking-tighter text-sm uppercase">Burned Nouns</Link>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#999]">
          <Link href="/context" className="hover:text-black transition-colors">Context</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* Left Section: Project Context & Registry */}
        <section className="w-full lg:w-[350px] border-b lg:border-b-0 lg:border-r border-[#E5E5E5] bg-white p-6 lg:p-10 flex flex-col justify-center flex-shrink-0">
          <div className="max-w-xs mx-auto lg:mx-0">
            <header className="mb-8">
              <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-[#AAA] mb-2">The Archive</span>
              <h1 className="text-3xl font-black tracking-tighter leading-none mb-4 uppercase">
                Burned<br />Nouns
              </h1>
              <p className="text-[11px] text-[#666] leading-relaxed">
                Documenting the unique era between <strong className="text-black">Proposal 955</strong> and <strong className="text-black">968</strong>, where no-bid auctions led to the permanent destruction of Nouns.
              </p>
            </header>
            
            <div className="space-y-8">
              <div className="pt-8 border-t border-[#F0F0F0]">
                <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-[#AAA] mb-3">Era Scope</span>
                <p className="text-[10px] text-[#888] leading-relaxed mb-4">
                  This archive focuses specifically on <strong className="text-black">Noun IDs 1888—1913</strong>, reconstructed directly from on-chain seeds.
                </p>
                <Link href="/about" className="text-[9px] font-bold uppercase tracking-widest border-b border-black pb-0.5 hover:opacity-50 transition-opacity">
                  Read Full History →
                </Link>
              </div>
            </div>

            {error && (
              <div className="mt-6">
                <span className="text-[10px] font-mono text-red-500 uppercase tracking-tighter bg-red-50 px-2 py-1">
                  {error}
                </span>
              </div>
            )}

            {metadata && (
              <button 
                onClick={() => setMetadata(null)}
                className="mt-12 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                ← Back to Grid
              </button>
            )}
          </div>
        </section>

        {/* Right Section: Visual Archive */}
        <section className="flex-1 bg-[#F0F0F0] relative overflow-y-auto lg:overflow-hidden flex items-center justify-center p-4 lg:p-8">
          
          {loading && (
            <div className="absolute inset-0 bg-[#F0F0F0]/80 z-20 flex flex-col items-center justify-center">
              <div className="w-8 h-[1px] bg-black mb-2 animate-bounce"></div>
              <span className="font-mono text-[9px] tracking-widest uppercase text-black">Resolving ID</span>
            </div>
          )}

          {/* Detailed View */}
          {metadata && (
            <div className="w-full h-full max-w-4xl flex flex-col lg:flex-row gap-8 items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-full max-w-[400px] aspect-square bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_30px_60px_-12px_rgba(0,0,0,0.12)] border border-white flex-shrink-0 relative overflow-hidden">
                <img 
                  src={metadata.image} 
                  alt={metadata.name} 
                  className="w-full h-full object-contain p-2 filter grayscale-[0.9] contrast-[1.1] brightness-[0.8]" 
                />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
              </div>
              <div className="w-full lg:max-w-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-1">{metadata.name}</h2>
                  <p className="text-[11px] text-[#666] leading-relaxed">{metadata.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E5E5E5]">
                  {metadata.attributes?.map((attr: any, i: number) => (
                    <div key={i}>
                      <span className="block text-[8px] font-bold uppercase tracking-widest text-[#AAA] mb-0.5">{attr.trait_type}</span>
                      <span className="text-xs font-bold uppercase tracking-tight">{attr.value.replace(/-/g, ' ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grid View */}
          {!metadata && (
            <div className="w-full h-full flex flex-col">
              <header className="mb-6 flex justify-between items-end flex-shrink-0">
                <div className="space-y-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#AAA]">The Era Archive</span>
                  <h2 className="text-2xl font-black uppercase tracking-tighter">1888 — 1913</h2>
                </div>
                {gridLoading && <span className="text-[10px] font-mono animate-pulse uppercase">Syncing...</span>}
              </header>
              
              <div className="flex-1 overflow-y-auto min-h-0 pr-2 custom-scrollbar">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {gridLoading ? (
                    Array.from({ length: 26 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-white/40 animate-pulse border border-[#E5E5E5]"></div>
                    ))
                  ) : (
                    burnedNouns.map((noun) => (
                      <button
                        key={noun.tokenId}
                        onClick={() => handleFetch(noun.tokenId)}
                        className="group relative aspect-square bg-white border border-[#E5E5E5] hover:border-black transition-all hover:scale-[1.02] hover:z-10 shadow-sm hover:shadow-xl overflow-hidden"
                      >
                        <img 
                          src={noun.image} 
                          alt={noun.name} 
                          className="w-full h-full object-contain p-1 filter grayscale-[0.95] contrast-[1.05] brightness-[0.85] group-hover:grayscale-0 transition-all duration-500" 
                        />
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-end p-1">
                          <span className="text-[8px] font-mono font-bold bg-white px-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            #{noun.tokenId}
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
{/* Footer */}
<footer className="h-8 border-t border-[#E5E5E5] px-4 flex justify-between items-center bg-white text-[9px] text-[#999] uppercase tracking-widest flex-shrink-0">
  <a href="https://etherscan.io/address/0xE11018C82D4405bDBc7414eC988Fd08351666666" target="_blank" className="hover:text-black transition-colors">xppaicyber.eth</a>
  <span className="font-mono">© 2026 BURNEDNOUNS</span>
</footer>

      <style jsx global>{`
        body { margin: 0; padding: 0; overflow: hidden; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E5E5; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #999; }
      `}</style>
    </main>
  );
}
