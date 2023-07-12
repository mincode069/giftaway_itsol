import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppPagination} from "../../../../shared/model/common/app.pagination";
import {Observable} from "rxjs";
import {AppResponse} from "../../../../shared/model/common/app-response";
import {environment} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GiftInforService {

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    doSearch(obj: AppPagination<any>): Observable<AppResponse<AppPagination<any>>> {
        return this._httpClient.post<AppResponse<AppPagination<any>>>(`${environment.API_URL}/user-info/search`, obj);
    }
}
