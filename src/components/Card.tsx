import Link from 'next/link'
import React from 'react'
import courseData from "../data/music_courses.json"
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { BackgroundGradient } from './ui/background-gradient';
import { Button } from './ui/moving-border';

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  isFeatured: boolean,
  instructor: string,
}

function Card() {
  const featureCourse = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
    <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
    </div>
      <div className='mt-10 mx-8'>
        <div className='grid grid-col-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-center'>
          {featureCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
      


        
                <CardContainer className="flex flex-col rounded-[22px]  dark:bg-red-100 overflow-hidden h-auto w-auto max-w-auto">
                  <CardBody className=" bg-gray-950 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {course.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {course.description}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Instructor: {course.instructor}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Price: ${course.price}
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={`/courses/${course.slug}`}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        View Course →
                      </CardItem>
                    
                    </div>
                  </CardBody>
                </CardContainer>
             
            
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30 text-center">
        <Link href={"/courses"}>
          <p className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Courses</p>
        </Link>
      </div>
    </div>
  )
}

export default Card
