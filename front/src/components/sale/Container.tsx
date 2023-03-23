import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AllNft, NftCount, RecentNft } from "../../api";
import { useAppSelector } from "../../redux/hooks";
import { nftBuyMordalOpen } from "../../redux/mordal";
import SaleComponent from "./Component";

const SaleContainer = () => {
  const [pricedd, setPriceDd] = useState(false);
  const [classdd, setClassDd] = useState(false);
  const [buyBtn, setBuyBtn] = useState(0);
  const [nftCount, setNftCount] = useState();
  const [priceSort, setPriceSort] = useState(0);
  const [classSort, setClassSort] = useState(0);
  const [page, setPage] = useState(0);
  const [pageLen, setPageLen] = useState(25);
  const [nftArr, setNftArr] = useState();
  const [floorPrice, setFloorPrice] = useState();
  const [topPrice, setTopPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const buyMordal = useAppSelector(
    (state) => state.nftBuyMordalOpen.nftBuyMordal
  );

  const callFloorPriceNft = async () => {
    const data = await RecentNft(0, 1, 0, 1);
    setFloorPrice(data.data[0].price);
    const data2 = await RecentNft(0, 1, 0, 2);
    setTopPrice(data2.data[0].price);
  };

  const callTotalVolume = async () => {
    const data = await AllNft();
    let sum = 0;
    console.log(data);
    data.data.map((item: any) => {
      console.log(item.price);
      sum += item.price;
    });
    setTotalPrice(sum);
  };

  const callNftCount = async () => {
    const data = await NftCount();
    setNftCount(data.data.count);
  };

  const callNftList = async () => {
    const data = await RecentNft(page, pageLen, classSort, priceSort);
    setNftArr(data.data);
  };

  const PriceSort = (select: number) => {
    setPriceSort(select);
  };
  const ClassSort = (select: number) => {
    setClassSort(select);
  };

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
    console.log(item);
    setBuyBtn(item);
  };

  const handleSelect = (e: any) => {
    setPageLen(parseInt(e.target.value));
  };

  useEffect(() => {
    callNftCount();
    callFloorPriceNft();
    callTotalVolume();
  }, []);

  useEffect(() => {
    callNftList();
  }, [page, pageLen, classSort, priceSort]);

  return (
    <SaleComponent
      pricedd={pricedd}
      priceClick={priceClick}
      classClick={classClick}
      classdd={classdd}
      mouseIn={mouseIn}
      buyBtn={buyBtn}
      buyMordal={buyMordal}
      BuyMordalHandler={BuyMordalHandler}
      nftCount={nftCount}
      handleSelect={handleSelect}
      PriceSort={PriceSort}
      ClassSort={ClassSort}
      nftArr={nftArr}
      floorPrice={floorPrice}
      topPrice={topPrice}
      totalPrice={totalPrice}
    ></SaleComponent>
  );
};

export default SaleContainer;
