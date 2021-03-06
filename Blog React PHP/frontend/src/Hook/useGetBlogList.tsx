import {BlogInterface} from "../Interface/ResponsesInterfaces";
import axios from 'axios';

export default function useGetBlogList() {
    return (): Promise<BlogInterface[]> => {
        return axios({
            url :'http://localhost:2345',
            method: 'GET'})
            .then(res => res.data)
    }
}