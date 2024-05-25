import Link from 'next/link';

import Button from '@/app/components/Button';
import Field from '@/app/components/Field/Field';
import Input from '@/app/components/Field/Input';
import Label from '@/app/components/Field/Label';

export default function SignIn() {
  return (
    <div className="flex size-full items-center justify-center py-10">
      <div className="w-full">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="mt-3 text-sm">Sign in and discover more</p>
        <form action="" className="mt-6 flex flex-col gap-4">
          <Field>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" name="email" />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" />
          </Field>
          <Button type="button" className="mt-4" onClick={() => {}}>
            Sign in
          </Button>
          <div className="text-center text-sm">
            <span>Don’t have an account ? </span>
            <Link href="register" className="font-bold text-primary">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
