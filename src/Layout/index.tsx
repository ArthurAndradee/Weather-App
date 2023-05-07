import React from 'react';

import { Input, Button} from './styles';
import Header from '../Header';

const Layout: React.FC = () => {
  return (
    <div>
        <Header />
        <Input/>
        <Button>Search</Button>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
    </div>
  );
}

export default Layout;