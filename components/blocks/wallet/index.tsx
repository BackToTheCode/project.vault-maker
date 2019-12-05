import React, { Children, FC } from 'react';
import { Box } from 'rebass';
import { Header, HeaderProps } from './header';
import { LogoButton, LogoButtonProps } from './logo-button';
import { SubHeader, SubHeaderProps } from './sub-header';


interface Wallet {
  Header: FC<HeaderProps>;
  SubHeader: FC<SubHeaderProps>;
  LogoButton: FC<LogoButtonProps>;
}

export interface WalletProps {
  children: any;
}

export const Wallet: FC<WalletProps> & Wallet = ({ children }) => {
  return (
    <Box sx={{mt: '160px'}}>
      {Children.map(children, (child: any) => {
        if (child.type.name === 'Header') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.name === 'SubHeader') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.name === 'LogoButton') {
          return React.cloneElement(child, child.props);
        }

        return child;
      })}
    </Box>
  );
};

Wallet.Header = Header;
Wallet.SubHeader = SubHeader;
Wallet.LogoButton = LogoButton;

