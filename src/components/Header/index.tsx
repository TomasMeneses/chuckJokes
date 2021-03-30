import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeaderContainer } from './styles';

import { StyledFaSun, StyledFaMoon } from './styles';

import { IProps } from '../../types/interfaces';



const Header: React.FC<IProps> = ({handleSetTheme}) => {
  const { title } = useContext(ThemeContext);
  
  
  return (
    <HeaderContainer>
      <h2>Chuck Norris - Jokes</h2>
      <span onClick={ handleSetTheme }>
        {
          title === 'light' ? <StyledFaMoon/> : <StyledFaSun/>
        }
      </span>
    </HeaderContainer>
  )
}

export default Header;