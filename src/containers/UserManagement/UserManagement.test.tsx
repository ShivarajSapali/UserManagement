import React from 'react'
import { shallow } from 'enzyme'
import { UserManagement } from './UserManagement'

it('should render Button text', () => {
    const wrapper = shallow(<UserManagement />)
    const button = wrapper.find('.add-user-btn')
    const result = button.text()
    expect(result).toBe("Add User")
})

it('should render Button text', () => {
    const wrapper = shallow(<UserManagement />)
    const button = wrapper.find('.add-user-btn')
    const result = button.text()
    expect(result).toBe("Add Users")
})