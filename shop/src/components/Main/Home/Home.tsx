import React, { useState } from "react";
import * as S from "./style";
import Header from "src/constants/Head/Head";
import testImg from "src/Assets/img/fashonEvent.webp";
import product from "src/Assets/img/product.png";
import Banner from "../Banner/Banner";
import HurtBlack from "src/Assets/img/hurtBlack.png";
import HurtRed from "src/Assets/img/hurtRed.png";
const Home = () => {
  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    setHeart((heart) => !heart);
  };

  return (
    <S.Main>
      <Header />
      <Banner />
      <S.Event>
        <S.Advertisement>
          <S.Mainul>
            <li>
              <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </li>
            <li>
              <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </li>
            <li>
              <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </li>
            <li>
              <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </li>
            <li>
              <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </li>
            <li>
              <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </li>
          </S.Mainul>
        </S.Advertisement>
        <S.BestSellerText>
          <p>베스트셀러</p>{" "}
        </S.BestSellerText>
        <S.BestSeller>
          <S.BestSellerDetail>
          <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
              <S.BestSellerProductDetail>
                <S.BestSellerProductBrand>
                  <p>아브라함문</p>
                </S.BestSellerProductBrand>
                <S.BestSellerProductTitle>
                  <p>메리노울 머플러-25cm - 라벤더</p>
                </S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                  <p>30%</p>
                  <p>44,850</p>
                  <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                  <S.BestSellerHurt
                    onClick={() => {
                      handleHeart();
                    }}
                  >
                    {heart ? (
                      <S.AiFillHeart src={HurtRed} />
                    ) : (
                      <S.AiOutlineHeart src={HurtBlack} />
                    )}
                  </S.BestSellerHurt>
                  <S.review>
                    <p>리뷰 0</p>
                  </S.review>
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
              <S.BestSellerProductDetail>
                <S.BestSellerProductBrand>
                  <p>아브라함문</p>
                </S.BestSellerProductBrand>
                <S.BestSellerProductTitle>
                  <p>메리노울 머플러-25cm - 라벤더</p>
                </S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                  <p>30%</p>
                  <p>44,850</p>
                  <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                  <S.BestSellerHurt
                    onClick={() => {
                      handleHeart();
                    }}
                  >
                    {heart ? (
                      <S.AiFillHeart src={HurtRed} />
                    ) : (
                      <S.AiOutlineHeart src={HurtBlack} />
                    )}
                  </S.BestSellerHurt>
                  <S.review>
                    <p>리뷰 0</p>
                  </S.review>
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
            
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
              <S.BestSellerProductDetail>
                <S.BestSellerProductBrand>
                  <p>아브라함문</p>
                </S.BestSellerProductBrand>
                <S.BestSellerProductTitle>
                  <p>메리노울 머플러-25cm - 라벤더</p>
                </S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                  <p>30%</p>
                  <p>44,850</p>
                  <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                  <S.BestSellerHurt
                    onClick={() => {
                      handleHeart();
                    }}
                  >
                    {heart ? (
                      <S.AiFillHeart src={HurtRed} />
                    ) : (
                      <S.AiOutlineHeart src={HurtBlack} />
                    )}
                  </S.BestSellerHurt>
                  <S.review>
                    <p>리뷰 0</p>
                  </S.review>
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
              <S.BestSellerProductDetail>
                <S.BestSellerProductBrand>
                  <p>아브라함문</p>
                </S.BestSellerProductBrand>
                <S.BestSellerProductTitle>
                  <p>메리노울 머플러-25cm - 라벤더</p>
                </S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                  <p>30%</p>
                  <p>44,850</p>
                  <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                  <S.BestSellerHurt
                    onClick={() => {
                      handleHeart();
                    }}
                  >
                    {heart ? (
                      <S.AiFillHeart src={HurtRed} />
                    ) : (
                      <S.AiOutlineHeart src={HurtBlack} />
                    )}
                  </S.BestSellerHurt>
                  <S.review>
                    <p>리뷰 0</p>
                  </S.review>
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
              <S.BestSellerProductDetail>
                <S.BestSellerProductBrand>
                  <p>아브라함문</p>
                </S.BestSellerProductBrand>
                <S.BestSellerProductTitle>
                  <p>메리노울 머플러-25cm - 라벤더</p>
                </S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                  <p>30%</p>
                  <p>44,850</p>
                  <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                  <S.BestSellerHurt
                    onClick={() => {
                      handleHeart();
                    }}
                  >
                    {heart ? (
                      <S.AiFillHeart src={HurtRed} />
                    ) : (
                      <S.AiOutlineHeart src={HurtBlack} />
                    )}
                  </S.BestSellerHurt>
                  <S.review>
                    <p>리뷰 0</p>
                  </S.review>
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
              <S.BestSellerProductDetail>
                <S.BestSellerProductBrand>
                  <p>아브라함문</p>
                </S.BestSellerProductBrand>
                <S.BestSellerProductTitle>
                  <p>메리노울 머플러-25cm - 라벤더</p>
                </S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                  <p>30%</p>
                  <p>44,850</p>
                  <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                  <S.BestSellerHurt
                    onClick={() => {
                      handleHeart();
                    }}
                  >
                    {heart ? (
                      <S.AiFillHeart src={HurtRed} />
                    ) : (
                      <S.AiOutlineHeart src={HurtBlack} />
                    )}
                  </S.BestSellerHurt>
                  <S.review>
                    <p>리뷰 0</p>
                  </S.review>
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
          </S.BestSellerDetail>
        </S.BestSeller>
      </S.Event>
    </S.Main>
  );
};

export default Home;
