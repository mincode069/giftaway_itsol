/**
 * @author TungBT <<Bui Thanh Tung>>
 */
export class AppResponse<T> {
    code: string;
    warningCode: string;
    message: string;
    data: T;
}
