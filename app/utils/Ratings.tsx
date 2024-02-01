import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default function Ratings({ rating }: { rating: number }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <AiFillStar
                    key={i}
                    className="mr-2 cursor-pointer text-[#f6b100] text-xl"
                />
            )
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(
                <BsStarHalf
                    key={i}
                    className="mr-2 cursor-pointer text-[#f6b100] text-lg"
                />
            )
        } else {
            stars.push(
                <AiOutlineStar
                    key={i}
                    className="mr-2 cursor-pointer text-[#f6b100] text-xl"
                />
            )
        }
    }
    return (
        <div className='flex items-center mt-1 ml-2 lg:ml-0'>
            {stars}
        </div>
    );
};
