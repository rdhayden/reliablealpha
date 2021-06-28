import React, { useEffect, useRef } from 'react';
import { ReCaptcha } from './ReCaptcha';
import { useForm } from "react-hook-form";
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import FormContainer from './FormContainer';
import Form from './Form';
import { useAuth } from '../../hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      'Invalid email'
    ),
  password: Yup.string().required('Password is required'),
  captchaToken: Yup.string().required('Verify you are a human'),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const auth = useAuth();

  const theme = useTheme();

  const history = useHistory();

  const submitRef = useRef(null);

  const emailRef = useRef(null);
  const { ref, ...rest } = register('email');

  // Manually register captchaToken
  useEffect(() => {
    register('captchaToken');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Watch for changes to captcha
  const watchCaptcha = watch('captchaToken');

  // Set focus on email
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onSubmit = async (data) => {
    try {
      await auth.login(data.email, data.password);
      toast('Welcome! 👋');
      reset();
      history.push('/');
    } catch {
      toast.error('Error logging in.');
    }
  };

  const onVerifyCaptcha = (token) => {
    setValue('captchaToken', token);
    clearErrors(['captchaToken']);
    submitRef.current.focus();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <input
          {...rest}
          name="email"
          ref={(e) => {
            ref(e);
            emailRef.current = e;
          }}
          placeholder="Email"
          type="email"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input {...register("password")} placeholder="Password" type="password" />
        {errors.password && <span>{errors.password.message}</span>}
        <ReCaptcha
          onVerifyCaptcha={onVerifyCaptcha}
          backgroundColor={
            watchCaptcha ? theme.colors.green1 : theme.colors.blue1
          }
          color={watchCaptcha ? theme.colors.white3 : theme.colors.black1}
          hover={'none'}
          verified={watchCaptcha}
          margin="0 0 1rem 0"
        />
        {errors.captchaToken && <span>{errors.captchaToken.message}</span>}

        <input type="submit" value="Submit" ref={submitRef} />
      </Form>
    </FormContainer>
  );
}