import React, { useState } from 'react'
import { ICreateUser, IUser } from '../models/user'
import { ApiResponse } from '../network/api_response'
import { UserService } from '../service/userService'
import { CreateUserProps } from '../types/props'

const CreateUser:React.FC<CreateUserProps> = ({setUsers,setError}) => {
    const [user,setUser]=useState<ICreateUser>({
        name:"",
        email:""
    })

    const add=async()=>{
        if(user.name && user.email){
            const response:ApiResponse<IUser>=await UserService.createAUser(user);
            if(response.error){
                setError(response.error);
            }
            else{
                let new_user:IUser | null=response.data;
                setUsers(prevUsers => {
                    if (prevUsers === null) {
                        return Array.isArray(new_user) ? new_user : (new_user ? [new_user] : []);
                    }
                    return Array.isArray(new_user) ? [...prevUsers, ...new_user] : (new_user ? [...prevUsers, new_user] : prevUsers);
                });
            }
        }
    }
  return (
    <div className='user_card_main'>
            <div className='user_card_sub' >
                <label htmlFor="">Name :</label>
                <input type="text" value={user.name} onChange={(e)=>{
                    setUser(p=>({...p,name:e.target.value}))
                }}/>
            </div>

            <br />

            <div className='user_card_sub' >
                <label htmlFor="">Email :</label>
                <input type="email" value={user.email} onChange={(e)=>{
                    setUser(p=>({...p,email:e.target.value}))
                }}/>
            </div>

            <div className='btn_group'>
            <button onClick={add} className='btn_update'>Add</button>
            </div>
        </div>
  )
}

export default CreateUser