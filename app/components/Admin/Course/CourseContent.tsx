'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsLink45Deg, BsPencil } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface TCourseContentData {
    videoUrl: string;
    title: string;
    description: string;
    videoSection: string;
    links: {
        title: string;
        url: string;
    }[];
    suggestion: string;
}

interface TCourseContent {
    active: number;
    setActive: (active: number) => void;
    courseContentData: TCourseContentData[];
    setCourseContentData: (courseContentData: any) => void;
    handleSubmit: any
}

export default function CourseContent({ active, setActive, courseContentData, setCourseContentData, handleSubmit: handleCourseSubmit }: TCourseContent) {
    const [isCollapsed, setIsCollapsed] = useState(Array(courseContentData?.length).fill(false));
    const [activeSection, setActiveSection] = useState(1);

    const handleSubmit = (e: any) => {
        e.preventDefault();

    }

    const handleUpdateCourseData = (index: number) => {
        if (index > 0) {
            const updatedCourseData = [...courseContentData]
            updatedCourseData.splice(index, 1);
            setCourseContentData(updatedCourseData);
        }
    }

    const handleCollapseToggle = (index: number) => {
        const updatedCollapsed = [...isCollapsed]
        updatedCollapsed[index] = !updatedCollapsed[index]
        setIsCollapsed(updatedCollapsed);
    }
    const handleRemoveLink = (index: number, linkIndex: number) => {
        const updatedCourseData = [...courseContentData]
        updatedCourseData[index].links.splice(linkIndex, 1);
        setCourseContentData(updatedCourseData);
    }

    const handleAddLink = (index: number) => {
        const updatedCourseData = [...courseContentData]
        updatedCourseData[index].links.push({ title: "", url: "" });
        setCourseContentData(updatedCourseData);
    }

    const newContentHandler = (item: TCourseContentData) => {
        if (item.title === "" || item.description === "" || item.videoUrl === "" || item.links[0].title === "" || item.links[0].url === "") {
            toast.error("Please fill the all fields first!")
        } else {

            let newVideoSection = "";
            if (courseContentData.length > 0) {
                const lastVideoSection = courseContentData[courseContentData.length - 1].videoSection;
                if (lastVideoSection) {
                    newVideoSection = lastVideoSection
                }
            }
            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoSection: newVideoSection,
                links: [
                    {
                        title: "",
                        url: ""
                    }
                ]
            }
            setCourseContentData([...courseContentData, newContent])
        }
    }

    const addNewSection = () => {
        if (
            courseContentData[courseContentData.length - 1].title === "" ||
            courseContentData[courseContentData.length - 1].description === "" ||
            courseContentData[courseContentData.length - 1].videoUrl === "" ||
            courseContentData[courseContentData.length - 1].links[0].title === "" ||
            courseContentData[courseContentData.length - 1].links[0].url === ""
        ) {
            toast.error("Please fill the all fields first!")
        }
    }

    const prevButton = () => {
        setActive(active - 1)
    }

    const nextButton = () => {
        if (benefits[benefits.length - 1]?.title !== '' && prerequisites[prerequisites.length - 1]?.title !== '') {
            setActive(active + 1)
        } else {
            toast.error("Please fill the fields for go to next!")
        }
    }

    return (
        <div className='w-[80%] mx-auto mt-24 p-3 dark:text-white text-black'>
            <form onSubmit={handleSubmit}>
                {
                    courseContentData?.map((item: TCourseContentData, index: number) => {
                        const showSectionInput = index === 0 || item.videoSection !== courseContentData[index - 1].videoSection;
                        return (
                            <div key={index} className={`w-full bg-[#cdc8c817] p-4 ${showSectionInput ? "mt-10" : "mt-0"}`}>
                                {
                                    showSectionInput && (
                                        <div className='flex items-center w-full'>
                                            <input
                                                type="text"
                                                id='name'
                                                required
                                                className={`text-xl font-medium font-poppins cursor-pointer bg-transparent outline-none ${item?.videoSection === "Untitled Section" ? "w-44" : "w-full"}`}
                                                value={item?.videoSection}
                                                onChange={(e: any) => {
                                                    const updatedCourseData = [...courseContentData]
                                                    updatedCourseData[index].videoSection = e.target.value
                                                    setCourseContentData(updatedCourseData);
                                                }}
                                                placeholder="Untitled Section"
                                            />
                                            <BsPencil className="cursor-pointer ml-4" />
                                        </div>
                                    )
                                }
                                <div className='w-full flex justify-between items-center'>
                                    {
                                        isCollapsed[index] && item?.title && <p className="font-poppins">{index + 1}. {item.title}</p>
                                    }
                                    {/* arrow button for collapsed video content  */}
                                    <div className='flex items-center'>
                                        <AiOutlineDelete
                                            className={`text-xl mr-2 ${index > 0 ? "cursor-pointer" : "cursor-no-drop"}`}
                                            onClick={() => handleUpdateCourseData(index)}
                                        />
                                        <MdOutlineKeyboardArrowDown
                                            className={`text-3xl mr-2 cursor-pointer ${isCollapsed[index] ? "rotate-0" : "rotate-180"}`}
                                            onClick={() => handleCollapseToggle(index)}
                                        />
                                    </div>
                                </div>
                                {
                                    !isCollapsed[index] && (<div className='my-3'>
                                        <div className='flex flex-col gap-0.5'>
                                            <label htmlFor="title" className='text-lg font-medium'>Video Title</label>
                                            <input
                                                type="text"
                                                id='title'
                                                required
                                                className='px-4 py-1 border rounded-sm bg-transparent'
                                                value={item?.title}
                                                onChange={(e: any) => {
                                                    const updatedCourseData = [...courseContentData]
                                                    updatedCourseData[index].title = e.target.value
                                                    setCourseContentData(updatedCourseData);
                                                }}
                                                placeholder="project plan..."
                                            />
                                        </div>

                                        <div className='flex flex-col gap-0.5'>
                                            <label htmlFor="videoUrl" className='text-lg font-medium'>Video Url</label>
                                            <input
                                                type="text"
                                                id='videoUrl'
                                                required
                                                className='px-4 py-1 border rounded-sm bg-transparent'
                                                value={item?.videoUrl}
                                                onChange={(e: any) => {
                                                    const updatedCourseData = [...courseContentData]
                                                    updatedCourseData[index].videoUrl = e.target.value
                                                    setCourseContentData(updatedCourseData);
                                                }}
                                                placeholder="videoUrl..."
                                            />
                                        </div>

                                        <div className='flex flex-col gap-0.5'>
                                            <label htmlFor="description" className='text-lg font-medium'>Video Description</label>
                                            <textarea
                                                className='px-4 py-1 border rounded-sm bg-transparent'
                                                required
                                                cols={30}
                                                rows={8}
                                                value={item?.description}
                                                onChange={(e: any) => {
                                                    const updatedCourseData = [...courseContentData]
                                                    updatedCourseData[index].description = e.target.value
                                                    setCourseContentData(updatedCourseData);
                                                }}
                                                id='description'
                                                placeholder='Write something amazing...'
                                            />
                                        </div>
                                        {
                                            item?.links.map((link: any, linkIndex: number) => (
                                                <div key={linkIndex} className='mb-3 space-y-3'>
                                                    <div className='w-full flex items-center justify-between'>
                                                        <label htmlFor="link" className='text-lg font-medium'>Link {linkIndex + 1}</label>
                                                        <AiOutlineDelete
                                                            className={`text-lg ${linkIndex === 0 ? "cursor-no-drop" : "cursor-pointer"}`}
                                                            onClick={() => linkIndex === 0 ? null : handleRemoveLink(index, linkIndex)}
                                                        />
                                                    </div>
                                                    <div className="w-full">
                                                        <input
                                                            type="text"
                                                            required
                                                            className='px-4 py-1 w-full border rounded-sm bg-transparent'
                                                            value={link?.title}
                                                            onChange={(e: any) => {
                                                                const updatedCourseData = [...courseContentData]
                                                                updatedCourseData[index].links[linkIndex].title = e.target.value
                                                                setCourseContentData(updatedCourseData);
                                                            }}
                                                            placeholder="Source code ... (link title)"
                                                        />
                                                    </div>
                                                    <div className='w-full'>

                                                        <input
                                                            type="text"
                                                            required
                                                            className='px-4 py-1 w-full border rounded-sm bg-transparent'
                                                            value={link?.url}
                                                            onChange={(e: any) => {
                                                                const updatedCourseData = [...courseContentData]
                                                                updatedCourseData[index].links[linkIndex].url = e.target.value
                                                                setCourseContentData(updatedCourseData);
                                                            }}
                                                            placeholder="Source code ... (link URL)"
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {/* Add link button here  */}
                                        <div className='mb-4'>
                                            <p className="flex items-center text-lg cursor-pointer"
                                                onClick={() => handleAddLink(index)}
                                            ><BsLink45Deg className="mr-2" /> Add Link</p>
                                        </div>
                                    </div>
                                    )
                                }
                                {/* Add new Content  */}
                                {
                                    index === courseContentData.length - 1 && (
                                        <div className='mb-4'>
                                            <p className="flex items-center text-lg cursor-pointer"
                                                onClick={(e: any) => newContentHandler(item)}
                                            ><AiOutlinePlusCircle className="mr-2" /> Add New Content</p>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
                <div className='mb-4'>
                    <p className="flex items-center text-lg cursor-pointer"
                        onClick={(e: any) => addNewSection()}
                    ><AiOutlinePlusCircle className="mr-2" /> Add New Section</p>
                </div>
            </form>
            {/* previous button and next button here  */}
            <div className='w-full flex items-center justify-between'>
                <div className='bg-btnColor text-white rounded cursor-pointer px-4 py-1 text-lg font-medium'
                    onClick={() => prevButton()}>
                    previous
                </div>
                <div className='bg-btnColor text-white rounded cursor-pointer px-4 py-1 text-lg font-medium'
                    onClick={() => nextButton()}>
                    Next
                </div>
            </div>
        </div>
    );
};
