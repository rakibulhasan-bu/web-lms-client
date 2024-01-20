'use client'
import { FC, useState } from 'react';

interface Props {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    active: number;
    setActive: (active: number) => void;
}

const CourseInformation: FC<Props> = ({ active, setActive, courseInfo, setCourseInfo }) => {
    const [dragging, setDragging] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setActive(active + 1)
    }

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result })
                }
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
    }

    const handleDragLeave = (e: any) => {
        e.preventDefault();
        setDragging(false);
    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCourseInfo({ ...courseInfo, thumbnail: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='w-[80%] mx-auto mt-24'>
            <form onSubmit={handleSubmit} className='space-y-2'>
                <div className='flex flex-col gap-0.5'>
                    <label htmlFor="name" className='text-lg font-medium'>Course Name</label>
                    <input className='px-4 py-1 border rounded-sm bg-transparent' type="text" required value={courseInfo.name} onChange={(e: any) => setCourseInfo({ ...courseInfo, name: e.target.value })} id='name' placeholder='MERN stack web development' />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <label htmlFor="description" className='text-lg font-medium'>Course Description</label>
                    <textarea
                        className='px-4 py-1 border rounded-sm bg-transparent'
                        required
                        cols={30}
                        rows={8}
                        value={courseInfo.description}
                        onChange={(e: any) => setCourseInfo({ ...courseInfo, description: e.target.value })}
                        id='description'
                        placeholder='Write something amazing...'
                    />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-0.5'>
                        <label htmlFor="price" className='text-lg font-medium'>Course price</label>
                        <input
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="number" required
                            value={courseInfo.price}
                            onChange={(e: any) => setCourseInfo({ ...courseInfo, price: e.target.value })}
                            id='price' placeholder='100' />
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <label htmlFor="estimated-price" className='text-lg font-medium'>Estimated price (optional)</label>
                        <input
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="text" required
                            value={courseInfo.estimatedPrice}
                            onChange={(e: any) => setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })}
                            id='estimated-price' placeholder='100' />
                    </div>
                </div>
                <div className='flex flex-col gap-0.5'>
                    <label htmlFor="tags"
                        className='text-lg font-medium'>Course Tags</label>
                    <input
                        className='px-4 py-1 border rounded-sm bg-transparent'
                        type="tags" required
                        value={courseInfo.tags}
                        onChange={(e: any) => setCourseInfo({ ...courseInfo, tags: e.target.value })}
                        id='tags' placeholder='MERN, Next JS' />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-0.5'>
                        <label htmlFor="level" className='text-lg font-medium'>Course level</label>
                        <input
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="text" required
                            value={courseInfo.level}
                            onChange={(e: any) => setCourseInfo({ ...courseInfo, level: e.target.value })}
                            id='level' placeholder='Primary / Intermediate / Advance' />
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <label htmlFor="demoUrl" className='text-lg font-medium'>Estimated price (optional)</label>
                        <input
                            className='px-4 py-1 border rounded-sm bg-transparent'
                            type="text" required
                            value={courseInfo.demoUrl}
                            onChange={(e: any) => setCourseInfo({ ...courseInfo, demoUrl: e.target.value })}
                            id='demoUrl' placeholder='https://example.image.com' />
                    </div>
                </div>
                <div className='w-full'>
                    <input type="file" name="file" id="file" className='hidden' accept='image/*' onChange={handleFileChange} />
                </div>
            </form>
        </div>
    );
};

export default CourseInformation;