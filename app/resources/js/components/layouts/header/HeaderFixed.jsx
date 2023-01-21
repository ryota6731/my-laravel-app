import styled from "styled-components";
import uuid from "react-uuid";

const StyledFixedNav = styled.div`
  height: 45px;
  width: calc(100% - 220px);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 30px 20px;
  display: none;

  ul {
    height: 60px;
    display: flex;
    align-items: center;
  }

  li {
    height: 100%;
    padding: 0 15px;
    :last-child {
      background-color: #eeeeee;
    }
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const HeaderFixed = () => {
  const navItem = [
    {logo: "", name: "ログイン", href: "#"},
    {logo: "", name: "会員登録", href: "#"},
    {logo: "", name: "カートを見る", href: "#"},
  ];
  const fixedNav = navItem.map((item) => <li key={uuid()}><a href={item.href}>{item.name}</a></li>);

  return (
    <StyledFixedNav>
      <a href=""><img src="images/logo.jpg" alt="" /><span>Do! earth & Green</span></a>
      <ul>{fixedNav}</ul>
    </StyledFixedNav>
  )
}

export default HeaderFixed