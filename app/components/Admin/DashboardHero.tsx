import { FC } from 'react';
import DashboardHeader from './DashboardHeader';

interface Props { }

const DashboardHero: FC<Props> = () => {
    return (
        <div className=''>
            <DashboardHeader />
        </div>
    );
};

export default DashboardHero;