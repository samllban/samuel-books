import Header from './components/Header';
import styled from 'styled-components';
import Search from './components/Search';


const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
` 
function App() {
  return (
      <AppConteiner>
        <Header />
        <Search />
      </AppConteiner>
  );
}

export default App;