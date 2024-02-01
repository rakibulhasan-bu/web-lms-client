interface TCoursePreview {
    active: number;
    setActive: (active: number) => void;
    courseData: any;
    handleCourseCreate: any
}

export default function CoursePreview({ active, courseData, handleCourseCreate, setActive }: TCoursePreview) {
    return (
        <div className=''>
            coursePreview
        </div>
    );
};
