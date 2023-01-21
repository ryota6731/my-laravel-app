import styled from "styled-components";
import uuid from "react-uuid";

const StyledAdminMenu = styled.ul`
  margin-bottom: 30px;
  li {
    font-size: .8rem;
    margin-bottom: 10px;
    & img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 5px;
    }
  }
`;

const AdminMenu = () => {

  const adminMenuItem = [
    {label: "ログイン", logo: "images/login-logo.png", href: "#"},
    {label: "会員登録", logo: "images/register-logo.png", href: "#"},
    {label: "ご利用ガイド", logo: "images/beginer-logo.png", href: "#"},
    {label: "在庫確認", logo: "images/stock-logo.jpg", href: "#"},
    {label: "カタログ", logo: "images/login-logo.png", href: "#"},
    {label: "まとめてオーダー", logo: "images/login-logo.png", href: "#"},
    {label: "Do! Magazine", logo: "images/login-logo.png", href: "#"},
    {label: "画像・POPダウンロード", logo: "images/login-logo.png", href: "#"},
  ];
  const adminMenu = adminMenuItem.map((item) => <li key={uuid()}><img src={item.logo} alt="" /><a href={item.href}>{item.label}</a></li>);

  return (
    <StyledAdminMenu>
      {adminMenu}
    </StyledAdminMenu>
  )
}

export default AdminMenu