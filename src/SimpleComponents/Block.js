import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './padding&marginStyles';

export const StyledBlock = styled.View`
  ${marginStyles};
  ${paddingStyles};
  ${({width}) => width && `width:${width}`}
  ${({justifyContent}) => justifyContent && `justify-content:${justifyContent}`}
  ${({flexDirection}) => flexDirection && `flex-direction:${flexDirection}`}
   ${({alignItems}) => alignItems && `align-items:${alignItems}`}
`;
