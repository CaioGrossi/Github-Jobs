import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Jobs from '.';
import jobsMock from './mock';

describe('<Jobs />', () => {
  it('should render the correct number of jobs at each page', () => {
    const history = createMemoryHistory();
    const numberPage = 2;

    render(
      <Router history={history}>
        <Jobs isLoading={false} jobs={jobsMock} />
      </Router>
    );

    const cardJobsFirtsPage = screen.getAllByText(/front end developer/i);
    expect(cardJobsFirtsPage).toHaveLength(5);

    userEvent.click(screen.getByRole('link', { name: `${numberPage}` }));

    const cardJobsSecondPage = screen.getAllByText(/front end developer/i);
    expect(cardJobsSecondPage).toHaveLength(2);
  });
  it('should render the loading image', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Jobs isLoading={true} jobs={jobsMock} />
      </Router>
    );

    expect(
      screen.getByRole('img', { name: /loading.../i })
    ).toBeInTheDocument();
  });
});
