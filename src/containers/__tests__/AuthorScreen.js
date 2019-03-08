import React from 'react'
import { shallow } from 'enzyme'
import AuthorScreen from '../AuthorScreen'

it('renders correctly', () => {
    const wrapper = shallow(<AuthorScreen />)
    expect(wrapper).toMatchSnapshot();
})