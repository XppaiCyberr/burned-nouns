export const NOUNS_TOKEN_ADDRESS = '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03';
export const NOUNS_DESCRIPTOR_ADDRESS = '0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac';

export const NOUNS_TOKEN_ABI = [
  'function tokenURI(uint256 tokenId) external view returns (string memory)',
  'function seeds(uint256 tokenId) external view returns (uint48 background, uint48 body, uint48 accessory, uint48 head, uint48 glasses)',
];

export const NOUNS_DESCRIPTOR_ABI = [
  'function generateSVGImage(tuple(uint48 background, uint48 body, uint48 accessory, uint48 head, uint48 glasses) seed) external view returns (string memory)',
];
