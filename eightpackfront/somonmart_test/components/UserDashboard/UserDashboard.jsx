
import { signout, isAuth } from '../../actions/auth';
import Link from 'next/link';

const Dashboard = ({user}) => {
    const userLinks = () => {
        return (
            <div className="card">
                <ul>
                <Link href="/about"> 
                    <li >
                      <a className="linkProf">Обновить профиль</a> 
                    </li>
                    </Link>
                    <Link href="/about">
                    <li>
                        <a className="linkProf">Корзина</a>
                    </li>
                    </Link>
                </ul>
            </div>
        )
    }
    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                {isAuth() && isAuth().role === 0 && (
              <div>
               <ul>
                   <li>
                   <a>{`${isAuth().name}`}</a>
               
                   </li>
                   <li><a>{`${isAuth().email}`}</a></li>
               </ul>
                 
              </div>
               )}
               {isAuth() && isAuth().role === 1 && (
              <div>
                
                  <a>{`${isAuth().name}'s Dashboard`}</a>
                
              </div>
            )}
                    
                </ul>
            </div>
        )
    }
    
    const purchaseHistory = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Purchase history</h3>
                <ul className="list-group">
                    <li className="list-group-item">history</li>
                </ul>
            </div>
        )
    }
   

    return (
        <div>
            <div className="card">
                {userLinks()}
            </div>
            <div className="card">
            {userInfo()}
            {purchaseHistory()}
            </div>
            
            
        </div>
    );
};

export default Dashboard;