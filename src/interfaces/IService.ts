export interface IService {
    method: 'get' | 'post' | 'put' | 'delete';
    httpStatus: number;
    url: string;
    delay?: number;
}
