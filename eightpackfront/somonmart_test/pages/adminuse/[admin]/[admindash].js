import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Head from 'next/head';
import Link from 'next/link';
import AdminDashboard from '../../../components/UserDashboard/AdminDashboard'
import AddCategory from '../../../components/admin/AddCategory';
import AddSubCategory from '../../../components/admin/AddSubcategory'
import AddProduct from '../../../components/admin/AddProduct'

const admindashboard = () => {
    return (
        <div>
            <Head>
                  <title>AdminDashboard</title>
            </Head>
      <Layout>
            <Admin>
                <AdminDashboard />
                <AddSubCategory />
                <AddCategory />
                <AddProduct />
            </Admin>
        </Layout>
      </div>
        
    );
};


export default admindashboard;