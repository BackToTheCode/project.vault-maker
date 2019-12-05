import React, { FC } from 'react';
import { Heading, HeadingProps, SxStyleProp } from 'rebass';
import styles from './styles';

export interface TitleProps extends HeadingProps {
  children?: React.ReactNode | string;
  sx?: SxStyleProp;
}

export const Title: FC<TitleProps> = ({ children, sx }) => {
  return (
    <Heading sx={{ ...styles.titleStyle, ...sx }} variant="heading.small">
      {children}
    </Heading>
  );
};
Title.displayName = 'Title';
