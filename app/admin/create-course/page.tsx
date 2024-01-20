/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CourseInformation from '@/app/components/Admin/Course/CourseInformation';
import CourseOptions from '@/app/components/Admin/Course/CourseOptions';
import { useState } from 'react';

const createCourse = () => {
    const [active, setActive] = useState(0);
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
    const [benefit, setBenefit] = useState([{ title: "" }]);
    const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
    const [courseContentData, setCourseContentData] = useState([{
        videoUrl: "",
        title: "",
        description: "",
        videSection: "Untitled section",
        links: [
            {
                title: "",
                url: ""
            }
        ],
        suggestion: "",
    }]);
    const [courseData, setCourseData] = useState({});

    return (
        <div className='w-full flex min-h-screen'>
            <div className='w-[80%]'>
                {
                    active === 0 && (
                        <CourseInformation active={active} setActive={setActive} courseInfo={courseInfo} setCourseInfo={setCourseInfo} />
                    )
                }
            </div>

            <div className='w-[20%] mt-24 h-screen fixed -z-10 top-16 right-0 '>
                <CourseOptions active={active} setActive={setActive} />
            </div>
        </div>
    );
};

export default createCourse;