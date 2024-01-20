'use client'
import { FC } from 'react';
import DashboardHero from '../components/Admin/DashboardHero';
import AdminProtected from '../hooks/useAdminProtected';

interface Props { }

const AdminPage: FC<Props> = () => {
    return (
        <AdminProtected>
            <DashboardHero />
        </AdminProtected>
    );
};

export default AdminPage;