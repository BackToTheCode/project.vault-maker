/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  /**
   * Handles a logo click and pushes a route to browser history
   *
   * @param  {Object} evt     React synthetic mouse event
   * @return {Void}
   */
  const handleClick = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    router.push('/');
  };

  return (
    <Box onClick={handleClick} sx={container}>
      <Image  src={image} sx={styles.logo} />
    </Box>
  );
};

Logo.defaultProps = {
  image: logo
};
