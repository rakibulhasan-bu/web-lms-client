import CoursePlayer from "./CoursePlayer";

interface TCoursePreview {
    active: number;
    setActive: (active: number) => void;
    courseData: any;
    handleCourseCreate: any
}

export default function CoursePreview({ active, courseData, handleCourseCreate, setActive }: TCoursePreview) {
    return (
        <div className='w-[90%] mx-auto py-5'>
            <div className='w-full relative'>
                <div className='w-full mt-10'>
                    <CoursePlayer />
                </div>
            </div>
        </div>
    );
};
