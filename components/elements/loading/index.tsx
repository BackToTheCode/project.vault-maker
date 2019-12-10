/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image, Text } from 'rebass';
import styles from './styles';
import loadingImage from '../../../public/images/rings.svg';

export interface LoadingProps {
  image?: string;
  sx?: any;
  text?: string;
}

export const Loading: FC<LoadingProps> = (props) => {
  const { image, sx, text } = props;
  
  return(
  <Box sx={{...styles.container, ...sx}}>
    <Text variant="body.large" sx={styles.text}>{text}</Text>
    <Image src={image} sx={styles.image} />
  </Box>
)};

Loading.defaultProps = {
  image: loadingImage,
  text: "Loading..."
}

Loading.displayName = 'Loading';

