export interface IService {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    delay?: number;
}
