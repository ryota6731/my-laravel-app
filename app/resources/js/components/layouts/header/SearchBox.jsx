import styled from 'styled-components';

const StyledSearchBox = styled.div`
  margin-bottom: 30px;
  input {
    background-color: #fff;
    width: 100%;
    height: 34px;
    line-height: 27px;
    font-size: .7rem;
    padding: 5px 35px 5px 5px;
    position: relative;
    z-index: 1;
    border: solid 2px #677873;
  }

  a {
    width: 37px;
    height: 30px;
    position: absolute;
    z-index: 3;
    padding-left: 2px;
    transform: translate(-38px, 2px);
    background-color: #677873;
    color: #fff;
    line-height: 30px;
  }
`;

const SearchBox = () => {
  return (
    <StyledSearchBox>
      <input type="text" placeholder='商品名,キーワード,品番' /><a href="#">検索</a>
    </StyledSearchBox>
  )
}

export default SearchBox