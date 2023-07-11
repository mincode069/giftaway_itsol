import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from 'app/core/auth/auth.service';
import {AuthUtils} from 'app/core/auth/auth.utils';
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        public toastr: ToastrService,
        private spinnerService: NgxSpinnerService,
    ) {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request object
        let newReq = req.clone();

        // Request
        //
        // If the access token didn't expire, add the Authorization header.
        // We won't add the Authorization header if the access token expired.
        // This will force the server to return a "401 Unauthorized" response
        // for the protected API routes which our response interceptor will
        // catch and delete the access token from the local storage while logging
        // the user out from the app.
        if (this._authService.accessToken) {
            newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this._authService.accessToken)
            });
        }

        // Response
        return next.handle(newReq).pipe(
            tap(response => {
                if (response && response['body']) {
                    if (response['body']['code'] == 'SESSION_TIMEOUT') {
                        this.spinnerService.hide();
                        this.toastr.error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại.');

                        // Sign out
                        this._authService.signOut();
                        // Reload the app
                        location.reload();
                    }

                    if (response['body']['code'] == 'SYSTEM_UNAVAILABLE') {
                        this.spinnerService.hide();
                        this.toastr.error('Hệ thống tạm thời gián đoạn, vui lòng thử lại sau.');
                    }
                }
            }, (err: HttpErrorResponse) => {
                if (err.status === 401 && (err.error && err.error.title && err.error.title.toUpperCase() == 'UNAUTHORIZED') && !err.url.endsWith('/api/admin/authenticate')) {
                    // Chua dang nhap thanh cong --> Khong co quyen truy cap
                    this.spinnerService.hide();
                    this.toastr.error('Bạn không có quyền truy cập ứng dụng.');

                    // Sign out
                    this._authService.signOut();
                    // Reload the app
                    location.reload();
                }

                if (err.status === 401 && (err.error && err.error.code == 'SESSION_TIMEOUT')) {
                    // Phien dang nhap het han --> Thong bao va login lai
                    this.spinnerService.hide();
                    this.toastr.error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại.');

                    // Sign out
                    this._authService.signOut();
                    // Reload the app
                    location.reload();
                }

                if (err.status === 500 || (err.status === 401 && (err.error && err.error.code == 'SYSTEM_UNAVAILABLE'))) {
                    // Có loi xay ra
                    this.spinnerService.hide();
                    this.toastr.error('Hệ thống tạm thời gián đoạn, vui lòng thử lại sau.');
                }

                if (err.status === 0) {
                    // Khong co ket noi den backend
                    this.spinnerService.hide();
                    this.toastr.error('Kết nối gián đoạn, vui lòng thử lại sau.');

                    // Sign out
                    this._authService.signOut();
                    // Reload the app
                    location.reload();
                }
            })
        );
    }
}
