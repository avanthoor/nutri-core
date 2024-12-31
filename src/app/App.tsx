import React from 'react';

import RecipePage from '@pages/RecipePage';
import ChakraCustomProvider from './providers/ChakraCustomProvider';

import './styles/global.scss';

const App: React.FC = () => (
  <ChakraCustomProvider>
    <RecipePage />
  </ChakraCustomProvider>
);

export default App;
