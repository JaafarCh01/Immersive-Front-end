import React from 'react'

export const AboutHero = () => {
  return (
    <div>
      <dh-component>
        <div className="bg-gray-100">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                Transforming Learning with
                <span className="text-indigo-700"> Immersive Technology</span>
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                Our platform harnesses the power of Virtual and Augmented Reality to create engaging and interactive learning experiences. Dive into a world where education meets innovation, making complex concepts simple and visual.
              </p>
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  )
}
export default AboutHero;
