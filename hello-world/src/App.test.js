import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test(
  'renders greeting',
  () => {
    const { getByText } = render(<App />);
    const greetingElement = getByText(/hello amit/i);
    expect(greetingElement).toBeInTheDocument();
  },
  30000
);
