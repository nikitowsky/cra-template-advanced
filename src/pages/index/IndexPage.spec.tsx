import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from './IndexPage';

it('<App /> renders without crash', () => {
  const { getByText } = render(<IndexPage />);

  expect(getByText(/Hello world!/i)).toBeTruthy();
});
