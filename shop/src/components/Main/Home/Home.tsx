import * as S from "./style"
import Header from "src/constants/Head/Head"
import testImg from "src/Assets/img/testImg.jpg"
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
        </S.Event>
    </S.Main>
)
}

export default Home
