import { Key } from "react";
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
        const updatedBenefits = { ...benefits }
        updatedBenefits[index].title = title;
        setBenefits(updatedBenefits);
    }

    const handleAddBenefit = () => {
        setBenefits([...benefits, { title: "" }])
    }

    return (
        <div className='w-[80%] mx-auto mt-24 mb-8'>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="benefits" className='text-lg font-medium'>What are the benefits for students in the course?</label>
                {
                    benefits.map((benefit: { title: string }, index: number) => (
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
                        className='cursor-pointer text-4xl'
                        onClick={handleAddBenefit}
                    />
                </div>
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor="prerequisite" className='text-lg font-medium'>What are the benefits for students in the course?</label>
                {
                    prerequisites.map((prerequisite: { title: string }, index: number) => (
                        <input
                            key={index}
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="text"
                            required
                            value={prerequisite.title}
                            onChange={(e: any) => handleBenefitChange(index, e.target.value)}
                            id='prerequisite'
                            placeholder='you will be able to build a lms platforms..'
                        />
                    ))
                }
                <div className='flex items-center justify-center'>
                    <MdAddCircle
                        className='cursor-pointer text-4xl'
                        onClick={handleAddBenefit}
                    />
                </div>
            </div>
        </div>
    );
};
