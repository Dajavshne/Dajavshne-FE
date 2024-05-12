import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="lg:py-18 px-4 py-6 md:px-6 2xl:px-desktop">
      <h3 className="lg:hidden">About us</h3>
      <div className="items-start gap-12 lg:flex">
        <Image
          src={'/images/car-washing.jpeg'}
          width={802}
          height={581}
          alt="Car washing"
          className="mt-4 w-full rounded-10 lg:mt-0 lg:w-3/5"
        />
        <div>
          <h3 className="hidden lg:block">About us</h3>
          <p className="mt-4 lg:mt-6">
            {`At Dajavshne.ge, we're passionate about providing exceptional car washes with a focus on [customer focus area - e.g., convenience, exceptional cleaning, environmental responsibility]. Our team of friendly and experienced professionals is dedicated to making your car washing experience a breeze. We use only the highest quality products and cutting-edge technology to ensure your car gets a spotless clean, every time. Whether you're in need of a quick touch-up or a deep clean, we have a wash package to fit your needs and budget.`}
          </p>
          <p className="mt-4">
            {`At Dajavshne.ge, we're passionate about providing exceptional car washes with a focus on [customer focus area - e.g., convenience, exceptional cleaning, environmental responsibility]. Our team of friendly and experienced professionals is dedicated to making your car washing experience a breeze. We use only the highest quality products and cutting-edge technology to ensure your car gets a spotless clean, every time. Whether you're in need of a quick touch-up or a deep clean, we have a wash package to fit your needs and budget.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
