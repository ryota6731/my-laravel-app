import styled from "styled-components";
import uuid from "react-uuid";

// CSS
const StyledNavBar = styled.nav`
    height: 30px;
    background-color: #677873;

    .headerBar__ul {
      display: flex;
      align-items: center;
      justify-content: right;

      & .headerBar__li {
        font-size: .9rem;
        line-height: 2rem;
        color: #fff;
        padding-left: 1rem;
        &:nth-child(1) {
          margin-right: auto;
          margin-left: 0;
          & a {
            text-decoration: underline;
            :hover {
              text-decoration: none;
            }
          }
        }
        &:last-child {
          padding-right: 1rem;
        }
      }
    }
  `;

// navItem
const navList = [
  { label: "オンラインカタログはこちら", link: "" },
  { label: "> Do! earth & green について", link: "" },
  { label: "> ショールームのご案内", link: "" },
  { label: "> お問い合わせ", link: "" }
];
const navBar = navList.map((list) => <li className="headerBar__li" key={uuid()}><a href={list.link}>{list.label}</a></li>);

const HeaderBar = () => {

  return (
    <StyledNavBar>
      <ul className="headerBar__ul">
        {navBar}
      </ul>
    </StyledNavBar>
  )
}

export default HeaderBar