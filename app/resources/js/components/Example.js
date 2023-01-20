import ReactDOM from 'react-dom';
import Header from './layouts/header/Header';

function App() {

  return (
    <>
      <Header />
    </>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}