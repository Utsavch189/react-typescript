import { public_axios } from "../network/axios_init";
import { IUser, ICreateUser, IUpdateUser } from "../models/user";
import axios from "axios";
import { ApiResponse } from "../network/api_response";

export class UserService {

    public static async getAllUsers(): Promise<ApiResponse<IUser[]>> {
        let resp: ApiResponse<IUser[]> = {
            data: null,
            status: 0,
            error: null
        };
        try {
            const response = await public_axios.get(`/users`);
            resp.data = response.data;
            resp.status = response.status;
            resp.error = null;
        } catch (error) {
            let errorMessage = 'An unknown error occurred';
            let statusCode = 500;

            if (axios.isAxiosError(error)) {
                errorMessage = error.message;
                statusCode = error.response ? error.response.status : 500;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            resp.data = null;
            resp.status = statusCode;
            resp.error = errorMessage;
        }
        finally {
            return resp;
        }
    }

    public static async getAUser(id: number): Promise<ApiResponse<IUser>> {
        let resp: ApiResponse<IUser> = {
            data: null,
            status: 0,
            error: null
        };
        try {
            const response = await public_axios.get(`/users/${id}`);
            resp.data = response.data;
            resp.status = response.status;
            resp.error = null;
        } catch (error) {
            let errorMessage = 'An unknown error occurred';
            let statusCode = 500;

            if (axios.isAxiosError(error)) {
                errorMessage = error.message;
                statusCode = error.response ? error.response.status : 500;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            resp.data = null;
            resp.status = statusCode;
            resp.error = errorMessage;
        }
        finally {
            return resp;
        }
    }

    public static async createAUser(user: ICreateUser): Promise<ApiResponse<IUser>> {
        let resp: ApiResponse<IUser> = {
            data: null,
            status: 0,
            error: null
        };
        try {
            const response = await public_axios.post(`/users`,user);
            resp.data = response.data;
            resp.status = response.status;
            resp.error = null;
        } catch (error) {
            let errorMessage = 'An unknown error occurred';
            let statusCode = 500;

            if (axios.isAxiosError(error)) {
                errorMessage = error.message;
                statusCode = error.response ? error.response.status : 500;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            resp.data = null;
            resp.status = statusCode;
            resp.error = errorMessage;
        }
        finally {
            return resp;
        }
    }

    public static async updateAUser(user: IUpdateUser, id: number): Promise<ApiResponse<IUser>> {
        let resp: ApiResponse<IUser> = {
            data: null,
            status: 0,
            error: null
        };
        try {
            const response = await public_axios.put(`/users/${id}`,user);
            resp.data = response.data;
            resp.status = response.status;
            resp.error = null;
        } catch (error) {
            let errorMessage = 'An unknown error occurred';
            let statusCode = 500;

            if (axios.isAxiosError(error)) {
                errorMessage = error.message;
                statusCode = error.response ? error.response.status : 500;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            resp.data = null;
            resp.status = statusCode;
            resp.error = errorMessage;
        }
        finally {
            return resp;
        }
    }

    public static async deleteAUser(id: number): Promise<ApiResponse<unknown>> {
        let resp: ApiResponse<any> = {
            data: null,
            status: 0,
            error: null
        };
        try {
            const response = await public_axios.delete(`/users/${id}`);
            resp.data = response.data;
            resp.status = response.status;
            resp.error = null;
        } catch (error) {
            let errorMessage = 'An unknown error occurred';
            let statusCode = 500;

            if (axios.isAxiosError(error)) {
                errorMessage = error.message;
                statusCode = error.response ? error.response.status : 500;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            resp.data = null;
            resp.status = statusCode;
            resp.error = errorMessage;
        }
        finally {
            return resp;
        }
    }
}