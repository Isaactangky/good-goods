import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 800px) {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const NavBar = styled.nav`
  background: var(--white);
  box-shadow: var(--light-shadow);
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  .logo {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo .brand {
    font-weight: bold;
    color: var(--white);
    font-size: var(--fontM);
    background-color: var(--orangered);
    padding: 10px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    padding: 0;
    .nav-toggle {
      display: none;
    }
  }
`;

export const LinksAuthContainer = styled.div`
  flex-grow: 1;
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  @media screen and (min-width: 800px) {
    height: auto !important;
  }
`;
export const LinksAuth = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Links = styled.ul`
  margin: 0;
  padding: 0;
  a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }
  a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    padding-left: 2rem;
    a {
      padding: 0;
      margin: 0 0.5rem;
    }
    a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

export const AuthContainer = styled.div`
  padding: 0.5rem 1rem;
  @media screen and (min-width: 800px) {
    display: flex;
  }
`;
