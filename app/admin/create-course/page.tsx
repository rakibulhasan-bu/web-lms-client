/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import CourseContent from '@/app/components/Admin/Course/CourseContent';
import CourseData from '@/app/components/Admin/Course/CourseData';
import CourseInformation from '@/app/components/Admin/Course/CourseInformation';
import CourseOptions from '@/app/components/Admin/Course/CourseOptions';
import CoursePreview from '@/app/components/Admin/Course/CoursePreview';
import { useCreateCourseMutation } from '@/redux/features/courses/coursesApi';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CreateCoursePage = () => {
    const [createCourse, { isLoading, error, isSuccess }] = useCreateCourseMutation()

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
        //formate benefit data
        const formattedBenefits = benefits.map(benefit => ({ title: benefit.title }));
        //formate prerequisite data
        const formattedPrerequisites = prerequisites.map(prerequisite => ({ title: prerequisite.title }));

        //formate course content array
        const formateCourseContentData = courseContentData.map(courseConData => ({
            videoUrl: courseConData.videoUrl,
            title: courseConData.title,
            description: courseConData.description,
            videoSection: courseConData.videoSection,
            links: courseConData.links.map(link => ({
                title: link.title,
                url: link.url
            })),
            suggestion: courseConData.suggestion,
        }));

        //prepare date object
        const data = {
            name: courseInfo.name,
            description: courseInfo.description,
            price: courseInfo.price,
            estimatedPrice: courseInfo.estimatedPrice,
            tags: courseInfo.tags,
            level: courseInfo.level,
            demoUrl: courseInfo.demoUrl,
            thumbnail: courseInfo.thumbnail,
            totalVideos: courseContentData.length,
            benefits: formattedBenefits,
            prerequisites: formattedPrerequisites,
            courseContent: formateCourseContentData
        }
        setCourseData(data)
    }

    const handleCourseCreate = async (e: any) => {
        const data = courseData;
        if (!isLoading) {
            await createCourse({ data })
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Course created Successfully")
            redirect("/admin/courses")
        }
        if (error) {
            if ("data" in error) {
                const errorMessage = error as any
                toast.error(errorMessage?.data?.message)
            }
        }
    }, [isSuccess, error, isLoading])

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
                {
                    active === 3 && (
                        <CoursePreview
                            active={active}
                            setActive={setActive}
                            courseData={courseData}
                            handleCourseCreate={handleCourseCreate}
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

export default CreateCoursePage;