import * as S from "./style"
import Header from "src/constants/Head/Head"
import testImg from "src/Assets/img/fashonEvent.webp"
import product from "src/Assets/img/product.png"
const Home =()=>{
return(
    <S.Main>
        <Header/>
        <S.Event>
            <S.Advertisement>
                <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
                <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
                <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
                <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
                <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
                <S.AdvertisementImg src={testImg}></S.AdvertisementImg>
            </S.Advertisement>
            <S.BestSellerText><p>베스트셀러</p> </S.BestSellerText>
            <S.BestSeller>
                <S.BestSellerDetail>
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
                <S.BestSellerProduct>
                <S.BestSellerImg src={product}></S.BestSellerImg>
                </S.BestSellerProduct>
                </S.BestSellerDetail>
            </S.BestSeller>
        </S.Event>
    </S.Main>
)
}

export default Home
