import { useEffect, useState } from 'react'
import { IUser } from '../models/user';
import { UserService } from '../service/userService';
import { ApiResponse } from "../network/api_response";
import UserCard from '../components/UserCard';
import CreateUser from '../components/CreateUser';

const Home = () => {
    const [users, setUsers] = useState<IUser[] | null>([] as IUser[]);
    const [error, setError] = useState<string | null>(null);

    const getAllUser = async () => {
        const response: ApiResponse<IUser[]> = await UserService.getAllUsers();
        if(response.error){
            setError(response.error);
        }
        else{
            setUsers(response.data)
        }
    }

    useEffect(() => {
        getAllUser()
    }, [])


    return (
        <div>
            {error && <h5>{error}</h5>}
            <h3>Create User :</h3>
            <CreateUser setUsers={setUsers} setError={setError}/>
            <h3>User List :</h3>
            {users && users.map(user =>
                <UserCard key={user.id} 
                    user={user} users={users} 
                    setUsers={setUsers} 
                    setError={setError}
                />
            )}
        </div>
    )
}

export default Home