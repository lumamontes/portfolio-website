import styled from 'styled-components';
export const Nav = styled.nav`
    width: 5vw;
    height: 100vh;
    position: fixed;
    font-size: 1.5rem;
    top: 0;
    left: 0;
    z-index: 20;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavbarContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

`
export const VerticalLine = styled.div`
 border-left: 2px solid white;
  height: 10.75rem;
`
export const NavLink = styled.a`
    color: #fff;
    font-weight: bold;
    transition: color 300ms;
    cursor: pointer;
    & {
        padding-bottom: 1.25rem;
    }
    transition: 200ms;
    &:hover{
        opacity: 70%;
    }
`