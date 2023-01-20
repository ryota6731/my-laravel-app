import styled from 'styled-components';
import { AdminMenu, Beginner, SearchBox } from "./index";

const StyledGlobalNav = styled.div``;

const GlobalNav = () => {
  return (
    <StyledGlobalNav>
      <Beginner />
      <AdminMenu />
      <SearchBox />
    </StyledGlobalNav>
  )
}

export default GlobalNav