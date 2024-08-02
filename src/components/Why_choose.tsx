"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";


const content = [
    {
      title: "Expert Instructors",
      description:
        "Learn from the best in the industry. Our instructors are experienced professionals and passionate educators dedicated to helping you achieve your musical goals. Whether you're a beginner or an advanced musician, our tailored lessons will guide you to success.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
          Expert Instructors
        </div>
      ),
    },
    {
      title: "Personalized Lessons",
      description:
        "Enjoy personalized one-on-one lessons tailored to your skill level and interests. Our instructors will create a customized learning plan just for you, ensuring you progress at your own pace and achieve your musical aspirations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
       Personalized Lessons
        </div>
      ),
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Our school boasts state-of-the-art facilities equipped with the latest instruments and technology. Practice and perform in a professional environment designed to inspire creativity and excellence in every student.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
          State-of-the-Art Facilities
        </div>
      ),
    },
    {
      title: "Performance Opportunities",
      description:
        "Showcase your talent with numerous performance opportunities throughout the year. From recitals to community events, we provide a platform for you to gain confidence and experience performing in front of an audience.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Performance Opportunities
        </div>
      ),
    },
    {
      title: "Music Theory and Composition",
      description:
        "Deepen your understanding of music with our comprehensive theory and composition classes. Learn the fundamentals of music theory, explore different styles of composition, and develop your own unique musical voice.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Music Theory and Composition
        </div>
      ),
    },
    {
      title: "Community and Collaboration",
      description:
        "Join a vibrant community of musicians. Collaborate with fellow students in ensemble groups, workshops, and jam sessions. Our supportive environment fosters creativity, friendship, and a lifelong love of music.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Community and Collaboration
        </div>
      ),
    },
  ];
  
export function ScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
