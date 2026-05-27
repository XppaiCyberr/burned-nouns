import { ethers } from 'ethers';
import { NOUNS_TOKEN_ABI, NOUNS_TOKEN_ADDRESS } from './constants';
import { BACKGROUNDS, BODIES, ACCESSORIES, HEADS, GLASSES } from './traits';

const RPC_URL = 'https://eth-mainnet.g.alchemy.com/v2/vQGyxhOFF05Xc6ekLTsRC';

export async function fetchNounMetadata(tokenId: string) {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(NOUNS_TOKEN_ADDRESS, NOUNS_TOKEN_ABI, provider);

  try {
    const [tokenUri, seeds] = await Promise.all([
      contract.tokenURI(tokenId),
      contract.seeds(tokenId)
    ]);
    
    // tokenUri is a base64 encoded JSON: data:application/json;base64,...
    const jsonPart = tokenUri.split(',')[1];
    const decodedJson = atob(jsonPart);
    const metadata = JSON.parse(decodedJson);

    // Map seeds to trait names
    metadata.attributes = [
      { trait_type: 'Background', value: BACKGROUNDS[Number(seeds.background)] || 'Unknown' },
      { trait_type: 'Body', value: BODIES[Number(seeds.body)] || 'Unknown' },
      { trait_type: 'Accessory', value: ACCESSORIES[Number(seeds.accessory)] || 'Unknown' },
      { trait_type: 'Head', value: HEADS[Number(seeds.head)] || 'Unknown' },
      { trait_type: 'Glasses', value: GLASSES[Number(seeds.glasses)] || 'Unknown' }
    ];

    return metadata;
  } catch (error) {
    console.error('Error fetching Noun metadata:', error);
    throw error;
  }
}
