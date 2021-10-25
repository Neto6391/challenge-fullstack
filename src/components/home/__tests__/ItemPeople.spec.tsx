import { render } from '@testing-library/react';
import ItemPeople from '../ItemPeople';

describe('<ItemPeople />', () => {
    it('render correctly', () => {
        const {getByText, asFragment} = render(<ItemPeople name="teste1" />);
        expect(getByText(/teste1/i)).toBeInTheDocument();
      });
});


