import BecomePartnerForm from './Form';

const BecomePartner = () => {
  return (
    <section className="mt-6 bg-grayishBlue/20 md:mt-18 ">
      <div className="mx-auto max-w-1920 px-4 py-6 md:px-6 md:pb-18 md:pt-8 2xl:px-desktop">
        <div className="bg-right bg-no-repeat lg:bg-looper">
          <div className="lg:w-3/5 xl:w-[70%] 2xl:w-2/3">
            <h3>Become partner</h3>
            <BecomePartnerForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
