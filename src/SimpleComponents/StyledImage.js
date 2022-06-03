import styled from 'styled-components/native';

export const ImageDefault = styled.Image.attrs(props => ({
  width: props.width || '0px',
  height: props.height || '0px',
}))`
  height: ${props => props.height};
  width: ${props => props.width};
`;
