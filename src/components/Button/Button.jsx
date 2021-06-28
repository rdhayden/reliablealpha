import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 0;
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => props.theme.colors.white3};
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: normal;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.green1};
  border: none;
  border-radius: 0.25rem;
  box-shadow: ${(props) =>
    props.boxShadow
      ? props.boxShadow
      : props.theme.shadows.glowHoverGreenStart};
  transition: ${(props) => props.theme.animations.buttonGlow};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  width: 100px;

  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      props.hover ? props.hover : props.theme.shadows.glowHoverGreenEnd};
  }
`;

export default Button;
