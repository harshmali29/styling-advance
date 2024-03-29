
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

function Header() {
  return (
    <Wrapper>
      <Title>My Shopping Site</Title>
    </Wrapper>
  );
}

export default Header;
