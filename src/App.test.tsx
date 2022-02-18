import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render the first test app id', ()=> {
  render(<App/>)
  const appElement = screen.getByTestId('app')
  expect(appElement).toBeInTheDocument()
})
