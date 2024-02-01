import Ratings from "@/app/utils/Ratings";
import CoursePlayer from "../../../utils/CoursePlayer";
import { TCourseContentData } from "./CourseContent";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface TCourseData {
    name: string;
    description: string;
    price: string;
    estimatedPrice: string;
    tags: string;
    level: string;
    demoUrl: string;
    thumbnail: string;
    totalVideos: number;
    benefits: {
        title: string;
    }[];
    prerequisites: {
        title: string;
    }[];
    courseContent: TCourseContentData[];
}

interface TCoursePreview {
    active: number;
    setActive: (active: number) => void;
    courseData: any;
    handleCourseCreate: any
}

export default function CoursePreview({ active, courseData, handleCourseCreate, setActive }: TCoursePreview) {
    const discountPercentagePrice = ((courseData?.estimatedPrice - courseData?.price) / courseData?.estimatedPrice) * 100;
    const prevButton = () => {
        setActive(active - 1)
    }
    const createCourseHandler = () => {
        handleCourseCreate()
    }
    return (
        <div className='w-[90%] mx-auto py-5'>
            <div className='w-full relative'>
                {/* this is video player section  */}
                <div className='w-full mt-10'>
                    <CoursePlayer />
                </div>
                {/* this is section  */}
                <div className=''>
                    <div className='flex items-center'>
                        <h1 className="text-2xl pt-5">{courseData?.price === 0 ? "Free" : courseData?.price + "$"}</h1>
                        <p className="text-lg pt-2 pl-3 line-through opacity-80">{courseData?.estimatedPrice}$</p>
                        <h3 className="pl-5 pt-4 text-xl">{discountPercentagePrice.toFixed(0)}% Off</h3>
                    </div>
                    <button className='font-poppins bg-rose-600 cursor-not-allowed'>
                        Buy Now {courseData?.price}$
                    </button>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            placeholder="Discount code."
                            className='px-4 w-3/5 py-1 border rounded-sm bg-transparent'
                        />
                        <button className='font-poppins bg-blue-500 cursor-pointer'>
                            Apply
                        </button>
                    </div>
                    <li className="pb-1">Source code included.</li>
                    <li className="pb-1">Full lifetime access.</li>
                    <li className="pb-1">Certificate of Competition.</li>
                    <li className="pb-1 lg:pb-3">Premium support</li>
                </div>
                <div className=''>
                    <h1 className="text-2xl font-medium font-poppins">{courseData?.name}</h1>
                    <div className='flex items-center justify-between pt-3'>
                        <Ratings rating={0} />
                        <p>0 Reviews</p>
                    </div>
                    <h5>0 Students</h5>
                </div>
                <h1 className="text-2xl font-poppins font-medium">
                    What you will learn from this course?
                </h1>
                {
                    courseData?.benefits.map((item: any, index: number) => (
                        <div key={index} className='w-full flex lg:items-center py-2'>
                            <div className='mr-1 w-4'>
                                <IoCheckmarkDoneOutline className="text-3xl" />
                            </div>
                            <p className="pl-2">{item?.title}</p>
                        </div>
                    ))
                }
                <h1 className="text-2xl font-poppins font-medium">
                    What are the prerequisites for starting this course?
                </h1>
                {
                    courseData?.prerequisites.map((prerequisite: any, index: number) => (
                        <div key={index} className='w-full flex lg:items-center py-2'>
                            <div className='mr-1 w-4'>
                                <IoCheckmarkDoneOutline className="text-3xl" />
                            </div>
                            <p className="pl-2">{prerequisite?.title}</p>
                        </div>
                    ))
                }
                {/* course description  */}
                <div className=''>
                    <h1 className="text-2xl font-medium font-poppins">Course Details</h1>
                    <p className="text-lg mt-5 whitespace-pre-line w-full overflow-hidden">{courseData?.description}</p>
                </div>
            </div>

            {/* previous button and next button here  */}
            <div className='w-full flex items-center justify-between'>
                <div className='bg-btnColor text-white rounded cursor-pointer px-4 py-1 text-lg font-medium'
                    onClick={() => prevButton()}>
                    previous
                </div>
                <div className='bg-btnColor text-white rounded cursor-pointer px-4 py-1 text-lg font-medium'
                    onClick={() => createCourseHandler()}>
                    Create
                </div>
            </div>
        </div>
    );
};
