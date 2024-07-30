import React from 'react';

export const Testimonials = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the experiences of our users and how they have benefited from our platform.
            </p>
          </div> 
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Just Incredible </h3>
                <p className="my-4">
                "This platform has completely transformed my learning experience. The VR simulations are immersive and incredibly engaging."
                </p>
                <p className="my-4">
                "The AR features are fantastic, making complex concepts easier to grasp. It's a truly innovative approach to education."
                </p>
                <p className="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Salma</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Student at EMSI</div>
                </div>
              </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Incredible VR and AR Integration</h3>
                <p className="my-4">
                "The combination of VR and AR on this platform offers an unmatched learning experience. The detail and interactivity are exceptional."
                </p>
                <p className="my-4">
                "Navigating through the VR environments is intuitive, and the AR elements bring educational content to life in an exciting way."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Maria</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Student at EMSI</div>
                </div>
              </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                <p className="my-4">
                "The expert-led courses are incredibly valuable. The interactive features and VR simulations significantly enhance the learning process 🤯.""
                </p>
                <p className="my-4">
                  Everything is so well structured and simple to use .
                </p>
                <p className="my-4">
                "The user-friendly design makes it easy to navigate, and the engaging VR content ensures a rewarding educational experience."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jaafar</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer </div>
                </div>
              </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                <p className="my-4">
                  "This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.
                </p>
                <p className="my-4">
                "The platform blends advanced technology with expert knowledge perfectly. It offers a rich and engaging learning experience ,and the engaging VR content ensures a rewarding educational experience."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Ali</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Student at EMSI</div>
                </div>
              </figcaption>    
            </figure>
          </div>
          <div className="text-center">
            <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Show more...
            </a> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
