import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    background-color: ${(props) => props.theme.colors.blue1};
    border: solid;
    border-radius: 0.25rem;
    border-width: 1px;
    border-color: ${(props) => props.theme.colors.grey2};
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.black1};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    margin: 0 0 1rem 0;
    padding: 0.5rem 1rem;
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0 0 1pt ${(props) => props.theme.colors.green1};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.black1};
  }

  input[type='email'],
  input[type='password'] {
    width: 60%;
  }

  input[type='submit'] {
    padding: 0.5rem 1.5rem;
    margin: 0 0 1rem 0;
    color: ${(props) => props.theme.colors.white3};
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: normal;
    background-color: ${(props) => props.theme.colors.green1};
    border: none;
    border-radius: 1.25rem;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    input[type='email'],
    input[type='password'] {
      width: 80%;
    }
  }
`;

export default Form;
