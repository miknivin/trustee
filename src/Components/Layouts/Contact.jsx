import React from "react";
import contactImage from "../../assets/contact.webp";
const Contact = () => {
  return (
    <section
      className="bg-blue-50 dark:bg-slate-800"
      data-section
      id="contactRef"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <div className="text-center block relative z-20 mx-auto py-4">
            <h1 className="text-5xl font-poppins font-bold my-8 text-start md:text-center">
              Contact
            </h1>
          </div>
        </div>
        <div className="flex items-stretch justify-center text-start pb-6">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6 ">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Contact us to be a part of Asa Foundation's mission, honoring
                the legacy of Asa Kumari, a distinguished Chartered Accountant
                and Indian Classical dancer. Join us in empowering
                underprivileged children through education, continuing Asa's
                vision of compassion and support.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  {/* <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div> */}
                  {/* <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        1230 Maecenas Street Donec Road
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        New York, EEUU
                      </p>
                    </div> */}
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      width={24}
                      height={24}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      class="h-6 w-6 fill-slate-300"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: tailnext@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  {/* <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div> */}
                  {/* <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div> */}
                </li>
                <li className="flex flex-wrap gap-4">
                  <a
                    href="#me"
                    className="bg-blue-900 text-slate-300 p-2 rounded-md"
                  >
                    <i class="fa-brands fa-square-facebook text-5xl hover:opacity-75"></i>
                  </a>
                  <a
                    href="#me"
                    className="bg-blue-900 text-slate-300 p-2 rounded-md"
                  >
                    <i class="fa-brands fa-square-instagram text-5xl text- hover:opacity-75"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl">
              {/* <h2 className="mb-4 text-2xl font-bold">
                  Ready to Get Started?
                </h2> */}
              {/* <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        />
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        />
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form> */}
              <img
                className="w-full h-full rounded-box"
                src={contactImage}
                alt="contat_us_image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
