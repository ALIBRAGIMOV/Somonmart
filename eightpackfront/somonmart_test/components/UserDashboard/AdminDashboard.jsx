
import { isAuth } from '../../actions/auth';
import Link from 'next/link';


const AdminDashboard = ({user}) => {
    
    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Информация о пользователе</h3>
                <ul className="list-group">
                {isAuth() && isAuth().role === 1 && (
              <div>
               <ul>
                   <li>
                   <a >Логин: {`${isAuth().name}`}</a>
               
                   </li>
                   <li><a>E-mail: {`${isAuth().email}`}</a></li>
               </ul>
                 
              </div>
               )}
                    
                </ul>
            </div>
        )
    }
    
   

    return (
        <div>
            <div className="card">
            {adminInfo()}
            </div>
            
            
        </div>
    );
};

export default AdminDashboard;