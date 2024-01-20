import { Dispatch } from '@reduxjs/toolkit';
import { FC, SetStateAction } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

interface Props {
    active: number;
    setActive: (active: number) => void;
}

const CourseOptions: FC<Props> = ({ active, setActive }) => {
    const options = [
        'Course Information',
        'Course Options',
        'Course Content',
        'Course Preview',
    ]
    return (
        <div className=''>
            {
                options.map((option: string, index: number) => (
                    <div key={index} className='w-full flex py-5 '>
                        <div className={`w-[35px] h-[35px] rounded-full flex items-center justify-center relative ${active + 1 > index ? "bg-blue-500" : "bg-[#384766]"}`}>
                            <IoMdCheckmark className="text-2xl" />
                            {
                                index !== options.length - 1 && (
                                    <div className={`absolute bottom-[-100%] w-1 h-[30px] ${active + 1 > index ? "bg-blue-500" : "bg-[#384766]"}`} />
                                )
                            }
                        </div>
                        <h5 className={`pl-3 text-xl ${(active === index) && "dark:text-white text-black"}`}>{option}</h5>
                    </div>
                ))
            }
        </div>
    );
};

export default CourseOptions;