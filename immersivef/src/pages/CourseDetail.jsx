// src/pages/CourseDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Sample data for course details
const courseDetails = {
  1: {
    name: "PC Architecture",
    description: "Explorez la conception et l'architecture des ordinateurs avec des visualisations AR.",
    duration: "4 weeks",
    instructor: "Dr. Alice Smith",
    arUrl: "https://example.com/ar/pc-architecture",
    vrUrl: "https://example.com/vr/pc-architecture",
    enrollmentUrl: "https://example.com/enroll/pc-architecture",
  },
  2: {
    name: "Car Engines",
    description: "Apprenez le fonctionnement des moteurs de voitures avec des explications VR.",
    duration: "6 weeks",
    instructor: "Mr. John Doe",
    arUrl: "https://example.com/ar/car-engines",
    vrUrl: "https://example.com/vr/car-engines",
    enrollmentUrl: "https://example.com/enroll/car-engines",
  },
  3: {
    name: "Human Anatomy",
    description: "Étudiez l'anatomie humaine en VR avec des modèles 3D détaillés.",
    duration: "8 weeks",
    instructor: "Dr. Emma Brown",
    arUrl: "https://example.com/ar/human-anatomy",
    vrUrl: "https://example.com/vr/human-anatomy",
    enrollmentUrl: "https://example.com/enroll/human-anatomy",
  },
  4: {
    name: "Building and Construction",
    description: "Apprenez les fondamentaux de la construction avec des visualisations AR.",
    duration: "5 weeks",
    instructor: "Ms. Sarah Lee",
    arUrl: "https://example.com/ar/building-construction",
    vrUrl: "https://example.com/vr/building-construction",
    enrollmentUrl: "https://example.com/enroll/building-construction",
  },
  5: {
    name: "Exploring Solar Systems",
    description: "Voyagez à travers l'espace et explorez notre système solaire en VR.",
    duration: "7 weeks",
    instructor: "Dr. Michael Green",
    arUrl: "https://example.com/ar/solar-systems",
    vrUrl: "https://example.com/vr/solar-systems",
    enrollmentUrl: "https://example.com/enroll/solar-systems",
  },
  6: {
    name: "Robotics Mechanics",
    description: "Découvrez la mécanique des robots avec la réalité augmentée.",
    duration: "6 weeks",
    instructor: "Dr. Laura Wilson",
    arUrl: "https://example.com/ar/robotics-mechanics",
    vrUrl: "https://example.com/vr/robotics-mechanics",
    enrollmentUrl: "https://example.com/enroll/robotics-mechanics",
  },
  7: {
    name: "Physics",
    description: "Réalisez des expériences de physique en VR et comprenez les principes fondamentaux.",
    duration: "8 weeks",
    instructor: "Dr. James White",
    arUrl: "https://example.com/ar/physics",
    vrUrl: "https://example.com/vr/physics",
    enrollmentUrl: "https://example.com/enroll/physics",
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
        <p className="mb-4">{course.description}</p>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Détails du cours</h2>
          <p><strong>Durée :</strong> {course.duration}</p>
          <p><strong>Instructeur :</strong> {course.instructor}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Visualiser le contenu</h2>
          {course.arUrl && (
            <a
              href={course.arUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visualiser en AR
            </a>
          )}
          {course.vrUrl && (
            <a
              href={course.vrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visualiser en VR
            </a>
          )}
        </div>
        <div className="mt-4">
          <a
            href={course.enrollmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-medium bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
