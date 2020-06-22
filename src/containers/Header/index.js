import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
`;

const SearchFormStyled = styled.form`
  
`;

const SearchInputStyled = styled.input`
  width: 80%;
  border: none;
  line-height: 24px;
  padding: 4px;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <SearchFormStyled>
        <SearchInputStyled
          type="text"
          onClick={() => {
            
          }} />
      </SearchFormStyled>
      <p>
        [t]※ 이름(초성검색 가능), 팀명, 이메일, 전화번호 등으로 검색 가능
      </p>
    </HeaderStyled>
  );
}

export default Header;