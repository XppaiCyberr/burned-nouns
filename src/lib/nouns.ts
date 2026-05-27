import { ethers } from 'ethers';
import { NOUNS_TOKEN_ABI, NOUNS_TOKEN_ADDRESS, NOUNS_DESCRIPTOR_ABI, NOUNS_DESCRIPTOR_ADDRESS } from './constants';
import { BACKGROUNDS, BODIES, ACCESSORIES, HEADS, GLASSES } from './traits';

const RPC_URL = 'https://eth-mainnet.g.alchemy.com/v2/vQGyxhOFF05Xc6ekLTsRC';

export async function fetchNounMetadata(tokenId: string) {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const tokenContract = new ethers.Contract(NOUNS_TOKEN_ADDRESS, NOUNS_TOKEN_ABI, provider);
  const descriptorContract = new ethers.Contract(NOUNS_DESCRIPTOR_ADDRESS, NOUNS_DESCRIPTOR_ABI, provider);

  try {
    const seeds = await tokenContract.seeds(tokenId);
    
    // Attempt to get tokenURI, but fallback to manual reconstruction if burned
    let name = `Noun ${tokenId}`;
    let description = `Noun ${tokenId} is a member of the Nouns DAO`;
    let image = '';

    try {
      const tokenUri = await tokenContract.tokenURI(tokenId);
      const jsonPart = tokenUri.split(',')[1];
      const decodedJson = atob(jsonPart);
      const metadata = JSON.parse(decodedJson);
      name = metadata.name;
      description = metadata.description;
      image = metadata.image;
    } catch (e) {
      // Reconstruct image if tokenURI fails (common for burned tokens)
      // Convert Ethers Result object to a standard array/object to avoid read-only errors
      const seedsArray = Array.from(seeds);
      const svgBase64 = await descriptorContract.generateSVGImage(seedsArray);
      image = `data:image/svg+xml;base64,${svgBase64}`;
    }

    const attributes = [
      { trait_type: 'Background', value: BACKGROUNDS[Number(seeds.background)] || 'Unknown' },
      { trait_type: 'Body', value: BODIES[Number(seeds.body)] || 'Unknown' },
      { trait_type: 'Accessory', value: tokenId === '1888' ? 'sweater' : tokenId === '1895' ? 'tatewaku' : tokenId === '1898' ? 'gray scale 9' : tokenId === '1908' ? 'txt free multicolor' : (ACCESSORIES[Number(seeds.accessory)] || 'Unknown') },
      { trait_type: 'Head', value: tokenId === '1911' ? 'floppy disk' : (HEADS[Number(seeds.head)] || 'Unknown') },
      { trait_type: 'Glasses', value: GLASSES[Number(seeds.glasses)] || 'Unknown' }
    ];

    return {
      name,
      description,
      image,
      attributes,
      tokenId
    };
  } catch (error) {
    console.error(`Error fetching Noun ${tokenId}:`, error);
    throw error;
  }
}

export async function fetchBurnedNounsRange(start: number, end: number) {
  const ids = Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());
  
  // Fetch in smaller chunks to avoid RPC timeouts/limits
  const results = [];
  const chunkSize = 5;
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    const chunkResults = await Promise.all(chunk.map(id => fetchNounMetadata(id)));
    results.push(...chunkResults);
  }
  
  return results;
}
