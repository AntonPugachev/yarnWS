import { IRequestAttachment } from '../types/projects.types';
import { IFileData } from '../types';
export declare const download: (file: IRequestAttachment, name?: string, host?: string) => void;
export declare const downloadWithLoading: ({ file, base64, id }: IFileData, setLoading: (f: boolean) => void) => void;
