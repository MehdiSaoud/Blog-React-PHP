import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import axios from 'axios';

export default function useRegister() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        return axios({
            url:'http://localhost:2345/register.php',
            method: "POST",
            withCredentials: true,
            data: new URLSearchParams({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
            .catch(function (error) {
                console.log(error)
            })
    }
}