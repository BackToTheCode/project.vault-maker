import { Title } from '../../../elements/title';
import { Input, Label } from '@rebass/forms';
import React from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import { Button } from '../../../elements/button/regular';
import styles from './styles';

/**
 * ConnectProps {@link Lock}
 * @see Lock
 */

export interface LockProps {
  /**
   * A system-ui style object
   */
  sx?: any;
}

/**
 * Lock step of Wizard
 *
 * @components
 * @example
 * return (
 *   <Lock  />
 * )
 *
 * @see LockProps
 * @extends {FC<Props>}
 */
export const Lock = props => {
  const { container, input, label } = styles;
  const { sx } = props;

  const handleSubmit = evt => evt.preventDefault();

  return (
    <Box as="form" onSubmit={handleSubmit} sx={{ ...container, ...sx }}>
      <Text variant="body.regular" sx={label}>
        LOCK COLLATERAL
      </Text>
      <Input sx={input} />
    </Box>
  );
};
