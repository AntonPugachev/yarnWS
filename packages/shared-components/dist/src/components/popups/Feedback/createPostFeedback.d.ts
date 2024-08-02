import { AxiosInstance } from 'axios';
import { FeedbackData } from './Feedback';
/**
 * Создание функции для отправки запроса на обратную связь
 * @param request Экземпляр axios'а для запросов.
 */
export declare const createPostFeedback: (request: AxiosInstance) => (data: FeedbackData) => Promise<any[]>;
export default createPostFeedback;
