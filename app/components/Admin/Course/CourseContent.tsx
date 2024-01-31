'use client'

import { useState } from "react";

interface TCourseContent {
    active: number;
    setActive: (active: number) => void;
    courseContentData: any;
    setCourseContentData: (courseContentData: any) => void;
    handleSubmit: any
}

export default function CourseContent({ active, setActive, courseContentData, setCourseContentData, handleSubmit: handleCourseSubmit }: TCourseContent) {
    const [isCollapsed, setIsCollapsed] = useState(Array(courseContentData?.length).fill(false));
    const [activeSection, setActiveSection] = useState(1);

    const handleSubmit = (e: any) => {
        e.preventDefault();

    }
    return (
        <div className='w-[80%] mx-auto mt-24 p-3'>
            <form onSubmit={handleSubmit}>
                {
                    courseContentData?.map((item: any, index: number) => {
                        const showSectionInput = index === 0 || item.videoSection !== courseContentData[index - 1].videoSection;
                        return (
                            <div key={index} className={`w-full bg-[#cdc8c817] p-4 ${showSectionInput ? "mt-10" : "mt-0"}`}>
                                <div className=''>

                                </div>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
};
