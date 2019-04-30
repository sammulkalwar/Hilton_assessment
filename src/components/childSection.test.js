import { HiltonRooms } from './hilton_rooms';
import React from 'react';
// import AdultSection from './adultsSection';
import ChildSection from './childSection';

import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("<childSectionComponent />", () => {
    let wrapper; let props;
    beforeEach(() => {
        props = {
            stordedRoomData: [],
            childRoomInfo: {
                checked: false,
                childrens: [1, 2]
            }
        }
        wrapper = shallow( <ChildSection {...props} />);   
    });
    
    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });
});