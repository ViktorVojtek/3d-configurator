import React from 'react';
import renderer from 'react-test-renderer';
import Title from './index';

describe('Title', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <Title name='Header title of 3D model' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
