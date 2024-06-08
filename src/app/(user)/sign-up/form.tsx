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

const RegisterSchema = Yup.object().shape({
  full_name: Yup.string().required('Required'),
  email: Yup.string()
    .strict()
    .required('Required')
    .lowercase('This value must be lowercase')
    .email('Invalid email')
    .max(255, 'Maximum 255 characters'),
  phone: Yup.string()
    .required('Required')
    .matches(/^5\d{8}$/, 'Invalid format'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Required'),
  confirm_password: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  termsOfService: Yup.boolean().oneOf([true]),
});

const RegisterForm = () => {
  const [activeField, setActiveField] = useState('');

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setActiveField(e.target.name);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">Create account</h1>
      <p className="mt-3 text-sm">Create account and easily book car washes</p>
      <Formik
        validationSchema={RegisterSchema}
        initialValues={{
          full_name: '',
          email: '',
          phone: '',
          car_type: '',
          car_series: '',
          password: '',
          confirm_password: '',
          termsOfService: true,
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
                    htmlFor="full_name"
                    isMovedUp={
                      !!values.full_name || activeField === 'full_name'
                    }
                  >
                    Full name
                  </Label>
                  <Input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={values.full_name}
                    error={!!errors.full_name && !!touched.full_name}
                    success={!errors.full_name && !!touched.full_name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.full_name && touched.full_name && (
                  <InputError messages={[errors.full_name]} />
                )}
              </div>
              <div>
                <div className="relative">
                  <Label
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
                    htmlFor="phone"
                    isMovedUp={!!values.phone || activeField === 'phone'}
                  >
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    error={!!errors.phone && !!touched.phone}
                    success={!errors.phone && !!touched.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.phone && touched.phone && (
                  <InputError messages={[errors.phone]} />
                )}
              </div>
              <div>
                <div className="relative">
                  <Label
                    htmlFor="car_type"
                    isMovedUp={!!values.car_type || activeField === 'car_type'}
                  >
                    Car type (Optional)
                  </Label>
                  <Input
                    id="car_type"
                    name="car_type"
                    type="text"
                    value={values.car_type}
                    error={!!errors.car_type && !!touched.car_type}
                    success={!errors.car_type && !!touched.car_type}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.car_type && touched.car_type && (
                  <InputError messages={[errors.car_type]} />
                )}
              </div>
              <div>
                <div className="relative">
                  <Label
                    htmlFor="car_series"
                    isMovedUp={
                      !!values.car_series || activeField === 'car_series'
                    }
                  >
                    Car series (Optional)
                  </Label>
                  <Input
                    id="car_series"
                    name="car_series"
                    type="text"
                    value={values.car_series}
                    error={!!errors.car_series && !!touched.car_series}
                    success={!errors.car_series && !!touched.car_series}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.car_series && touched.car_series && (
                  <InputError messages={[errors.car_series]} />
                )}
              </div>
              <div>
                <div className="relative">
                  <Label
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
              <div>
                <div className="relative">
                  <Label
                    htmlFor="confirm_password"
                    isMovedUp={
                      !!values.confirm_password ||
                      activeField === 'confirm_password'
                    }
                  >
                    Confirm password
                  </Label>
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    value={values.confirm_password}
                    error={
                      !!errors.confirm_password && !!touched.confirm_password
                    }
                    success={
                      !errors.confirm_password && !!touched.confirm_password
                    }
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                      setActiveField('');
                      handleBlur(e);
                    }}
                  />
                </div>
                {errors.confirm_password && touched.confirm_password && (
                  <InputError messages={[errors.confirm_password]} />
                )}
              </div>
              <Checkbox
                id="termsOfService"
                name="termsOfService"
                error={!!errors.termsOfService}
                checked={values.termsOfService}
                label={
                  <p className={twJoin('cursor-pointer text-sm')}>
                    I accept all{' '}
                    <Link href="/" className="font-semibold text-primary">
                      terms & conditions
                    </Link>
                  </p>
                }
                onChange={handleChange}
              />
              <button
                className="btn btn-primary mt-4"
                disabled={isSubmitting || !!Object.values(errors).length}
              >
                Create account
              </button>
              <div className="text-center text-sm">
                <span>Have an account ? </span>
                <Link href="sign-in" className="font-bold text-primary">
                  Sign in
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
