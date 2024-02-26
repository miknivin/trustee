import React from "react";
import mainImage from "../../assets/main image.jpeg";
const About = () => {
  return (
    <section data-section id="aboutRef">
      {/* About section starts */}
      <div className="relative bg-gradient-to-br text-left">
        <div className="text-center block relative z-20 mx-auto py-4">
          <h1 className="text-5xl font-poppins font-bold my-8">
            About Asa Foundation
          </h1>
        </div>
        <div className="hero font-poppins mx-auto min-h-full">
          {/* About Me title */}
          {/* Black backdrop with opacity */}
          <div className="absolute top-0 left-0 w-full h-full bg-base-300 opacity-90" />
          <div className="hero-content items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {/* img col */}
            <div className="col-span-1 sm:col-span-1 flex relative z-10 overflow-hidden p-0 sm:overflow-visible sm:p-2 order-1 h-full">
              <div className="w-full">
                <img
                  width={100}
                  src={mainImage}
                  alt="mockup"
                  className="w-full rounded-box shadow-2xl mx-auto md:sticky top-12 z-30"
                />
              </div>
            </div>
            {/* words col */}
            <div className="col-span-1 sm:col-span-1 order-2 flex flex-col items-start relative z-10">
              <div className="bg-gray-300 px-3 py-1 my-2 -ml-2 rounded-box">
                <p className="font-bold text-lg bg-gradient-to-tl from-violet-700 via-blue-600 to-purple-500 bg-clip-text text-transparent">
                  About
                </p>
              </div>
              {/* <h1 className="title text-5xl font-bold my-3">
            I can create helpful
            <span className="bg-gradient-to-tl from-violet-700 via-purple-600 to-blue-300 bg-clip-text text-transparent">
              {" "}
              solutions{" "}
            </span>
          </h1> */}
              <p className="paragraph mt-6 mb-3 w-full font-light text-lg">
                The Asa Foundation, established in February 2022, stands as a
                testament to the enduring legacy of Asa Kumari, a distinguished
                Chartered Accountant and esteemed Indian Classical dancer.
                Throughout her life, Asa made significant contributions to the
                field of Chartered Accountancy as a faculty member, touching the
                lives of countless students who fondly referred to her as
                "Asamam." Her passion for teaching and her dedication enabled
                many aspiring Chartered Accountants to realize their dreams.
              </p>
              <p className="paragraph mb-3 w-full font-light text-lg">
                Beyond her professional achievements, Asa was a gifted dancer,
                specializing in the art forms of Mohiniattam and Bharatanatyam.
                Her talent shone brightly through numerous accolades earned at
                both the state and university levels. However, Asa's activities
                extended far beyond her professional and artistic pursuits. She
                was a compassionate advocate for underprivileged children,
                steadfast in her support for their educational endeavors.
              </p>
              <p className="paragraph mb-6 w-full font-light text-lg">
                In honor of Asa's memory and her unwavering commitment to
                uplifting the less fortunate, the Asa Foundation was
                established. Situated in Ambalapuzha, Asa's birthplace, the
                foundation operates with the sole purpose of carrying forward
                her vision of providing educational opportunities to deserving
                children in need. The foundation's operations are sustained
                entirely by the resources accumulated during Asa's lifetime,
                supplemented by contributions from her life partner.
              </p>
              <p className="paragraph mb-6 w-full font-light text-lg">
                Notably, the Asa Foundation has refrained from accepting
                donations, preferring instead to rely on the family's estate and
                income to fulfill its noble mission. This decision reflects a
                steadfast commitment to honoring Asa's wishes and maintaining
                the integrity of her legacy.
              </p>
              <p className="paragraph mb-6 w-full font-light text-lg">
                Driven by the collective desire of Asa's family, friends, and
                the student community she inspired, the Asa Foundation stands as
                a beacon of hope and opportunity for generations to come.
                Through its unwavering dedication to empowering the
                underprivileged through education, the foundation ensures that
                Asa's spirit lives on, continuing to inspire and uplift those in
                need.
              </p>
              {/* <button class="btn btn-primary tracking-wider">Download résumé</button> */}
              {/* biography */}
              {/* <div class="glass bg-gradient-to-tl from-base-100 dark:via-base-200 to-base-300 p-5 my-6 rounded-lg w-full">
      <h3 class="text-3xl text-violet-600 py-3">Biography</h3>
      <div class="flex flex-wrap gap-3 w-full py-0 sm:py-5">
        <div class="grid flex-grow mb-3 sm:mb-0 card bg-base-300 rounded-box pl-5 py-5 h-fit">
          <h1 class="text-start sub-clamp font-bold">Name</h1>
          <div class="h-[1px] w-16 bg-slate-400 my-2"></div>
          <p class="text-start para-clamp">Nivin Michael</p>
        </div>
       <div class="divider divider-horizontal"></div> */}
              {/* <div class="grid flex-grow card bg-base-300 rounded-box pl-5 py-5 h-fit">
          <h1 class="text-start sub-clamp font-bold">Birth Day</h1>
          <div class="h-[1px] w-16 bg-slate-500 my-2"></div>
          <p class="text-start para-clamp">17/04/1996</p>
        </div> */}
              {/* </div>
      <div class="flex flex-wrap gap-3 w-full py-0 sm:py-5">
        <div class="grid flex-grow card bg-base-300 rounded-box pl-5 py-5 pr-7">
          <h1 class="text-start sub-clamp font-bold">Email</h1>
          <div class="h-[1px] w-16 bg-slate-400 my-2"></div>
          <p class="text-start para-clamp">nivin.official017&#64;gmail.com</p>
        </div> */}
              {/* <div class="divider divider-horizontal"></div> */}
              {/* <div class="grid flex-grow card bg-base-300 rounded-box pl-5 py-5">
          <h1 class="text-start sub-clamp font-bold">Phone</h1>
          <div class="h-[1px] w-16 bg-slate-500 my-2"></div>
          <p class="text-start para-clamp">+91 6238002737, +91 9497505820</p>
        </div>
      </div>
    </div> */}
            </div>
          </div>
        </div>
        {/* Hero section ends */}
      </div>
    </section>
  );
};

export default About;
