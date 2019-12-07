/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, Image } from 'rebass';
import logo from '../../../../public/images/mark-maker.svg';
import styles from './styles';
export const Logo = ({ image }) => {
    return (<Box width={styles.container}>
      <Image src={image} sx={styles.logo}/>
    </Box>);
};
Logo.defaultProps = {
    image: logo
};
//# sourceMappingURL=index.jsx.map