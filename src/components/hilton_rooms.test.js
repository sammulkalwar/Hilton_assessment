import { Rooms } from './hilton_rooms';
import React from 'react';
import AdultSection from './adultsSection';
import ChildSection from './childSection';

import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("<searchBoxComponent />", () => {
    let wrapper, props;
    beforeEach(() => {
        props = { 
            hiltonRoomData: [{
                checked: false
            },
            {
                checked: true
            }],
            handleCheck: () => {},
            handleChildrenChange: () => {},
            handleAdultChange: () => {}
        };
        wrapper = shallow( <Rooms {...props}/>);   
    });
    
    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });
    it('should render AdultSection component', () => {
        expect(wrapper.find(AdultSection)).toBeTruthy();
    });
    it('should render ChildSection component', () => {
        expect(wrapper.find(ChildSection)).toBeTruthy();
    });
    it('should have checkbox to select room', () => {
        expect(wrapper.find('input').length).toEqual(1);
    }); 
    it('should call handleChange', () => {
        const handleCheckSpy = spyOn(props, 'handleCheck');
        wrapper.find('input').simulate('change');
        expect(props.handleCheck).toBeTruthy();
    });
    it('should call handleChange', () => {
        wrapper.find(ChildSection).at(0).prop('childrenChange')();
        wrapper.find(AdultSection).at(0).prop('adultChange')();
    });
});