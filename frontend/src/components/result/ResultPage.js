import React from 'react';
import styled from 'styled-components';

const ResultPage = ({ inputUrl }) => {
  const clipboardCopy = async () => {
    await navigator.clipboard.writeText(inputUrl);
    alert('url 복사 완료!');
  };

  return (
    <Container>
      <Title>Title</Title>
      <ResultBox>
        <BoxTitle>Original URL</BoxTitle>
        <OriginalBox value={inputUrl} readOnly={true}></OriginalBox>

        <BoxTitle>Shorten URL</BoxTitle>
        <ShortenContainer>
          <ShortenBox value={inputUrl} readOnly={true}></ShortenBox>
          <CopyButton onClick={clipboardCopy}>COPY</CopyButton>
        </ShortenContainer>
      </ResultBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-size: large;
  margin: 120px auto 50px;
  font-size: xx-large;
`;

const ResultBox = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 60px;
  box-sizing: border-box;
  width: 700px;
  height: 400px;
  margin: 0px auto auto;
  border: 1px solid gray;
  border-radius: 5px;
`;

const BoxTitle = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const OriginalBox = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 60px;
  background-color: #f0f0f0;
  border-radius: 5px;
  border: none;
  padding: 5px;
  box-sizing: border-box;
  &:read-only {
  }
`;

const ShortenContainer = styled.div`
  display: flex;
`;

const ShortenBox = styled.input`
  width: 500px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 5px;
  border: none;
  padding: 5px;
  box-sizing: border-box;
`;

const CopyButton = styled.button`
  margin-left: 3px;
  width: 75px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: lightgray;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export default ResultPage;