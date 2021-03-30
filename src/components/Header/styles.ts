import styled from 'styled-components';

import { FaSun, FaMoon } from 'react-icons/fa';

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    background: ${props => props.theme.colors.header};
    color: ${props => props.theme.colors.font};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`
export const StyledFaSun = styled(FaSun)`
  color: yellow;
  margin:10px;
  padding: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

export const StyledFaMoon = styled(FaMoon)`
  color: #000;
  margin:10px;
  padding: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;