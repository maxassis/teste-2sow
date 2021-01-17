import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
`;

export const Nav = styled.nav`
  background-color: #af0069;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0.5rem 1rem;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.51);

  ${media.lessThan("small")`
   display: flex;
   justify-content: space-between;
   width: 90vw;
    
  `}
`;

export const Logo = styled.div`
  font-size: 40px;
  font-family: "Open Sans", sans-serif;

  ${media.lessThan("medium")`
   font-size: 30px;
    
  `}

  ${media.lessThan("small")`
   font-size: 20px;
    
  `}
`;

export const Ul = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  grid-gap: 2rem;

  ${media.lessThan("small")`
   grid-gap: 0rem;
    
  `}
`;

export const Li = styled.li`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
`;

export const Linki = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  line-height: 1;
  cursor: pointer;

  ${media.lessThan("medium")`
   font-size: 18px;
    
  `}
`;
