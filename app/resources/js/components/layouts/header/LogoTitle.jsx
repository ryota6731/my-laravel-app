import styled from "styled-components";

const StyledLogo = styled.div`
  h1 a {
    display: block;
    & img {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
    }
    & h1 {
      font-size: .8rem;
      text-align: center;
      margin-top: 5px;
    }
  }
`;

const LogoTitle = () => {
  return (
    <StyledLogo>
      <h1>
        <a href="/">
          <img src="./images/logo.jpg" alt="" />
          <h1>earth & green</h1>
        </a>
      </h1>
    </StyledLogo>
  )
}

export default LogoTitle