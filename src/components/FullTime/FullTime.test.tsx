import { render, screen } from '@testing-library/react';
import FullTime from '.';

describe('<FullTime />', () => {
  it('should render correctly', () => {
    const { container } = render(<FullTime />);

    expect(screen.getByText(/full time/i)).toBeInTheDocument();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bdfBwQ iGHzpI"
        >
          Full Time
        </div>
      </div>
    `);
  });
});
