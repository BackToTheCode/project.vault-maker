/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image } from 'rebass';
import logo from '../../../../public/images/mark-maker.svg';
import styles from './styles';

/**
 * LogoProps {@link Logo}
 * @see Logo
 */ 
export interface LogoProps {
  /**
   * Logo image url
   */
  image?: string;
}

/**
 * Component displays Maker logo
 * 
 * @component
 * @example
 * const image = '../../../public/images/<image-name>'
 * return (
 *   <Logo image={image} />
 * )  
 *
 * @see LogoProps
 * @extends {FC<Props>}
 */
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
