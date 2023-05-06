import React from 'react';

import { Background } from './styles';
import Input from '../Input';
import Info from '../Info';
import Header from '../Header';

const Layout: React.FC = () => {
  return (
    <Background>
        <Header />
        <Input />
        <Info />
    </Background>
  );
}

export default Layout;