import React from 'react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import styled from 'styled-components';

const CaptchaButton = ({
  onVerifyCaptcha,
  backgroundColor,
  color,
  hover,
  verified,
  ...rest
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha('contact');

    console.log(`token: ${token}`);

    onVerifyCaptcha(token);
  };

  return (
    <StyledButton
      onClick={clickHandler}
      type="button"
      backgroundColor={backgroundColor}
      color={color}
      cursor={verified ? 'default' : 'pointer'}
      hover={hover}
      disabled={verified ? true : false}
      {...rest}
    >
      {verified ? 'Verified' : "Click to verify you're human"}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 0.5rem 0;
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: normal;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  border: solid;
  border-radius: 1rem;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.grey2};
  box-shadow: ${(props) =>
    props.boxShadow
      ? props.boxShadow
      : props.theme.shadows.glowHoverGreenStart};
  transition: ${(props) => props.theme.animations.buttonGlow};
  color: ${(props) => (props.color ? props.color : 'black')};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  width: 100px;

  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      props.hover ? props.hover : props.theme.shadows.glowHoverGreenEnd};
  }
`;

export const ReCaptcha = ({
  onVerifyCaptcha,
  backgroundColor,
  color,
  hover,
  verified,
  ...rest
}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_CAPTURE_SITE}>
      <CaptchaButton
        onVerifyCaptcha={onVerifyCaptcha}
        backgroundColor={backgroundColor}
        color={color}
        hover={hover}
        verified={verified}
        {...rest}
      />
    </GoogleReCaptchaProvider>
  );
};
