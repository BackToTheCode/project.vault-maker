import React, { FC } from 'react';
import { Heading, HeadingProps, SxStyleProp } from 'rebass';
import styles from './styles';

export interface TitleProps extends HeadingProps {
  sx?: SxStyleProp;
}

export const Title: FC<TitleProps> = props => {
  const { children, sx } = props;
  const { base } = styles;
  return (
    <Heading variant="heading.extra" sx={{ ...base, ...sx }}>{children}</Heading>
  );
};
Title.displayName = 'Title';
