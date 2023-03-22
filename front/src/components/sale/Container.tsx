import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import SaleComponent from "./Component";

const SaleContainer = () => {
  const [pricedd, setPriceDd] = useState(false);
  const [classdd, setClassDd] = useState(false);
  const [buyBtn, setBuyBtn] = useState(0);

  const buyMordal = useAppSelector(
    (state) => state.nftBuyMordalOpen.nftBuyMordal
  );

  const number = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();

  const BuyMordalHandler = () => {
    dispatch(nftBuyMordalOpen());
  };

  const priceClick = () => {
    setPriceDd(!pricedd);
  };

  const classClick = () => {
    setClassDd(!classdd);
  };

  const mouseIn = (item: number) => {
    setBuyBtn(item);
    console.log(buyBtn);
  };

  return (
    <SaleComponent
      pricedd={pricedd}
      priceClick={priceClick}
      classClick={classClick}
      classdd={classdd}
      mouseIn={mouseIn}
      buyBtn={buyBtn}
      number={number}
      buyMordal={buyMordal}
      BuyMordalHandler={BuyMordalHandler}
    ></SaleComponent>
  );
};

export default SaleContainer;
