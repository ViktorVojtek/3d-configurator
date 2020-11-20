import React from 'react';
import { MenuContainer, MenuItem } from './Menu.styled';
import { useStore } from '../../../utils/store';

type MenuProps = {
  data: {
    color?: string | undefined;
    image?: string | undefined;
    title: string;
  }[];
};

const Menu: (props: MenuProps) => JSX.Element = ({ data }) => {
  const { dispatch } = useStore();

  const handleMenuItemClick: (idx: number) => void = (idx) => {
    dispatch({ type: 'CHANGE_MAT', payload: idx });
  };

  const children: JSX.Element[] = data?.map(({ color, title }, i) => {
    return (
      <MenuItem
        color={color}
        title={title}
        key={`${title}-${i}`}
        onClick={() => handleMenuItemClick(i)}
      />
    );
  });

  return <MenuContainer>{children}</MenuContainer>;
};

export default Menu;
