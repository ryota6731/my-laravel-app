import styled from "styled-components";
import { LogoTitle, GlobalNav } from "./index";

const StyledGlobalHeader = styled.div`
  color: #677873;
  height: 100vw;
  width: 170px;
  padding: 23px;
`;

const GlobalHeader = () => {

  return (
    <StyledGlobalHeader>
      <LogoTitle />
      <GlobalNav />
    </StyledGlobalHeader>
  )
}

export default GlobalHeader