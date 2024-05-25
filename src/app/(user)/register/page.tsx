import Link from 'next/link';

import Button from '@/app/components/Button';
import Field from '@/app/components/Field/Field';
import Input from '@/app/components/Field/Input';
import Label from '@/app/components/Field/Label';

export default function Register() {
  return (
    <div className="flex size-full items-center justify-center py-10">
      <div className="w-full">
        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="mt-3 text-sm">
          Create account and easily book car washes
        </p>
        <form action="" className="mt-6 flex flex-col gap-4">
          <Field>
            <Label htmlFor="full_name">Full name</Label>
            <Input id="full_name" type="text" name="full_name" />
          </Field>
          <Field>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" name="email" />
          </Field>
          <Field>
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="text" name="phone" />
          </Field>
          <Field>
            <Label htmlFor="car_type">Car type (Optional)</Label>
            <Input id="car_type" type="text" name="car_type" />
          </Field>
          <Field>
            <Label htmlFor="car_series">Car series (Optional)</Label>
            <Input id="car_series" type="text" name="car_series" />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" />
          </Field>
          <Field>
            <Label htmlFor="confirm_password">Confirm password</Label>
            <Input
              id="confirm_password"
              type="password"
              name="confirm_password"
            />
          </Field>
          <Button type="button" className="mt-4" onClick={() => {}}>
            Create account
          </Button>
          <div className="text-center text-sm">
            <span>Have an account ? </span>
            <Link href="sign-in" className="font-bold text-primary">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
