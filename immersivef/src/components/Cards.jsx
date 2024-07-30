import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Cards = () => {
  return (
    <div className="flex justify-around flex-wrap gap-4  w-full place-content-center bg-gradient-to-br   px-4 py-12 text-slate-900" style={{ backgroundColor: '#0F172A' }}>
      <TiltCard title="Immersive VR" 
      text="Experience learning like never before with our cutting-edge VR technology."
      logo="https://img.icons8.com/?size=100&id=AqXn4PdN9DMB&format=png&color=000000"/>
      <TiltCard title="Interactive AR" 
      text="Augmented reality brings educational content to life in your environment."
      logo="https://img.icons8.com/?size=100&id=l2fg4tiIwlpA&format=png&color=000000"/>
    <TiltCard title="Expert Instructors" 
    text="Learn from industry experts and top educators around the world."
    logo="https://img.icons8.com/?size=100&id=58861&format=png&color=000000"/>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = (props) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-80 w-80 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        
        <img src={props.logo}
          alt={`${props.title} logo`}
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto w-20 h-20 mb-4" />
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold pb-4"
        >
          {props.title}
        </div>
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-base text-gray-700"
        >
          {props.text}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;