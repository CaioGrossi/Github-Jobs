import { screen, render } from '@testing-library/react';
import CardJob from '.';

import cardJobMock from './mock';

describe('<CardJob />', () => {
  it('should render correctly', () => {
    render(<CardJob {...cardJobMock} />);

    expect(
      screen.getByRole('heading', { name: /amazon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /software engineer/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/new york/i)).toBeInTheDocument();

    expect(screen.getByText(/5 days ago/i)).toBeInTheDocument();
  });

  it('should render with company logo', () => {
    render(<CardJob {...cardJobMock} company_logo="image/url" />);

    expect(
      screen.getByRole('heading', { name: /amazon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /software engineer/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /amazon/i })).toBeInTheDocument();

    expect(screen.getByText(/new york/i)).toBeInTheDocument();

    expect(screen.getByText(/5 days ago/i)).toBeInTheDocument();
  });

  it('should render with full time badge', () => {
    render(<CardJob {...cardJobMock} fullTime />);

    expect(
      screen.getByRole('heading', { name: /amazon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /software engineer/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/new york/i)).toBeInTheDocument();

    expect(screen.getByText(/full time/i)).toBeInTheDocument();

    expect(screen.getByText(/5 days ago/i)).toBeInTheDocument();
  });
});
