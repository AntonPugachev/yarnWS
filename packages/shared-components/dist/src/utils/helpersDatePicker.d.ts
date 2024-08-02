import { DateFormat, DateLocale, IDatepickerActivePeriod, IFormattedDate } from '../components/atoms/Datepicker/DatepickerCalendar/datepicker.types';
export declare const months: Record<DateLocale, string[]>;
export declare const addLeadingZeros: (number: number, length?: number) => string;
export declare const getMonthName: (value: string) => string;
export declare const weekDays: Record<DateLocale, string[]>;
export declare const formatDate: (date: string | number | undefined, format: DateFormat) => IFormattedDate;
export declare const stringToDate: (s: string, format: DateFormat, isUTC?: boolean) => Date;
export declare const replaceAt: (str: string, index: number, replacement: string) => string;
export declare const parseToFormat: (format: DateFormat, defaultValue?: Date | string | number) => {
    date: Date;
    string: string;
};
export declare const isCurrentDay: (d1: Date, d2?: Date) => boolean;
export declare const isCurrentMonth: (d1: Date, d2?: Date) => boolean;
export declare const compareMonths: (d1: Date, d2?: Date) => number;
export declare const getDaysForMonth: (d?: Date) => IDatepickerActivePeriod;
export declare const getWeekDay: (n: number, locale: DateLocale) => string;
export declare const generateMask: (inputValue: string, format: DateFormat, range: boolean, showDayOfWeek: boolean, dayOfWeek: string[]) => (string | RegExp)[];
