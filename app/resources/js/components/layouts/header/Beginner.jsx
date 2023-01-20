import styled from "styled-components";

const StyledBeginner = styled.div`
  margin: 30px 0;

  a {
    border: 1px solid #677873;
    border-radius: 100px;
    font-size: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 7px 10px;

    & span {
      font-size: .3rem;
    }
  }
`;

const Beginner = () => {
  return (
    <StyledBeginner>
      <a href="">サービスのご案内<span>はじめての方へ</span></a>
    </StyledBeginner>
  )
}

export default Beginner