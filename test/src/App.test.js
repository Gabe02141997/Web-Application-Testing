import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display';

test('displays testing in app component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/testing/i);
  expect(linkElement).toBeInTheDocument();
});


test('Displays Balls in Display component', () => {
  const { getByText } = render(<Display/>)
  const element = getByText(/balls:/i)
  expect(element).toBeInTheDocument();
})

test('Displays strikes in Display Component', () => {
  const { getByText } = render(<Display/>)
  const element = getByText(/strikes:/i)
  expect(element).toBeInTheDocument();
})