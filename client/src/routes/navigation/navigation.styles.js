import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--lightgrey);
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
`;

export const NavBar = styled.nav`
  width: 100%;
  max-width: var(--maxWidth);
  background-color: var(--white);
  font-size: var(--fontS);
  height: 80px;

  .brand {
    font-weight: bold;
    color: var(--white);
    font-size: var(--fontL);
    background-color: var(--orangered);
    padding: 5px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-right: 1rem;
    :hover {
      color: var(--white);
    }
  }
`;
/*
.navigation_container {
  color: rgba(56, 53, 53, 0.616);
  width: 100%;
  height: 80px;
  padding: 1rem 3rem;
  background-color: white;
  border-bottom: 1px rgba(128, 128, 128, 0.4) solid;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  .logo_container {
    font-size: 2rem;
    margin-right: 10rem;
  }
  .nav_links {
    // width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .nav_link {
    font-size: 1rem;
    // padding: 1rem;
    width: 100%;
    &:hover {
      color: rgb(244, 92, 37);
    }
  }
  .login_container {
    margin-left: auto;
  }
}
*/
