"use client"
import { ThemeSwitcher } from '@/app/utils/ThemeSwitcher';
import { FC, useState } from 'react';

interface Props { }

const DashboardHeader: FC<Props> = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex items-center justify-end w-full p-6 fixed top-5 right-0'>
            <ThemeSwitcher />
            <div className='relative cursor-pointer m-2' onClick={() => setOpen(prev => !prev)}>

            </div>
        </div>
    );
};

export default DashboardHeader;