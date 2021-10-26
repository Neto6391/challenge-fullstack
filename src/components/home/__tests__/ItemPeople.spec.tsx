import { render } from '@testing-library/react';
import { List } from '../../__mocks__/home/People';
import ItemPeople from '../ItemPeople';

const props = {
    people: List[0],
}

describe('<ItemPeople />', () => {
    it('item render correctly', () => {
        const {getByText, asFragment} = render(<ItemPeople {...props.people} />);
        expect(getByText(/teste 1/i)).toBeInTheDocument();
      });
});


