import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInSignUp } from './sign-in-sign-up.styles.jsx';

const SignInAndSignUp = () => (
  <SignInSignUp>
    <SignIn />
    <SignUp />
  </SignInSignUp>
);

export default SignInAndSignUp;
