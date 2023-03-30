export default interface InftData {
  attack: number;
  gender: number;
  health: number;
  id: number;
  price: number;
  speed: number;
  createdAt: string;
  deletedAt?: string;
  hash: string;
  img: string;
  job: number;
  name: string;
  owner_address?: string;
  skill: string;
  updatedAt: string;
  Character?: InftData;
  cost: number;
  tokenId: number;
}
