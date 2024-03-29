

import React from 'react';
import styled from 'styled-components';
import Header from './head';
import Footer from './footer';
import ProductList from './ProductList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <ProductList />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
