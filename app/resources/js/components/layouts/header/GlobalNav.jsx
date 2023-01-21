import styled from 'styled-components';
import { AdminMenu, Beginner, SearchBox, CatMenu } from "./index";

const StyledGlobalNav = styled.div``;

const GlobalNav = () => {
  return (
    <StyledGlobalNav>
      <Beginner />
      <AdminMenu />
      <SearchBox />
      <CatMenu />
    </StyledGlobalNav>
  )
}

export default GlobalNav