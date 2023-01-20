import styled from "styled-components";
import { GlobalHeader, HeaderBar, MainHeader } from "./index";

const StyledHeader = styled.header`
  position: relative;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderBar />
      <GlobalHeader />
      <MainHeader />
    </StyledHeader>
  )
}

export default Header