import React from 'react'
import {shallow} from 'enzyme'
import Form from '../Form'


describe('Form wrapper', () => {
    it('Renders all children without errors', () => {
        const wrapper = shallow(<Form><input type = 'text'/></Form>);
        expect(wrapper.children.length).toEqual(1);
    })

})