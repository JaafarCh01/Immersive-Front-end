import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const UserSettings = () => {
  return (
    <div className="mx-10 my-5">
      <h1 className="text-3xl font-bold">User Settings</h1>
      <p className="text-gray-500 pb-5">Customize your immersive learning experience.</p>
      
      {/* Tabs Section */}
      <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4" id="tabs-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a href="#tabs-home" className="nav-link block font-medium text-xm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a href="#tabs-profile" className="nav-link block font-medium text-xm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">
            Immersive Preferences
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a href="#tabs-messages" className="nav-link block font-medium text-xm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">
            Security
          </a>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="tabs-tabContent">
        {/* Profile Tab */}
        <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-left md:items-start w-full px-2 py-5">
              <h1 className="text-1xl text-gray-300 md:flex mb-5">PROFILE SETTINGS</h1>
              
              {/* Profile Picture */}
              <div className="flex items-center">
                <div className="flex">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-full w-32 mr-10 mb-10" alt="Avatar" />
                </div>
                <div className="flex flex-col justify-items-start">
                  <h1 className="text-gray-700">Add a profile picture</h1>
                  <p className="py-2 text-sm font-medium text-gray-300">Upload a square image (1:1 aspect ratio) that represents your learning identity.</p>
                  <a href="#!" className="py-3 text-xl text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4">
                    <FontAwesomeIcon icon={faArrowAltCircleDown} className="pr-2" />
                    Upload
                  </a>
                </div>
              </div>

              {/* Profile Inputs */}
              <label htmlFor="input" className="py-2 block mb-2 text-sm font-medium text-gray-700">Your Display Name</label>
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Enter your display name" maxLength="30" />
              <p className="py-2 mb-10 text-gray-500">This will be visible to other learners on the platform.</p>
              
              <label htmlFor="message" className="py-2 block mb-2 text-sm font-medium text-gray-700">About You</label>
              <input type="text" id="large-input" className="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Tell us about your learning interests..." maxLength="500" />
              <p className="py-2 mb-10 text-gray-500">This will be displayed on your profile for others to see.</p>
              
              {/* Update Profile Button */}
              <button type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* Immersive Preferences Tab */}
        <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-left md:items-start w-full px-2 py-8 border-r border-gray-200">
              <h1 className="py-3 text-2xl md:text-3xl font-bold">Immersive Preferences</h1>
              <p className="text-sm text-gray-500">Adjust your preferences for VR and AR experiences on the platform.</p>

              {/* Notification Options */}
              <div className="grid md:grid-cols-2 border-t border-b border-gray-200">
                <div className="flex flex-col justify-left md:items-start w-full py-5">
                  <p className="text-md">VR/AR Notification Settings</p>
                  <p className="pt-2 text-sm text-gray-400">Delivery By: Email</p>
                </div>
                <div className="justify-right md:items-start w-full px-10 py-6 scale-125">
                  <FontAwesomeIcon icon={faXmarkCircle} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 py-8">
                <div className="flex flex-col justify-left md:items-start w-full">
                  <select id="vr-preferences" className="bg-gray-50 border border-gray-300 text-sm rounded-lg pr-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Select VR Content Preferences</option>
                    <option value="architecture">Architecture</option>
                    <option value="engineering">Engineering</option>
                    <option value="medical">Medical Training</option>
                  </select>
                </div>
                <div className="flex flex-col justify-right md:items-start w-full pl-4">
                  <select id="ar-preferences" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Select AR Interaction Preferences</option>
                    <option value="basic">Basic</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
              <p className="text-gray-500">Customize your immersive content delivery preferences.</p>
              <button type="button" className="my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                Save Preferences
              </button>
            </div>

            <div className="flex flex-col justify-left md:items-start w-full px-2 py-8">
              <h1 className="py-3 text-2xl md:text-3xl font-bold">Delivery Methods</h1>
              <p className="text-sm text-gray-500">Manage how you receive your immersive learning content.</p>
              <div className="grid md:grid-cols-2 border-t border-b border-gray-200">
                <div className="flex flex-col justify-left md:items-start w-full py-5">
                  <p className="text-md">Content Delivery Method</p>
                  <p className="pt-2 text-sm text-gray-400">Method: VR Headset</p>
                </div>
                <div className="justify-right md:items-start w-full px-10 py-6 scale-125">
                  <FontAwesomeIcon icon={faXmarkCircle} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 py-8">
                <div className="flex flex-col justify-left md:items-start w-full">
                  <select id="delivery-method" className="bg-gray-50 border border-gray-300 text-sm rounded-lg pr-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Select Content Delivery Method</option>
                    <option value="vr">VR Headset</option>
                    <option value="ar">AR Glasses</option>
                    <option value="desktop">Desktop Simulation</option>
                  </select>
                </div>
              </div>
              <p className="text-gray-500">Choose your preferred method for receiving immersive content.</p>
              <button type="button" className="my-4 inline-block px-6 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                Save Delivery Method
              </button>
            </div>
          </div>
        </div>

        {/* Security Tab */}
        <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-messages-tab">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-left md:items-start w-full px-2 py-5">
              <h1 className="text-1xl text-gray-300 md:flex mb-5">SECURITY SETTINGS</h1>
              
              {/* Password */}
              <label htmlFor="password" className="py-2 block mb-2 text-sm font-medium text-gray-700">Change Password</label>
              <input type="password" id="password" className="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter new password" maxLength="50" />
              <p className="py-2 mb-10 text-gray-500">Use at least 8 characters, including uppercase, lowercase, and numbers.</p>
              
              <label htmlFor="confirm-password" className="py-2 block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" id="confirm-password" className="form-control font-normal block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-solid border-gray-300 bg-clip-padding sm:text-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Re-enter new password" maxLength="50" />
              <p className="py-2 mb-10 text-gray-500">Ensure passwords match before saving.</p>
              
              {/* Update Password Button */}
              <button type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
