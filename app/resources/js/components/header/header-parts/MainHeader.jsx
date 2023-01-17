import styled from "styled-components";

// CSS
const StyledMainNav = styled.nav``;

// globalItem
const navList = [
  { text: "0570-04-1234", href: "" },
  { text: "受付時間：平日9:00~17:00", href: null },
  { text: "カートを見る", href: "" }
];
const mainNav = navList.map((list) => {
  let menu = <li key={list.text}>
    {list.href ? <a>{list.text}</a> : list.text}
  </li>
  return menu;
});

const MainHeader = () => {
  return (
    <StyledMainNav>
      <ul>
        {mainNav}
      </ul>
    </StyledMainNav>
  )
}

export default MainHeader