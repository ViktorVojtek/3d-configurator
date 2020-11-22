import styled, { StyledComponent } from 'styled-components';

export const MenuContainer: StyledComponent<'ul', any, {}, never> = styled.ul`
  display: flex;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface MenuItemProps extends React.ComponentPropsWithoutRef<'li'> {
  color?: string | undefined;
  image?: string | undefined;
}

export const MenuItem: StyledComponent<'li', any, MenuItemProps, never> = styled.li<
  MenuItemProps
>`
  box-shadow: inset 0 0 10px 2px #000;
  display: block;
  width: 5vw;
  height: 5vw;
  position: relative;
  
  ${({ color }) => (color ? `background-color:${color};` : '')}
  ${({ image }) => (image ? `background: url(${image});` : '')}

  &:hover, &:active {
    &:before {
      background-color: #000;
      content: '';
      display: block;
      width: 100%;
      height: 0.5vw;
      position: absolute;
      top: -0.5vw;
    }
  }
`;