import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeWrap = styled.div`
  background-color: #1d1d1d;
  background-image: url("home_bg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const LogoBox = styled.div`
  width: 30%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const LogoH1 = styled.h1`
  width: 100%;
`;

const Logo = styled.img`
  width: 100%;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  width: 45%;
`;

const Home = () => {
  const dexNavigate = useNavigate();

  return (
    <HomeWrap>
      <LogoBox>
        <LogoH1>
          <Logo src="logo.png" alt="포켓몬_로고_이미지" />
        </LogoH1>
        <Button
          onClick={() => {
            dexNavigate("/dex");
          }}
        >
          <ButtonImg src="button.png" alt="도감_이미지" />
        </Button>
        <p>Press Button</p>
      </LogoBox>
    </HomeWrap>
  );
};

export default Home;
