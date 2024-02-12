import * as S from "./style";
import Header from "src/constants/Head/Head";
import testImg from "src/Assets/img/fashonEvent.webp";
import product from "src/Assets/img/product.png";
import Banner from "../Banner/Banner";
const Home = () => {
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
                <S.BestSellerProductBrand><p>아브라함문</p></S.BestSellerProductBrand>
                <S.BestSellerProductTitle><p>메리노울 머플러-25cm - 라벤더</p></S.BestSellerProductTitle>
                <S.BestSellerProductprice>
                <p>30%</p>
                <p>44,850</p>
                <s>69,000</s>
                </S.BestSellerProductprice>
                <S.BestSellerProductreview>
                    
                </S.BestSellerProductreview>
              </S.BestSellerProductDetail>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
            </S.BestSellerProduct>
            <S.BestSellerProduct>
              <S.BestSellerImg src={product}></S.BestSellerImg>
            </S.BestSellerProduct>
          </S.BestSellerDetail>
        </S.BestSeller>
      </S.Event>
    </S.Main>
  );
};

export default Home;
