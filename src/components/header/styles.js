import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  //align-content: center;
`;

export const Nav = styled.nav`
  background-color: #af0069;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0.5rem 1rem;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Logo = styled.div`
  font-size: 40px;
`;

export const Ul = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  grid-gap: 2rem;
`;

export const Li = styled.li`
  font-size: 22px;
`;
