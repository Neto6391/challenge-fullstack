import { render, screen } from '@testing-library/react';

import { List } from '../../__mocks__/home/People';
import ListPeopleItems from '../ListPeople';

const props = {
    peoples: List,
}

describe('<ListPeople />', () => {
    it('should be render list correctly', () => {
        render(<ListPeopleItems {...props} />);
        expect(screen.getByTestId("list-people")).toBeVisible();
        expect(screen.getByTestId("item-people-0")).toBeVisible();
        expect(screen.getByTestId("item-people-1")).toBeVisible()
    })
});