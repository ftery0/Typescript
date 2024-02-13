import exp from "constants";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 300vh;
`;
export const Event = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: calc(100% - 80px);
`;
export const Mainul = styled.ul`
margin-left: 60px;
  width: 100%;
  height: 100%;
  display: inline-block;
  list-style: none;
  li {
    display: inline-flex;
    width: calc(33.33% - 8px);
    margin-top: 12px;
    position: relative;
  }
`;

export const Advertisement = styled.div`
  display: flex;
  width: 1400px;
  height: 49%;
  overflow: hidden;
`;
export const AdvertisementImg = styled.img`
  margin-top: 20px;
  display: flex;
  width: 400px;
  height: 550px;
`;
export const BestSeller = styled.div`
  margin-top: 20px;
  display: flex;
  overflow-y: hidden;
  width: 100%;
  height: 20%;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BestSellerText = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  p {
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
  }
`;
export const BestSellerDetail = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  width: 155vw;
  height: 100%;
`;
export const BestSellerProduct = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
`;
export const BestSellerImg = styled.img`
  display: flex;
  width: 100%;
  height: 60%;
  background-color: brown;
`;
export const BestSellerProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const BestSellerProductBrand = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 40px;
p{
    font-size: 1rem;
    font-weight: 600;
}
`
export const BestSellerProductTitle = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 40px;
p{
    font-size: 0.9rem;
    font-weight: 600;
}
`;
export const BestSellerProductprice = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 40px;
gap: 10px;
p:nth-child(1){
    display: flex;
    font-size: 0.9rem;
    font-weight: 700;
    color: blue;
}
p:nth-child(2){
    display: flex;
    font-size: 0.9rem;
    font-weight: 600;
}
s{
    display: flex;
    font-size: 0.9rem;
    font-weight: 600;
    color: gray;
}
`;
export const BestSellerProductreview = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 30px;
gap: 30px;
`
export const BestSellerHurt = styled.div`
cursor: pointer;
display: flex;
width: 20px;
height: 20px;
`
export const AiFillHeart = styled.img`
display: flex;
width: 100%;
height: 100%;
`
export const AiOutlineHeart = styled.img`
display: flex;
width: 100%;
height: 100%;
`
export const review =styled.div`
display: flex;
align-items: center;
width: 80px;
height: 20px;
border-left: 2px solid gray;
p{
    margin-left: 20px;
}
`