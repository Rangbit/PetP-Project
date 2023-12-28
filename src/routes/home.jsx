import { Link } from "react-router-dom";

import styled from "styled-components";

import Footer from "../components/footer";
import Header from "../components/header";
import Animal from "/image/animal-main.png"
import Cogi from "/image/cogi.jpg"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  `;

const WrapperBox = styled.div`
padding-top: 100px;
height: auto;
display: flex;
padding-top: 100px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const ContentBox = styled.div`
    width: 100%;
    &.area1{
        height: 600px;
        background: ${({ theme }) => theme.backgrounfix1};
    }
    &.area2,
    &.area6 {
        height: 800px;
        background: ${({ theme }) => theme.background1};
    }
    &.area3 {
        height: 1000px;
    }
    &.area4{
        height: 800px;
        background: ${({ theme }) => theme.backgrounfix1};
    }
    &.area5{
        height: 800px;
    }
    `;

const Content = styled.div`
    max-width: 1400px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    gap: 50px;
    &.content3 {
        justify-content: center;
        flex-direction: column;
    }
`;

const ContentTextArea = styled.div``;

const ContentStepArea = styled.div`
    text-align: center;
    gap: 30px;
`;

const ContentHead = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #59B0ED;
    padding-bottom: 20px;
`;

const ContentTitle = styled.div`
    font-size: 36px;
    line-height: 1.3;
    padding-bottom: 30px;
`;

const ContentSubTitle = styled.div`
    font-size: 24px;
    line-height: 1.3;
    padding-bottom: 30px;
`;

const ContentText = styled.div`
    color: ${({ theme }) => theme.text2};
    line-height: 1.3;
    `;

const ContentButton = styled.div`
    color: ${({ theme }) => theme.buttonText};
    background: ${({ theme }) => theme.background1};
    width: 300px;
    height: 70px;
    padding: 10px 20px;
    margin-top: 50px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.boardBorder1};
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
`;

const ContentStepBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ContentStep = styled.div`
`;

const ContentStepBadge = styled.div`
    color: ${({ theme }) => theme.buttonText};
    background: ${({ theme }) => theme.background1};
    width: 150px;
    height: 60px;
    padding: 10px 20px;
    margin-top: 50px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.boardBorder1};
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`;
const ContentStepImageBox = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: white;
`;
const ContentStepImage = styled.img``;
const ContentTopImage = styled.img``;
const ContentMiddleImage = styled.img`
    width: 700px;
`;
const ContentBottomImage = styled.img``;

export default function Home() {

    return (
        <Wrapper>
            <Header></Header>
            <WrapperBox>
                <ContentBox className="area1">
                    <Content className="content1">
                        <ContentTopImage src={Animal} />
                        <ContentTextArea>
                            <ContentTitle>
                                소중한 반려동물들의 건강!<br />
                                항상 걱정되시나요?
                            </ContentTitle>
                            <ContentText>
                                사진으로 알아보는 우리아이 피부질환 확인하기
                            </ContentText>
                            <Link to="test">
                                <ContentButton>
                                    피부질환 검사하기 &gt;
                                </ContentButton>
                            </Link>
                        </ContentTextArea>
                    </Content>
                </ContentBox>
                <ContentBox className="area2">
                    <Content className="content2">
                        <ContentTextArea>
                            <ContentHead>
                                피부질환 체크
                            </ContentHead>
                            <ContentTitle>
                                무심코 지나친 가벼운 상처<br />
                                꼭 확인해봐야 합니다
                            </ContentTitle>
                            <ContentText>
                                우리아이가 놀다가 긁힌거 같은데<br />
                                많이 아픈건 아닐까 걱정돼요.<br /><br /><br /><br /><br />
                                코기맘 3세 / 여 / 웰시코기
                            </ContentText>
                        </ContentTextArea>
                        <ContentMiddleImage src={Cogi} />
                    </Content>
                </ContentBox>
                <ContentBox className="area3">
                    <Content className="content3">
                        <ContentStepArea>
                            <ContentHead>
                                피부질환 AI검사
                            </ContentHead>
                            <ContentTitle>
                                집에서 AI검사로 쉽고 빠르게 해보세요
                            </ContentTitle>
                        </ContentStepArea>
                        <ContentStepBox>
                            <ContentStep>
                                <ContentStepBadge>Step 1</ContentStepBadge>
                                <ContentStepImageBox>
                                    <ContentStepImage />
                                </ContentStepImageBox>
                                <ContentSubTitle>피부 사진등록</ContentSubTitle>
                            </ContentStep>
                        </ContentStepBox>
                    </Content>
                </ContentBox>
                <ContentBox className="area4">
                    <Content className="content4">
                        test
                    </Content>
                </ContentBox>
                <ContentBox className="area5">
                    <Content className="content5">
                        test
                    </Content>
                </ContentBox>
                <ContentBox className="area6">
                    <Content className="content6">
                        test
                    </Content>
                </ContentBox>
            </WrapperBox>
            <Footer></Footer>
        </Wrapper>
    )
}