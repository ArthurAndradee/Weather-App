import React from 'react';

import { Container, Search, Button } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <Search
      type='text'
      placeholder=' Enter city/town...'
      />
      <Button>
        Search
      </Button>
    </Container>
  );
}

export default Input;