import Layout from '../components/Layout';
import Head from 'next/head';
import SignupComponent from '../components/auth/SignupComponent';



export default function Signup() {
  
  return (
    <div>
     <Head>
        <title>Sign Up</title>
      </Head>
    <Layout> 
      <SignupComponent />
    </Layout>
    </div>
  )
}
