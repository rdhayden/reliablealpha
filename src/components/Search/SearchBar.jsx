import styled from 'styled-components';

import magnifyingGlass from '../../images/magnifyingGlassWhite.png';

const SearchBar = () => (
  <FormContainer>
    <form action="/" method="get">
      <button type="submit">
        <img src={magnifyingGlass} alt="click to search" />
      </button>
      <label htmlFor="header-search"></label>
      <input
        type="text"
        id="header-search"
        placeholder="Search securities"
        name="s"
      />
    </form>
  </FormContainer>
);

const FormContainer = styled.div`
  justify-self: center;
  align-self: center;
  border-style: none none solid none;
  border-color: white;
  border-width: 1px;

  input {
    border: none;
    background-color: ${(props) => props.theme.colors.black1};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.white1};
  }

  button {
    border: none;
    background-color: ${(props) => props.theme.colors.black1};
    padding-right: 5px;
  }

  img {
    object-fit: scale-down;
    width: 0.8rem;
    height: 0.8rem;
    align-self: center;
  }

  input[type='text'] {
    width: 120px;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    input[type='text'] {
      width: 45px;
    }
  }
`;

export default SearchBar;
