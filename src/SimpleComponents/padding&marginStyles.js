import {css} from 'styled-components/native';

export const marginStyles = css`
  ${({mt}) => mt && `margin-top: ${mt}`};
  ${({mr}) => mr && `margin-right: ${mr}`};
  ${({mb}) => mb && `margin-bottom: ${mb}`};
  ${({ml}) => ml && `margin-left: ${ml}`};
`;
export const paddingStyles = css`
  ${({pt}) => pt && `padding-top: ${pt}`};
  ${({pb}) => pb && `padding-bottom: ${pb}`};
  ${({pr}) => pr && `padding-right: ${pr}`};
  ${({pl}) => pl && `padding-left: ${pl}`};
`;
