import { Metadata } from 'next';

import SignInForm from './form';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in and discover more',
};

export default function SignIn() {
  return <SignInForm />;
}
