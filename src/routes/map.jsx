import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/header";

import SampleImage from "../assets/sample1.png"
import SearchIcon from "/search-logo.svg"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const WrapperBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
  position: relative;
  /* background-color: aqua; */
`;

const SideMenubutton = styled.div`
  width: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background1};
  border: 1px solid #99999944;
  position: absolute;
  left: ${({ menuOpen }) => (menuOpen ? "400px" : "0")};
  transition: left 0.3s ease;
  z-index: 3;
  cursor: pointer;
`;

const SideMenu = styled.div`
  width: 400px;
  height: 100vh;
  padding-top: 100px;
  background: ${({ theme }) => theme.background1};
  border: 1px solid #99999944;
  position: absolute;
  left: ${({ menuOpen }) => (menuOpen ? "0" : "-400px")};
  transition: left 0.3s ease;
  z-index: 2;
`;

const MenuItemBox = styled.div`
  position: relative;
  &.menuBox {
    padding-top: 200px;
  }
`;

const DetailItem = styled.div`
  width: 400px;
  height: 100vh;
  padding-top: 100px;
  background: ${({ theme }) => theme.background1};
  border: 1px solid #99999944;
  position: absolute;
  left: ${({ detailOpen }) => (detailOpen ? "400px" : "0")};
  display: ${({ detailOpen }) => (detailOpen ? "block" : "none")};
  transition: left 0.3s ease;
  z-index: 1;
`;

const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    outline: none;
    border: 1px solid #99999944;
  background: ${({ theme }) => theme.background1};
  position: absolute;
  top: 110px;
  right: -40px;
  cursor: pointer;
`;

const SideMenuItemBox = styled.div`
  width: 400px;
  height: 120px;
  padding: 20px 30px;
  border-bottom: 1px solid #99999944;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  &.searchInput,
  &.searchKeyword {
    position: absolute;
    justify-content: center;
    height: 100px;
  }
  &.searchInput {
    top: 0;
  }
  &.searchKeyword {
    top: 100px;
  }
`;

const ItemTextBox = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    gap: 8px;
`;
const ItemHeader = styled.div`
    display: flex;
    gap: 10px;
`;
const ItemHead = styled.div`
    font-size: 18px;
    color: #59B0ED;
    &.detailHead {
      color: ${({ theme }) => theme.text};
    }
`;
const ItemSub = styled.div`
    color: #999999;
`;
const ItemContent = styled.div``;

const ItemImageBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #99999944;
  border-radius: 5px;
  overflow: hidden;
`;

const ItemImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5px;
`

const SearchInput = styled.input`
  border: none;
  border: 2px solid #D1D1D4;
  color: ${({ theme }) => theme.text};
  background: none;
  padding: 10px 50px;
  font-size: 18px;
  width: 100%;
  transition: .2s;
  &:active,
  &:focus,
  &:hover {
    outline: none;
    border-color: #59B0ED;
  }
  &:focus {
    color: ${({ theme }) => theme.text};
  }
  &::placeholder {
    color: #bbbbbb;
    text-align: center;
    padding-right: 20px;
  }
`;

const KeywordBox = styled.div`
    width: 100%;
    padding: 20px;
    gap: 20px 30px;
    /* margin-bottom: 100px; */
    display: flex;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
`;

const KeywordBadge = styled.div`
    height: 28px;
    padding: 10px 20px;
    border: 1px solid #59B0ED;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background1};
    cursor: pointer;
    &:hover {
        color: #ffffff;
        background-color: #59B0ED;
        border: 1px solid #99999900;
        transition: 0.5s;
    }
`;

const DetailImageBox = styled.div`
  width: 100%;
  height: 250px;
overflow: hidden;
`;

const DetailImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailTextBox = styled.div`
  width: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  gap: 20px;
`;

const SearchForm = styled.form`
  display: flex;
    align-items: center;
`;

const SearchLogo = styled.img`
  width: 25px;
  position: absolute;
  left: 50px;
`;

const ResetButton = styled.button`
  width: 25px;
  height: 25px;
  font-size: 25px;
  border: none;
  background-color: #ffffffff;
  color: #999999;
  display: flex;
  align-items: center;
  position: absolute;
  right: 50px;
  cursor: pointer;
`;

export default function Map() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDetailOpen(false); // SideMenubutton 클릭 시 DetailItem 닫기
  };
  const openDetailItem = () => {
    setDetailOpen(true);
    setMenuOpen(true); // SideMenubutton을 추가로 오른쪽으로 이동하기 위해
  };
  const closeDetailItem = () => {
    setDetailOpen(false);
    // setMenuOpen(false); // SideMenubutton을 왼쪽으로 이동하기 위해
  };

  return (
    <Wrapper>
      <Header />
      <WrapperBox>
        <SideMenubutton menuOpen={menuOpen} onClick={toggleMenu}>⟩</SideMenubutton>
        <SideMenu menuOpen={menuOpen}>
          <MenuItemBox className="menuBox">
            <SideMenuItemBox className="searchInput">
              <SearchForm>
                <SearchLogo src={SearchIcon}/>
                <SearchInput type="text" />
                <ResetButton type="reset">✖</ResetButton>
              </SearchForm>
            </SideMenuItemBox>
            <SideMenuItemBox className="searchKeyword">
              <KeywordBox>
                <KeywordBadge>애견동반 카페</KeywordBadge>
                <KeywordBadge>동물병원</KeywordBadge>
                <KeywordBadge>반려동물 용품</KeywordBadge>
                <KeywordBadge>응급실</KeywordBadge>
              </KeywordBox>
            </SideMenuItemBox>
            <SideMenuItemBox onClick={openDetailItem}>
              <ItemTextBox>
                <ItemHeader>
                  <ItemHead>고려동물병원</ItemHead>
                  <ItemSub>동물병원</ItemSub>
                </ItemHeader>
                <ItemContent>진료중 • 12:30에 휴게시간</ItemContent>
                <ItemContent>광주 남구 방림2동</ItemContent>
              </ItemTextBox>
              <ItemImageBox>
                <ItemImage src={SampleImage} />
              </ItemImageBox>
            </SideMenuItemBox>
            <SideMenuItemBox onClick={openDetailItem}>
              <ItemTextBox>
                <ItemHeader>
                  <ItemHead>고려동물병원</ItemHead>
                  <ItemSub>동물병원</ItemSub>
                </ItemHeader>
                <ItemContent>진료중 • 12:30에 휴게시간</ItemContent>
                <ItemContent>광주 남구 방림2동</ItemContent>
              </ItemTextBox>
              <ItemImageBox>
                <ItemImage src={SampleImage} />
              </ItemImageBox>
            </SideMenuItemBox>
            <SideMenuItemBox onClick={openDetailItem}>
              <ItemTextBox>
                <ItemHeader>
                  <ItemHead>고려동물병원</ItemHead>
                  <ItemSub>동물병원</ItemSub>
                </ItemHeader>
                <ItemContent>진료중 • 12:30에 휴게시간</ItemContent>
                <ItemContent>광주 남구 방림2동</ItemContent>
              </ItemTextBox>
              <ItemImageBox>
                <ItemImage src={SampleImage} />
              </ItemImageBox>
            </SideMenuItemBox>
            <SideMenuItemBox onClick={openDetailItem}>
              <ItemTextBox>
                <ItemHeader>
                  <ItemHead>고려동물병원</ItemHead>
                  <ItemSub>동물병원</ItemSub>
                </ItemHeader>
                <ItemContent>진료중 • 12:30에 휴게시간</ItemContent>
                <ItemContent>광주 남구 방림2동</ItemContent>
              </ItemTextBox>
              <ItemImageBox>
                <ItemImage src={SampleImage} />
              </ItemImageBox>
            </SideMenuItemBox>
          </MenuItemBox>
        </SideMenu>
        <DetailItem detailOpen={detailOpen}>
          <CloseButton onClick={closeDetailItem}>X</CloseButton>
          <DetailImageBox>
            <DetailImage src={SampleImage} />
          </DetailImageBox>
          <DetailTextBox>
                <ItemHeader>
                  <ItemHead className="detailHead">고려동물병원</ItemHead>
                  <ItemSub>동물병원</ItemSub>
                </ItemHeader>
                <ItemContent>진료중 • 12:30에 휴게시간</ItemContent>
                <ItemContent>광주 남구 방림2동</ItemContent>
          </DetailTextBox>
        </DetailItem>
        <Content></Content>
      </WrapperBox>
    </Wrapper>
  );
}

