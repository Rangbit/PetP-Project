import styled from "styled-components";

import Header from "../components/header";
import Footer from "../components/footer";

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

const Content = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    /* background-color: aqua; */
`;

const SideMenu = styled.div`
    width: 300px;
    height: 90vh;
    background-color: gray;
    position: absolute;
    left: 0;
`;

const DetailItem = styled.div``;



export default function Map() {
    return(
        <Wrapper>
            <Header></Header>
            <WrapperBox>
                <SideMenu></SideMenu>
                <Content></Content>
            </WrapperBox>
            {/* <Footer></Footer> */}
        </Wrapper>
    )
}