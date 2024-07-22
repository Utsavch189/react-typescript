import React from "react";
import { IUser } from "../models/user";

export type UserCardProps = {
    user: IUser;
    users: IUser[];
    setUsers: React.Dispatch<React.SetStateAction<IUser[] | null>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export type CreateUserProps = {
    setUsers: React.Dispatch<React.SetStateAction<IUser[] | null>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}