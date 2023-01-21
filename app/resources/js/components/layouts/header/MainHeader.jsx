import styled from "styled-components";

// CSS
const StyledMainNav = styled.nav`
  position: absolute;
  top: 30px;
  right: 0;
  width: calc(100% - 220px);
  color: #677873;

  .mainHeaderBar__ul {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 0 0 15px;
    & li {
      height: 100%;
      margin: 0 10px 0 0;
      font-size: .7rem;
      line-height: 2.3rem;
    }
    & li:first-child {
      margin-left: auto;
    }
    & li:last-child {
      margin-right: 0;
    }
  }

  .btn_tel {
    display: inline-block;
    padding: 0 0 0 20px;
    font-size: 1rem;
    font-weight: 700;
    
  }

  .btn_cart {
    display: block;
    padding: 0 20px 0 50px;
    font-size: .8rem;
    font-weight: 700;
    background-color: #eee;
  }
`;

// globalItem
const navList = [
  { text: "0570-04-1234", href: "#", class: "btn_tel" },
  { text: "受付時間：平日9:00~17:00", href: null },
  { text: "カートを見る", href: "#", class: "btn_cart" }
];
const mainNav = navList.map((list) => {
  let menu = <li key={list.text}>
    {list.href ? <a href={list.href} className={list.class}>{list.text}</a> : list.text}
  </li>
  return menu;
});

const MainHeader = () => {
  return (
    <StyledMainNav>
      <ul className="mainHeaderBar__ul">
        {mainNav}
      </ul>
    </StyledMainNav>
  )
}

export default MainHeader