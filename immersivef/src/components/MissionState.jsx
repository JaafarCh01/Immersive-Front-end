import React from 'react';

export const MissionState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-600">
      <h1 className="mb-8 mr-12 text-center text-3xl font-bold text-indigo-700">Our Mission:</h1>
      <ul className="grid grid-cols-1 ml-16 sm:grid-cols-2 gap-10 sm:gap-x-40">
        <li className="flex flex-col items-center sm:items-start">
          <div className="px-4 text-5xl font-extralight text-indigo-800">01.</div>
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-indigo-800">Immersive Research</div>
            <p className="max-w-xs py-2 text-sm text-indigo-900">
              We delve deep into the world of VR and AR to create engaging learning experiences. By understanding user needs and leveraging cutting-edge technology, we design content that captivates and educates.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center sm:items-start">
          <div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-indigo-800">Strategic Learning</div>
            <p className="max-w-xs py-2 text-sm text-indigo-900">
              We build data-driven learning pathways, ensuring each course offers the most effective and engaging immersive experiences. Our strategies are focused on maximizing retention and understanding.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center sm:items-start">
          <div className="px-4 text-5xl font-extralight text-indigo-700">03.</div>
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-indigo-800">Innovative Design</div>
            <p className="max-w-xs py-2 text-sm text-indigo-900">
              We design courses that are visually stunning and educationally effective. Our use of VR and AR allows learners to interact with content in ways that were never before possible.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center sm:items-start">
          <div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-indigo-800">Advanced Development</div>
            <p className="max-w-xs py-2 text-sm text-indigo-900">
              Our development team brings ideas to life, creating interactive and immersive modules that blend seamlessly with educational content. We prioritize user experience to ensure each course is both intuitive and engaging.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center sm:items-start">
          <div className="px-4 text-5xl font-extralight text-indigo-700">05.</div>
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-indigo-800">Seamless Deployment</div>
            <p className="max-w-xs py-2 text-sm text-indigo-900">
              We deploy our courses on a robust platform, ensuring that they are easily accessible and run smoothly across devices. Our focus is on providing a flawless learning experience, anytime, anywhere.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MissionState;
