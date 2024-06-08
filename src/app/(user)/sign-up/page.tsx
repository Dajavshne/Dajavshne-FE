import { Metadata } from 'next';

import RegisterForm from './form';

export const metadata: Metadata = {
  title: 'Create account',
  description: 'Create account and easily book car washes',
};

export default function Register() {
  return <RegisterForm />;
}
