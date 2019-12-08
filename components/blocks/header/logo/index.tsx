/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image } from 'rebass';
import logo from '../../../../public/images/mark-maker.svg';
import styles from './styles';

export interface LogoProps {
  image?: string;
}

export const Logo: FC<LogoProps> = props => {
  const { image } = props;
  const { container } = styles;
  return (
    <Box width={container}>
      <Image src={image} sx={styles.logo} />
    </Box>
  );
};

Logo.defaultProps = {
  image: logo
};
