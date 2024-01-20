'use client'
import { FC, useState } from 'react';

interface Props {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    active: number;
    setActive: (active: number) => void;
}

const CourseInformation: FC<Props> = ({ active, setActive, courseInfo, setCourseInfo }) => {
    const [dragging, setDragging] = useState(0);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setActive(active + 1)
    }
    return (
        <div className='w-[80%] mx-auto mt-24'>
            <form onSubmit={handleSubmit} className={``}>
                <div className=''>
                    <label htmlFor="name">Course Name</label>
                    <input type="text" required value={courseInfo.name} onChange={(e: any) => setCourseInfo({ ...courseInfo, name: e.target.value })} id='name' placeholder='LMS Course' className={``} />
                </div>
            </form>
        </div>
    );
};

export default CourseInformation;