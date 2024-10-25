import React from 'react';
import ProfileImage from '../component/ProfileImage';
import StudentInfo from '../component/StudentInfo';
import EventsComponent from '../component/EventsComponent';
import ErrorBoundary from '../error/ErrorBoundary';
import Footer from '../component/Footer';

const StudentDashboard = ({  }) => {
  return (
    //add error boundary
    <>
      <div className="min-h-screen  bg-sky-400 flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center w-full max-w-4xl bg-white p-6 m-5 rounded-lg shadow-lg">
          {/* Welcome message */}
          <h1 className="text-2xl font-bold text-center animate-fadeIn mb-4">
            Welcome,
            <span className="block font-serif text-xl">Priscillia</span>
          </h1>

          {/* Profile Card */}
          <div className="flex justify-between items-center">
            {/* Left Side - Profile and Info */}
            <div className="w-1/2 pr-4">
              <ProfileImage />
              <StudentInfo /* studentData={studentData} */ />
            </div>

            {/* Midline Separator */}
            <div className="border-l-2 border-gray-300 mx-6"></div>

            {/* Right Side - Events, Exams */}
            <div className="w-1/2 pl-4">
              <h3 className="text-lg font-semibold mb-2">Upcoming Events & Exams</h3>
              <EventsComponent />
            </div>
          </div>
        </div>
        {/*Footer*/}
      </div>
    </>
  );
};

export default StudentDashboard;
