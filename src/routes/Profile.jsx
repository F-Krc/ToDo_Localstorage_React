import { useAuthContext } from '../context/AuthContext';
import Header from '../components/Header';

const Profile = () => {
   const { user } = useAuthContext();
   return (
     <div>
       <Header>
         <h1>Profile</h1>
       </Header>
       <div className="profile">
         <h2>Hello, {user}</h2>
       </div>
     </div>
   );
};
export default Profile;
