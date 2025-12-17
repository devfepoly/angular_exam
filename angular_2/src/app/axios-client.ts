import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Use backend port 3000 by default; override by setting globalThis.API_BASE_URL before bootstrap.
const apiBaseUrl = (globalThis as any).API_BASE_URL ?? 'http://localhost:3000';

export const axiosClient = axios.create({
    baseURL: apiBaseUrl,
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export const getJson = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await axiosClient.get<T>(url, config);
    return response.data;
};
