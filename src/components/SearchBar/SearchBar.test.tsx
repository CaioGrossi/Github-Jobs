import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';

describe('<SearchBar />', () => {
  it('should render correctly', () => {
    render(<SearchBar onSubmit={jest.fn()} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should change value when is typing and call onSUubmit when search button is clicked', async () => {
    const onSubmitFn = jest.fn();
    render(<SearchBar onSubmit={onSubmitFn} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    const text = 'front end';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      userEvent.click(button);
    });

    expect(onSubmitFn).toHaveBeenCalledWith(text);
  });
});
