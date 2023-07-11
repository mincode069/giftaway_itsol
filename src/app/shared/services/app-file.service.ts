import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {AppResponse} from "../model/common/app-response";
import {environment} from "../../../environments/environment";
import {encodeBase64} from "../utils/app-utils.functions";

@Injectable({
    providedIn: 'root'
})
export class AppFileService {

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    doUpload(formData: FormData): Observable<AppResponse<any>> {
        return this._httpClient.post<AppResponse<any>>(`${environment.API_URL}/common/upload-file`, formData);
    }

    getImageUrl(imagePath) {
        if (imagePath && imagePath.length > 0) {
            const filePathEncode = encodeBase64(imagePath);
            return `${environment.API_URL}/common/get-file?filePath=${filePathEncode}`;
        }

        return '#';
    }
}
