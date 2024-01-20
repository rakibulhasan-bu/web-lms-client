'use client'
import { FC, useState } from 'react';
import Heading from '../utils/Heading';
import AdminSidebar from '../components/Admin/AdminSidebar';
import DashboardHeader from '../components/Admin/DashboardHeader';

interface Props {
    children: React.ReactNode
}

const AdminLayout: FC<Props> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <>
            <Heading
                title="web lms - Admin"
                description="web lms is a platform where students can learn important things"
                keywords="machine learning ,programming, MERN"
            />
            <div className='flex min-h-screen'>
                <div className={` ${isCollapsed ? "w-[5%] lg:w-[6%]" : "w-1/5 lg:w-[20%]"}`}>
                    <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                </div>
                <div className={`${isCollapsed ? "w-4/5 lg:w-[94%]" : "w-4/5 lg:w-[80%]"}`}>
                    <DashboardHeader />
                    {children}
                </div>
            </div>
        </>
    );
};

export default AdminLayout;