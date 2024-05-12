import Button from '@/app/components/Button';
import Field from '@/app/components/Field/Field';
import Input from '@/app/components/Field/Input';
import Label from '@/app/components/Field/Label';

const BecomePartner = () => {
  return (
    <section className="bg-grayishBlue/20 lg:bg-looper md:mt-18 md:pb-18 mt-6 bg-right bg-no-repeat px-4 py-6 md:px-6 md:pt-8 2xl:px-desktop">
      <div className="lg:w-3/5 xl:w-[70%] 2xl:w-4/5">
        <h3>Become partner</h3>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <Field>
            <Label htmlFor="service_area">Service area</Label>
            <Input id="service_area" type="text" name="service_area" />
          </Field>
          <Field>
            <Label htmlFor="company_name">Company name</Label>
            <Input id="company_name" type="text" name="company_name" />
          </Field>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <Field>
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="text" name="phone" />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" />
          </Field>
        </div>
        <Button
          type="button"
          className="mt-8 w-full md:w-auto"
          onClick={() => {}}
        >
          Become partner
        </Button>
      </div>
    </section>
  );
};

export default BecomePartner;
