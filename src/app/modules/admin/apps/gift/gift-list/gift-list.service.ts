import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppPagination } from '../../../../../shared/model/common/app.pagination';
import { AppResponse } from '../../../../../shared/model/common/app-response';
import { environment } from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GiftListService {

    constructor(private _httpClient: HttpClient) {}

    doSearch(obj: AppPagination<any>): Observable<AppResponse<AppPagination<any>>> {
        return this._httpClient.post<AppResponse<AppPagination<any>>>(`${environment.API_URL}/gift/search`, obj);
    }

    save(obj: any): Observable<AppResponse<AppPagination<any>>> {
        return this._httpClient.post<AppResponse<AppPagination<any>>>(`${environment.API_URL}/gift/save`, obj);
    }

    viewGift(giftCode: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.API_URL}/gift?giftCode=${giftCode}`);
    }


    deleteGift(giftCode: string): Observable<AppResponse<any>> {
        return this._httpClient.delete<AppResponse<any>>(`${environment.API_URL}/gift/delete/${giftCode}`);
    }
}
