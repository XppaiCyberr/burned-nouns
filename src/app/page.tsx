'use client';

import { useState } from 'react';
import { fetchNounMetadata } from '@/lib/nouns';

export default function Home() {
  const [nounId, setNounId] = useState('');
  const [metadata, setMetadata] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nounId) return;
    setLoading(true);
    setError('');
    setMetadata(null);
    try {
      const data = await fetchNounMetadata(nounId);
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
        <span className="font-bold tracking-tighter text-sm uppercase">Burned Nouns</span>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#999]">
          <a href="#" className="hover:text-black transition-colors">Explorer</a>
          <a href="#" className="hover:text-black transition-colors">Burned</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* Left/Top Section: Control Panel */}
        <section className="w-full lg:w-[350px] border-b lg:border-b-0 lg:border-r border-[#E5E5E5] bg-white p-6 flex flex-col justify-center flex-shrink-0">
          <div className="max-w-xs mx-auto lg:mx-0">
            <h1 className="text-4xl font-black tracking-tighter leading-none mb-4 uppercase">
              Registry
            </h1>
            
            <form onSubmit={handleFetch} className="mb-6">
              <label className="block text-[9px] font-bold uppercase tracking-[0.2em] mb-2 text-[#999]">
                ID
              </label>
              <div className="flex border-b border-black">
                <input
                  type="text"
                  pattern="[0-9]*"
                  value={nounId}
                  onChange={(e) => setNounId(e.target.value.replace(/\D/g, ''))}
                  placeholder="000"
                  className="flex-1 bg-transparent py-2 text-3xl font-mono outline-none placeholder:opacity-10"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 font-bold uppercase text-[10px] tracking-widest hover:opacity-50 transition-opacity"
                >
                  {loading ? '...' : 'Fetch'}
                </button>
              </div>
            </form>

            <p className="text-xs text-[#666] leading-relaxed mb-4">
              Search the Nouns archive. Data is resolved in real-time from Ethereum.
            </p>

            {error && (
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-tighter bg-red-50 px-2 py-1">
                {error}
              </span>
            )}
          </div>
        </section>

        {/* Right Section: Visual Display */}
        <section className="flex-1 bg-[#F0F0F0] relative overflow-hidden flex items-center justify-center p-4 lg:p-8">
          {!metadata && !loading && (
            <div className="text-[#999] font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">
              Awaiting Input
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center">
              <div className="w-8 h-[1px] bg-black mb-2 animate-bounce"></div>
              <span className="font-mono text-[9px] tracking-widest uppercase">Searching</span>
            </div>
          )}

          {metadata && !loading && (
            <div className="w-full h-full max-w-4xl flex flex-col lg:flex-row gap-8 items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Image Container */}
              <div className="w-full max-w-[400px] aspect-square bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_30px_60px_-12px_rgba(0,0,0,0.12)] border border-white flex-shrink-0">
                <img
                  src={metadata.image}
                  alt={metadata.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Info Container */}
              <div className="w-full lg:max-w-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-1">{metadata.name}</h2>
                  <p className="text-[11px] text-[#666] leading-relaxed line-clamp-3">{metadata.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E5E5E5]">
                  {metadata.attributes?.map((attr: any, i: number) => (
                    <div key={i}>
                      <span className="block text-[8px] font-bold uppercase tracking-widest text-[#AAA] mb-0.5">
                        {attr.trait_type}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-tight">
                        {attr.value.replace(/-/g, ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="h-8 border-t border-[#E5E5E5] px-4 flex justify-between items-center bg-white text-[9px] text-[#999] uppercase tracking-widest flex-shrink-0">
        <span>Experimental Protocol v1.0</span>
        <span className="font-mono">© 2026</span>
      </footer>

      <style jsx global>{`
        body { margin: 0; padding: 0; overflow: hidden; }
      `}</style>
    </main>
  );
}
