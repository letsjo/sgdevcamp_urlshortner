import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { CONSTANT } from '../../constants/url';

import { useSelector } from 'react-redux';
import { urlAction } from '../../redux/actions/urlAction';
import { urlSliceAction } from '../../redux/reducers/urlReducer';

const MainTitle = () => {
  const [page, setPage] = useState('mainPage');
  const inputRef = useRef();
  const dispatch = useDispatch();

  const { full, short } = useSelector((state) => state.urlReducer);

  const clipboardCopy = async () => {
    await navigator.clipboard.writeText(CONSTANT.BASE_URL+short);
    alert('url 복사 완료!');
  };

  const getShortUrl = async (full) => {
    try {
      const response = await dispatch(urlAction.getShortUrl({full})).unwrap();
      await dispatch(urlSliceAction.setUrl(response.data))
      setPage('resultPage');
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const onSubmitUrl = () => {
    setPage('resultPage');
    if(!(inputRef.current.value).includes(CONSTANT.HTTP) || !(inputRef.current.value).includes(CONSTANT.HTTPS) ){
      return getShortUrl(CONSTANT.HTTPS+inputRef.current.value);
    }
    return getShortUrl(inputRef.current.value);
  };

  const onBackPage = () => {
    setPage('mainPage');
  };


  if (page==='mainPage')
    return (
      <Container>
          <Wrapper>
            <Title>URL 단축 서비스</Title>
            <SearchContainer>
              <InputBox placeholder="https:// 단축할 url을 입력하세요" ref={inputRef} />
              <SearchButton onClick={onSubmitUrl}>Shorten</SearchButton>
            </SearchContainer>
            <EmptySpace></EmptySpace>
          </Wrapper>
      </Container>
    );
  else if (page==='resultPage'){
    return (
      <Container>
        <Wrapper>
        <Title>URL 단축 서비스</Title>
        <ResultBox>
          <BoxTitle>Original URL</BoxTitle>
          <OriginalBox value={full} readOnly={true}></OriginalBox>

          <BoxTitle>Shorten URL</BoxTitle>
          <ShortenContainer>
            <ShortenBox value={CONSTANT.BASE_URL+short} readOnly={true}></ShortenBox>
            <CopyButton onClick={clipboardCopy}>COPY</CopyButton>
          </ShortenContainer>
          <BackButton onClick={onBackPage}>돌아가기</BackButton>
        </ResultBox>
        </Wrapper>
      </Container>
    )
    ;
  } else {
    return (
      <Container>
        <Wrapper>
          <NoPageNotice>This page does not exist.</NoPageNotice>
          <BackButton onClick={onBackPage}>돌아가기</BackButton>
        </Wrapper>
      </Container>
    )
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  margin-bottom: 1em;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  width: 500px;
  height: 45px;
  border: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    outline: 1.5px solid gray;
  }
`;

const SearchButton = styled.button`
  margin-left: 5px;
  width: 100px;
  background-color: lightgray;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const BackButton = styled.button`
  width: 100%;
  margin: 30px 0px;
  height: 50px;
`


const ResultBox = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
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

const NoPageNotice = styled.div`
  font-size: 50px;
`

const EmptySpace = styled.div`
  height: 400px;
`

export default MainTitle;