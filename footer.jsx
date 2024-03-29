

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

function Footer() {
    return (
        <Wrapper>
            <p>© 2024 My Shopping Site. All rights reserved.</p>
        </Wrapper>
    );
}

export default Footer;
