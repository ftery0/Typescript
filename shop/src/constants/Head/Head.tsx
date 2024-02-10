import * as S from "./style"
import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return(
        <S.Head>
        <S.Logo onClick={() => navigate("/")}>
        Logo
      </S.Logo>
      
        <S.HeaderUl>
          <S.HeaderLi >
            카테고리
          </S.HeaderLi>
          <S.HeaderLi >
            이벤트
          </S.HeaderLi>
          <S.HeaderLi >
            코디
          </S.HeaderLi>
          <S.HeaderLi >
          브랜드
          </S.HeaderLi>
          <S.HeaderLi  >
            로그인
          </S.HeaderLi>
        </S.HeaderUl>
      
        </S.Head>
    )
};
export default Header;
