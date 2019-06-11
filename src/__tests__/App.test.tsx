import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from '../App';

afterEach(cleanup);

it('<App /> renders without crash', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Hello world!/i)).toBeTruthy();
});
