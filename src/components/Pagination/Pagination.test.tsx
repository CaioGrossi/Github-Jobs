import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '.';

describe('<Pagination />', () => {
  it('should render correctly the number of pages', () => {
    render(<Pagination jobsPerPage={5} totalJobs={40} paginate={jest.fn()} />);

    expect(screen.getAllByRole('link')).toHaveLength(8);
  });

  it('should call paginate funcion when some page is clicked', () => {
    const onPaginate = jest.fn();
    const numberPage = 5;
    render(<Pagination jobsPerPage={5} totalJobs={40} paginate={onPaginate} />);

    const pageLink = screen.getByRole('link', { name: `${numberPage}` });

    userEvent.click(pageLink);

    expect(onPaginate).toHaveBeenCalledWith(numberPage);
  });
});
