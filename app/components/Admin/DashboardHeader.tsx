"use client"
import { ThemeSwitcher } from '@/app/utils/ThemeSwitcher';
import { FC, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

interface Props { }

const DashboardHeader: FC<Props> = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex items-center justify-end w-full p-6 fixed top-5 right-0 dark:text-white text-black'>

            <ThemeSwitcher />
            <div className='relative cursor-pointer m-2' onClick={() => setOpen(prev => !prev)}>
                <IoMdNotificationsOutline className="text-2xl cursor-pointer " />
                <span className='absolute -top-2 -right-2 bg-secondary rounded-full w-5 h-5 text-xs flex items-center justify-center text-white'>3</span>
            </div>
            {
                open && (
                    <div className='w-[350px] h-[50dvh] shadow-xl absolute top-16 z-10 rounded bg-white dark:bg-bgDark'>
                        <h5 className='text-center text-xl font-poppins p-3'>Notifications</h5>
                        <div className='bg-[#00000013] dark:bg-bgSecondaryDark font-poppins border-b border-b-[#0000000f] dark:border-b-[#ffffff47]'>
                            <div className='w-full flex items-center justify-between p-2'>
                                <p>New Question received</p>
                                <p className='cursor-pointer'>Mark as read</p>
                            </div>
                            <p className='px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, voluptatibus.</p>
                            <p className='px-2'>5 days ago</p>
                        </div>
                        <div className='bg-[#00000013] dark:bg-bgSecondaryDark font-poppins border-b border-b-[#0000000f] dark:border-b-[#ffffff47]'>
                            <div className='w-full flex items-center justify-between p-2'>
                                <p>New Question received</p>
                                <p className='cursor-pointer'>Mark as read</p>
                            </div>
                            <p className='px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, voluptatibus.</p>
                            <p className='px-2'>5 days ago</p>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default DashboardHeader;