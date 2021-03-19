import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from '.';

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    render(<Sidebar changeFullTime={jest.fn} changeLocation={jest.fn} />);

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /new york/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /amsterdam/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('radio', { name: /london/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();

    expect(
      screen.getByRole('checkbox', { name: /full time/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should add location when add location button is clicked', () => {
    render(<Sidebar changeFullTime={jest.fn} changeLocation={jest.fn} />);

    userEvent.type(screen.getByRole('textbox'), 'Belo Horizonte');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(
      screen.getByRole('radio', { name: /belo horizonte/i })
    ).toBeInTheDocument();
  });
});
