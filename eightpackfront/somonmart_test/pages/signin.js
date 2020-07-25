import Layout from '../components/Layout';
import Head from 'next/head';
import SigninComponent from '../components/auth/SigninComponent';



export default function SignIn() {
  
  return (
    <div>
     <Head>
        <title>Sign In</title>
      </Head>
    <Layout> 
      <SigninComponent />
    </Layout>
    </div>
  )
}
