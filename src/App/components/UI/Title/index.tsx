import React from 'react';
import { TitleWrapper, H2 } from './Title.styled';

type TitleProps = {
  name: string;
};

const Title: (props: TitleProps) => JSX.Element = ({ name }) => (
  <TitleWrapper>
    <H2>{name}</H2>
  </TitleWrapper>
);

export default Title;
