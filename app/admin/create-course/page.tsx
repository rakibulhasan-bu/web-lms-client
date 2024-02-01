/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import CourseContent from '@/app/components/Admin/Course/CourseContent';
import CourseData from '@/app/components/Admin/Course/CourseData';
import CourseInformation from '@/app/components/Admin/Course/CourseInformation';
import CourseOptions from '@/app/components/Admin/Course/CourseOptions';
import { useState } from 'react';

const createCourse = () => {
    const [active, setActive] = useState(2);
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: ""
    });
    const [benefits, setBenefits] = useState([{ title: "" }]);
    const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
    const [courseContentData, setCourseContentData] = useState([{
        videoUrl: "",
        title: "",
        description: "",
        videoSection: "Untitled section",
        links: [
            {
                title: "",
                url: ""
            }
        ],
        suggestion: "",
    }]);
    const [courseData, setCourseData] = useState({});
    const handleSubmit = async () => {

    }
    return (
        <div className='w-full flex min-h-screen'>
            <div className='w-[80%]'>
                {
                    active === 0 && (
                        <CourseInformation
                            active={active}
                            setActive={setActive}
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                        />
                    )
                }
                {
                    active === 1 && (
                        <CourseData
                            active={active}
                            setActive={setActive}
                            benefits={benefits}
                            setBenefits={setBenefits}
                            prerequisites={prerequisites}
                            setPrerequisites={setPrerequisites}
                        />
                    )
                }
                {
                    active === 2 && (
                        <CourseContent
                            active={active}
                            setActive={setActive}
                            courseContentData={courseContentData}
                            setCourseContentData={setCourseContentData}
                            handleSubmit={handleSubmit}
                        />
                    )
                }
            </div>

            <div className='w-[20%] mt-24 min-h-screen fixed -z-10 top-16 right-0 '>
                <CourseOptions active={active} setActive={setActive} />
            </div>
        </div>
    );
};

export default createCourse;