import React from 'react'
import { App } from './App'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { getStore } from './store';

const store = getStore();

it('App snapshot test', () => {
    const component = renderer.create(<Provider store={store}><App /></Provider>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})