interface TCourseContent {
    active: number;
    setActive: (active: number) => void;
    courseContentData: any;
    setCourseContentData: (courseContentData: any) => void;
    handleSubmit: any
}

export default function CourseContent({ active, setActive, courseContentData, setCourseContentData }: TCourseContent) {
    return (
        <div className=''>
            CourseContent
        </div>
    );
};
