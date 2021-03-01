import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import CardJob from '.';
import { createMemoryHistory } from 'history';

import cardJobMock from './mock';

describe('<CardJob />', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CardJob {...cardJobMock} />
      </Router>
    );

    expect(
      screen.getByRole('heading', { name: /amazon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /software engenieer/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/new york/i)).toBeInTheDocument();
  });

  it('should render with company logo', () => {
    render(
      <Router history={history}>
        <CardJob {...cardJobMock} company_logo="image/url" />
      </Router>
    );

    expect(
      screen.getByRole('heading', { name: /amazon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /software engenieer/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /amazon/i })).toBeInTheDocument();

    expect(screen.getByText(/new york/i)).toBeInTheDocument();
  });

  it('should render with full time badge', () => {
    render(
      <Router history={history}>
        <CardJob {...cardJobMock} type="Full Time" />
      </Router>
    );

    expect(
      screen.getByRole('heading', { name: /amazon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /software engenieer/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/new york/i)).toBeInTheDocument();

    expect(screen.getByText(/full time/i)).toBeInTheDocument();
  });
});
