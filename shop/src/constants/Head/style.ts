import styled from "styled-components";

export const Head = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 80px;
background: rgba(255, 255, 255, 0.70);
`
export const Logo =styled.div`
text-decoration: none; /* 밑줄 제거 */
margin: 0 40px 0 30px;
cursor: pointer;
font-size: 25px;
font-weight: 600;
`
export const HeaderUl = styled.ul`
padding: 0;
display: flex;
justify-content: space-between;
align-items: center;
`
export const HeaderLi = styled.nav`
display: flex;
  cursor: pointer;
  text-decoration-line: none;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  margin-right: 50px;
  list-style-type: none;
  justify-content: space-between;
  &:hover {
    color: #1A9A18 !important;
  }
`;