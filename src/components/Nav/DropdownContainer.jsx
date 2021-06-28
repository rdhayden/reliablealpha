import styled from 'styled-components';

export default styled.div`
  align-self: center;

  img {
    width: 30px;
    height: 30px;
  }

  nav {
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.black1};
    border-color: ${(props) => props.theme.colors.grey1};
    border-radius: 0 0 0.25rem 0.25rem;
    border-style: none solid solid solid;
    border-width: 1px;
    position: absolute;
    top: 47px;
    width: 100px;
    padding-top: 3px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    @media ${(props) => props.theme.breakpoints.m} {
      top: 37px;
    }

    @media ${(props) => props.theme.breakpoints.s} {
      top: 34px;
      width: 80px;
    }
  }

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white3};
    padding: 5px 5px;
    display: block;
  }
`;
