'use client';

import { Formik } from 'formik';
import { FocusEvent, useState } from 'react';
import * as Yup from 'yup';

import Input from '@/app/components/Field/Input';
import InputError from '@/app/components/Field/InputError';
import Label from '@/app/components/Field/Label';

const BecomePartnerSchema = Yup.object().shape({
  service_area: Yup.string().required('Required'),
  company_name: Yup.string().required('Required'),
  phone: Yup.string()
    .required('Required')
    .matches(/^5\d{8}$/, 'Invalid format'),
  email: Yup.string()
    .strict()
    .required('Required')
    .lowercase('This value must be lowercase')
    .email('Invalid email')
    .max(255, 'Maximum 255 characters'),
});

const BecomePartnerForm = () => {
  const [activeField, setActiveField] = useState('');

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setActiveField(e.target.name);
  };

  return (
    <div className="w-full">
      <Formik
        validationSchema={BecomePartnerSchema}
        initialValues={{
          service_area: '',
          company_name: '',
          phone: '',
          email: '',
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
            <form onSubmit={handleSubmit}>
              <div className="mt-6 flex flex-col gap-4 md:flex-row">
                <div className="w-full">
                  <div className="relative">
                    <Label
                      htmlFor="service_area"
                      isMovedUp={
                        !!values.service_area || activeField === 'service_area'
                      }
                    >
                      Service area
                    </Label>
                    <Input
                      id="service_area"
                      name="service_area"
                      type="text"
                      value={values.service_area}
                      error={!!errors.service_area && !!touched.service_area}
                      success={!errors.service_area && !!touched.service_area}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={(e) => {
                        setActiveField('');
                        handleBlur(e);
                      }}
                    />
                  </div>
                  {errors.service_area && touched.service_area && (
                    <InputError messages={[errors.service_area]} />
                  )}
                </div>
                <div className="w-full">
                  <div className="relative">
                    <Label
                      htmlFor="company_name"
                      isMovedUp={
                        !!values.company_name || activeField === 'company_name'
                      }
                    >
                      Company name
                    </Label>
                    <Input
                      id="company_name"
                      name="company_name"
                      type="text"
                      value={values.company_name}
                      error={!!errors.company_name && !!touched.company_name}
                      success={!errors.company_name && !!touched.company_name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={(e) => {
                        setActiveField('');
                        handleBlur(e);
                      }}
                    />
                  </div>
                  {errors.company_name && touched.company_name && (
                    <InputError messages={[errors.company_name]} />
                  )}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4 md:flex-row">
                <div className="w-full">
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
                <div className="w-full">
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
              </div>
              <button
                className="btn btn-primary mt-8 w-full md:w-auto"
                disabled={isSubmitting || !!Object.values(errors).length}
              >
                Become partner
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BecomePartnerForm;
