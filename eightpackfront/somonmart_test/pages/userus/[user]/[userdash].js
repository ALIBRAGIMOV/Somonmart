import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import Dashboard from '../../../components/UserDashboard/UserDashboard'
import Head from 'next/head';



const UserIndex = () => {
    return (
        <div>
        <Head>
           <title>Dashboard</title>
         </Head>
         <Layout>
            <Private>
                <h2>User Dashboard</h2>
                <Dashboard />
            </Private>
        </Layout>
       </div>
    );
};

export default UserIndex;