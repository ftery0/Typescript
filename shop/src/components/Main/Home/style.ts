import exp from "constants";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 300vh;
`;
export const Event = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  width: 100vw;
  height: calc(100% - 80px);
`;
export const Mainul = styled.ul`
    width: 100%;
    height: 100%;
    display: inline-block;
    list-style: none;
    li{
     display: inline-flex;
        width: calc(33.33% - 8px);
        margin-top: 12px;
        position: relative;
    }
`

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
  
`;
export const BestSellerText = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  p {
    font-size: 20px;
    font-weight: 600;
    margin-left: 50px;
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
width: 250px;
height: 100%;

`
export const BestSellerImg = styled.img`
display: flex;
width: 100%;
height: 60%;
background-color: brown;
`