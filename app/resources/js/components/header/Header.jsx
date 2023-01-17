import styled from "styled-components";
import GlobalHeader from "./header-parts/GlobalHeader";
import HeaderBar from "./header-parts/HeaderBar";
import MainHeader from "./header-parts/MainHeader";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderBar />
      {/* <GlobalHeader /> */}
      <MainHeader />
    </StyledHeader>
  )
}

export default Header