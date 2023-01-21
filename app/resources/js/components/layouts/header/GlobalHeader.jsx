import styled from "styled-components";
import { LogoTitle, GlobalNav, HeaderFixed } from "./index";

const StyledGlobalHeader = styled.div`
  color: #677873;
  width: 220px;
  padding: 23px;
  border-right: solid 1px #000;
`;

const GlobalHeader = () => {

  return (
    <>
    <StyledGlobalHeader>
      <LogoTitle />
      <GlobalNav />
    </StyledGlobalHeader>
    <HeaderFixed />
    </>
  )
}

export default GlobalHeader