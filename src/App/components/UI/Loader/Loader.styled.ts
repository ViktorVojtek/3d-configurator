import styled from 'styled-components';

export const LabelContent = styled.span`
  font-family: sans-serif;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
`;

/* interface ILoaderWrapperProps {
  show?: boolean;
}
display: ${({ show }: ILoaderWrapperProps) => (show ? 'block' : 'none')};
*/
export const LoaderWrapper = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
`;

interface ICircleProps {
  circumference: number;
}
export const Circle = styled.circle`
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: #525151;
  stroke-width: 4;
  stroke-dasharray: ${({ circumference }: ICircleProps) => circumference};
  stroke-dashoffset: ${({ offset }) => offset};
`;