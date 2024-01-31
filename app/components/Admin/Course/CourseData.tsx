'use client'

import toast from "react-hot-toast";
import { MdAddCircle } from "react-icons/md";

interface TCourseData {
    benefits: { title: string }[];
    setBenefits: (benefits: { title: string }[]) => void;
    prerequisites: { title: string }[];
    setPrerequisites: (prerequisites: { title: string }[]) => void;
    active: number;
    setActive: (active: number) => void;
}

export default function CourseData({ active, benefits, prerequisites, setActive, setBenefits, setPrerequisites }: TCourseData) {

    const handleBenefitChange = (index: number, title: any) => {
        const updatedBenefits = [...benefits]
        updatedBenefits[index].title = title;
        setBenefits(updatedBenefits);
    }

    const handleAddBenefit = () => {
        setBenefits([...benefits, { title: "" }])
    }

    const handlePrerequisiteChange = (index: number, title: any) => {
        const updatedPrerequisite = [...prerequisites]
        updatedPrerequisite[index].title = title;
        setPrerequisites(updatedPrerequisite);
    }

    const handleAddPrerequisite = () => {
        setPrerequisites([...prerequisites, { title: "" }])
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
        <div className='w-[80%] mx-auto mt-24 mb-8'>
            {/* this is the benefit div  */}
            <div className='flex flex-col space-y-2'>
                <label htmlFor="benefits" className='text-lg font-medium'>What are the benefits for students in the course?</label>
                {
                    benefits?.map((benefit: { title: string }, index: number) => (
                        <input
                            key={index}
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="text"
                            required
                            value={benefit.title}
                            onChange={(e: any) => handleBenefitChange(index, e.target.value)}
                            id='benefits'
                            placeholder='you will be able to build a lms platforms..'
                        />
                    ))
                }
                <div className='flex items-center justify-center'>
                    <MdAddCircle
                        className='cursor-pointer text-3xl'
                        onClick={handleAddBenefit}
                    />
                </div>
            </div>
            {/* this is the prerequisite div  */}
            <div className='flex flex-col space-y-2'>
                <label htmlFor="prerequisite" className='text-lg font-medium'>What are the prerequisites for start the course?</label>
                {
                    prerequisites?.map((prerequisite: { title: string }, index: number) => (
                        <input
                            key={index}
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="text"
                            required
                            value={prerequisite.title}
                            onChange={(e: any) => handlePrerequisiteChange(index, e.target.value)}
                            id='prerequisite'
                            placeholder='What are the prerequisites for..'
                        />
                    ))
                }
                <div className='flex items-center justify-center'>
                    <MdAddCircle
                        className='cursor-pointer text-3xl'
                        onClick={handleAddPrerequisite}
                    />
                </div>
            </div>
            {/* this is prev and next button  */}
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
