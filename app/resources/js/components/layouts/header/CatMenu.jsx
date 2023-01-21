import styled from 'styled-components';
import uuid from "react-uuid";

const StyledCatMenu = styled.ul`
  margin-bottom: 1.5rem;
  font-size: .8rem;
  li {
    margin-bottom: 1rem;
    & span {
      background-color: #677873;
      color: #FFF;
      display: block;
      line-height: 1.3;
      padding: 0.3rem 5px 0.2rem;
    }
    & a {
      color: #333;
    }
    &:nth-child(n+2) {
      ::after {
        content: ">";
        float: right;
        margin-right: 10px;
      }
    }
  }
`;

const CatMenu = () => {
  const catMenu = [
    {group: "cateegory", list: [
      {label: "カテゴリーから選ぶ", title: true},
      {label: "植物",href: "#"},
      {label: "栽培セット・種", href: "#"},
      {label: "土・肥料", href: "#"},
      {label: "ガーデン道具", href: "#"},
      {label: "ジョーロ・スプレー", href: "#"},
      {label: "グリーンアクセサリー", href: "#"},
      {label: "鉢・鉢カバー", href: "#"},
      {label: "アートフラワー", href: "#"},
      {label: "2022 NEW ITEM", href: "#"}]
    },
    {group: "theme", list: [
      {label: "テーマから選ぶ", title: true},
      {label: "グリーンライフの定番", href: "#"},
      {label: "グリーンを元気に", href: "#"},
      {label: "サステナブルな暮らし", href: "#"},
      {label: "ギフトにおすすめ", href: "#"},
      {label: "カラーで選ぶ", href: "#"}]
    },
    {group: "brand", list: [
      {label: "ブランドから選ぶ", title: true},
      {label: "evo", href: "#"},
      {label: "SPEAR & JACKSON", href: "#"},
      {label: "KANGURP", href: "#"},
      {label: "TURK", href: "#"},
      {label: "plastia", href: "#"},
      {label: "PlasTime", href: "#"},
      {label: "BERGS POTTER", href: "#"},
      {label: "EPOCA", href: "#"},
      {label: "HILLBRUSH", href: "#"},
      {label: "Another Studio", href: "#"},
      {label: "Blundstone", href: "#"},
      {label: "Tarter", href: "#"}]
    }
  ];

  const Menu = catMenu.map((item) =>
    <StyledCatMenu className={item.group}  key={uuid()}>
      {item.list.map((item2) =>
      <li key={uuid()}>
        {item2.title ? <span>{item2.label}</span> : <a href={item2.href}>{item2.label}</a>}
      </li>)}
    </StyledCatMenu>
  );

  return (
    <>{Menu}</>
  )
}

export default CatMenu