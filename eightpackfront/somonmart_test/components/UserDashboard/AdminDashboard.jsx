
import { isAuth } from '../../actions/auth';
import Link from 'next/link';


const AdminDashboard = ({user}) => {
    const adminLinks = () => {
        return (
            <div className="card">
                <ul>
                    <Link href="/"> 
                    <li >
                      <a className="linkProf">Создать Категорию</a> 
                    </li>
                    </Link>
                    <Link href="/admin/addsubcategory"> 
                    <li >
                      <a className="linkProf">Создать Подкатегорию</a> 
                    </li>
                    </Link>
                    <Link href="/admin/addproduct">
                    <li>
                        <a className="linkProf">Добавить Продукт</a>
                    </li>
                    </Link>
                </ul>
            </div>
        )
    }
    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                {isAuth() && isAuth().role === 1 && (
              <div>
               <ul>
                   <li>
                   <a >{`${isAuth().name}`}</a>
               
                   </li>
                   <li><a>{`${isAuth().email}`}</a></li>
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
                {adminLinks()}
            </div>
            <div className="card">
            {adminInfo()}
            </div>
            
            
        </div>
    );
};

export default AdminDashboard;