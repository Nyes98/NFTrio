import { useDispatch } from "react-redux";
import { nftBuyMordalOpen } from "../../../redux/mordal";
import NftBuyMordalComponent from "./Component";

interface InftData {
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
  job: string;
  name: string;
  owner_address?: string;
  skill: string;
  updatedAt: string;
}

type Props = {
  nftData?: InftData;
};

const NftBuyMordalContainer: React.FC<Props> = ({ nftData }) => {
  const dispatch = useDispatch();

  const ControlMordal = () => {
    dispatch(nftBuyMordalOpen());
  };

  return (
    <NftBuyMordalComponent
      ControlMordal={ControlMordal}
      nftData={nftData}
    ></NftBuyMordalComponent>
  );
};

export default NftBuyMordalContainer;
