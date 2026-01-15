import { api } from "@/api/http";

export class AdminService{

    static async getAllUsers(){
        const response = await api.get('/users')

        return response.data
    }
}