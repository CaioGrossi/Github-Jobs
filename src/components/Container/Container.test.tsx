import { render } from '@testing-library/react';
import { Container } from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Github Jobs</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyle('max-width: 120rem');
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-bdfBwQ bfcdsh"
      >
        <span>
          Github Jobs
        </span>
      </div>
    `);
  });
});
