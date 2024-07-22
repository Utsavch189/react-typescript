import React, { useState } from 'react';
import { IUser,IUpdateUser } from '../models/user';
import { UserService } from '../service/userService';
import { ApiResponse } from '../network/api_response';
import { UserCardProps } from '../types/props';

const UserCard: React.FC<UserCardProps> = ({ user,users,setUsers,setError }) => {
    
    const [update,setUpdate]=useState<IUpdateUser>({
        name:user.name,
        email:user.email
    });
    
    const updates=async(id:number)=>{
        const response:ApiResponse<IUser>=await UserService.updateAUser(update,id);
        if (response.error){
            setError(response.error)
        }
        else{
            console.log(response.data)
            const updated_user=response.data;
            const prev_users=[...users];
            const new_users = prev_users.map((user) => {
                if (user.id === updated_user?.id) {
                    return {
                        ...user,
                        name: updated_user?.name,
                        email: updated_user?.email,
                    };
                }
                return user;
            });            
            setUsers(new_users);
        }
    }

    const deletes=async(id:number)=>{
        const response:ApiResponse<any>=await UserService.deleteAUser(id);
        if (response.error){
            setError(response.error)
        }
        else{
            console.log(response.data?.message)
            const prev_users=[...users];
            const new_users = prev_users.filter((user) => user.id !== id);            
            setUsers(new_users);
        }
    }
    
    return (
        <div className='user_card_main'>
            <div className='user_card_sub' >
                <label htmlFor="">Name :</label>
                <input type="text" value={update.name} onChange={(e)=>{
                    setUpdate(p=>({...p,name:e.target.value}))
                }}/>
            </div>

            <br />

            <div className='user_card_sub' >
                <label htmlFor="">Email :</label>
                <input type="email" value={update.email} onChange={(e)=>{
                    setUpdate(p=>({...p,email:e.target.value}))
                }}/>
            </div>

            <div className='btn_group'>
            <button onClick={()=>updates(user.id)} className='btn_update'>Update</button>
            <button onClick={()=>deletes(user.id)} className='btn_delete'>Delete</button>
            </div>
        </div>
    )
}

export default UserCard