'use client';

import { Formik } from 'formik';
import Link from 'next/link';
import { FocusEvent, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import * as Yup from 'yup';

import Checkbox from '@/app/components/Checkbox';
import Input from '@/app/components/Field/Input';
import InputError from '@/app/components/Field/InputError';
import Label from '@/app/components/Field/Label';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .strict()
    .required('Required')
    .lowercase('This value must be lowercase')
    .email('Invalid email')
    .max(255, 'Maximum 255 characters'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Required'),
});

const SignInForm = () => {
  const [activeField, setActiveField] = useState('');

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setActiveField(e.target.name);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">Create account</h1>
      <p className="mt-3 text-sm">Create account and easily book car washes</p>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{
          email: '',
          password: '',
          remember_me: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="relative">
                  <Label
                    withIcon
                    htmlFor="email"
                    isMovedUp={!!values.email || activeField === 'email'}
                  >
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={values.email}
                    error={!!errors.email && !!touched.email}
                    success={!errors.email && !!touched.email}
                    iconType="EmailIcon"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.email && touched.email && (
                  <InputError messages={[errors.email]} />
                )}
              </div>
              <div>
                <div className="relative">
                  <Label
                    withIcon
                    htmlFor="password"
                    isMovedUp={!!values.password || activeField === 'password'}
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    error={!!errors.password && !!touched.password}
                    success={!errors.password && !!touched.password}
                    iconType="LockIcon"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.password && touched.password && (
                  <InputError messages={[errors.password]} />
                )}
              </div>
              <Checkbox
                id="remember_me"
                name="remember_me"
                checked={values.remember_me}
                label={
                  <span className={twJoin('cursor-pointer text-sm')}>
                    Remember me
                  </span>
                }
                onChange={handleChange}
              />
              <button
                className="btn btn-primary mt-4"
                disabled={isSubmitting || !!Object.values(errors).length}
              >
                Sign In
              </button>
              <div className="text-center text-sm">
                <span>Don’t have an account ? </span>
                <Link href="sign-up" className="font-bold text-primary">
                  Create one
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignInForm;
