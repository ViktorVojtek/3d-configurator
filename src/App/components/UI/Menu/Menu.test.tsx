import React from 'react';
import { create } from 'react-test-renderer';

import Menu from './index';

describe('Menu', () => {
  const data: {
    color?: string | undefined;
    image?: string | undefined;
    title: string;
  }[] = [
    { color: 'yellow', image: undefined, title: 'Yellow' },
    {
      color: 'purple',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/A1Vmpgx%2Bg1L._AC_SL1500_.jpg',
      title: 'Purple',
    },
    { color: '#007fff', title: 'Azure' },
  ];

  test('snapshot renders', () => {
    const component = create(<Menu data={data} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
