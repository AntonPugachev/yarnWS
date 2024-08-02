import { AxiosInstance } from 'axios';
import { IUser } from '../../../types/projects.types';
/**
 * Создание функции для поиска по пользователям в SAP.
 * @param request Экземпляр axios'а для запросов.
 */
export declare const createGetUsers: (request: AxiosInstance) => (search: string, filter: string, skip: number) => [Promise<IUser[]>, (() => void) | null];
