import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

//pages
import MainPage from './components/main/MainPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </Container>
  );
}

const Container = styled.div``;
export default App;