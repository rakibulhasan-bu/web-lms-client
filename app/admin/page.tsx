'use client'
import { FC, useState } from 'react';
import Heading from '../utils/Heading';
import DashboardHero from '../components/Admin/DashboardHero';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminProtected from '../hooks/useAdminProtected';

interface Props { }

const AdminPage: FC<Props> = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <AdminProtected>
            <Heading
                title="web lms - Admin"
                description="web lms is a platform where students can learn important things"
                keywords="machine learning ,programming, MERN"
            />
            <div className='flex min-h-screen'>
                <div className={` ${isCollapsed ? "w-[5%] lg:w-[6%]" : "w-1/5 lg:w-[20%]"}`}>
                    <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                </div>
                <div className={` ${isCollapsed ? "w-4/5 lg:w-[94%]" : "w-4/5 lg:w-[80%]"}`}>
                    <DashboardHero />
                </div>
            </div>
        </AdminProtected>
    );
};

export default AdminPage;