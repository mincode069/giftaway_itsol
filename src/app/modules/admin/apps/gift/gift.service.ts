import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GiftService {
    private gifts: any[] = []; // Dữ liệu giả lập danh sách phần thưởng
    private giftsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.gifts);

    constructor() {}

    // Lấy danh sách phần thưởng
    getGifts(): Observable<any[]> {
        return this.giftsSubject.asObservable();
    }

    // Thêm phần thưởng mới
    addGift(gift: any): void {
        // Cập nhật ID cho phần thưởng mới (giả lập ID tạm thời bằng timestamp)
        const timestamp = new Date().getTime();
        gift.id = timestamp;
        this.gifts.push(gift);

        // Cập nhật dữ liệu và thông báo thay đổi
        this.giftsSubject.next(this.gifts);
    }
}
