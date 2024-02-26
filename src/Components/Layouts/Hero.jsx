import React from "react";

const Hero = () => {
  return (
    <div data-section id="homeRef">
      <section className="bg-center bg-cover bg-no-repeat bg-[url('https://ik.imagekit.io/c1jhxlxiy/2149125863-min.webp?updatedAt=1708931248882')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-2 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Welcome to Asa Foundation
          </h1>
          <h3 className=" mb-6 text-xl px-3 font-medium tracking-tight leading-none md:text-4xl lg:text-4xl dark:text-blue-400 text-center">
            Honoring Asa Kumari's Legacy, Empowering Children
          </h3>
          <p className="mb-8 px-4 text-sm font-light text-gray-300 lg:text-lg sm:px-16 lg:px-44">
            Discover Asa Foundation, a tribute to the remarkable Asa Kumari,
            celebrated for her achievements as a Chartered Accountant and Indian
            Classical dancer. Empowering underprivileged children through
            education, we continue Asa's legacy of compassion and support.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#me"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get in Touch
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            {/* <a
              href="#me"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
