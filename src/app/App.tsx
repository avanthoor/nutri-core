import React from 'react';

import RecipePage from '@pages/recipe/ui';
import ChakraCustomProvider from './providers/ChakraCustomProvider';

import './styles/global.scss';

const App: React.FC = () => (
  <ChakraCustomProvider>
    <RecipePage />
  </ChakraCustomProvider>
);

export default App;
