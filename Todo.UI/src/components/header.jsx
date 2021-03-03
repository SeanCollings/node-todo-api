import React from 'react';
import styled from 'styled-components';
import { COLOURS } from '../constants';
import { useActions } from '../hooks/use-actions';
import { SButtonSecondary } from './styled';

const SHeaderContainer = styled.div`
  position: fixed;
  height: 4rem;
  width: 100%;
  z-index: 100;
  background: white;
  box-shadow: 0 4px 4px 0px darkgrey;
`;
const STopLine = styled.div`
  width: 100%;
  height: 2px;
  background: ${COLOURS.primary};
`;
const SAppName = styled.div`
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  padding: 0 1.5rem;
  font-size: 20px;
`;
const SHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SButtonpContainer = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 1.5rem;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { signOutUser } = useActions();

  const handleLogoutClick = () => {
    signOutUser();
  };

  return (
    <SHeaderContainer>
      <STopLine />
      <SHeaderContents>
        <SAppName>My Todos</SAppName>
        <SButtonpContainer>
          <SButtonSecondary onClick={handleLogoutClick}>
            Log Out
          </SButtonSecondary>
        </SButtonpContainer>
      </SHeaderContents>
    </SHeaderContainer>
  );
};

export default Header;
