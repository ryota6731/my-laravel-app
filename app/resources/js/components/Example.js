import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function App() {
  const Text = styled.text`
    color: blue;
  `;

  return (
    <Text>
      text
    </Text>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}