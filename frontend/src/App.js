import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

//pages
import MainPage from './components/main/MainPage';
import ResultPage from './components/result/ResultPage';

function App() {
  const [inputUrl, setInputUrl] = useState();

  return (
    <Container>

      <Routes>
        <Route path="/" element={<MainPage setInputUrl={setInputUrl} />} />
        <Route path="/result" element={<ResultPage inputUrl={inputUrl} />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div``;
export default App;