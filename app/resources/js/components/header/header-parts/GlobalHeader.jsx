import styled from "styled-components";

const StyledGlobalHeader = styled.div`
  height: 100vw;
  width: 220px;
`

const GlobalHeader = () => {

  return (
    <StyledGlobalHeader>
      <div className="globalHedder__siteName">
        <h1><a href="">Do! earth & green</a></h1>
      </div>
      <div className="globalHedder__beginner">
        <a href="">サービスのご案内<span>はじめての方へ</span></a>
      </div>
      <div className="gnav">
        <ul className="adminMenu"></ul>
      </div>
    </StyledGlobalHeader>
  )
}

export default GlobalHeader