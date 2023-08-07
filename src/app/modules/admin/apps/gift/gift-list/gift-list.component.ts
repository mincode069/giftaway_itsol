import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSelectModel} from "../../../../../shared/model/common/mat-select.model";
import {RESPONSE_CODE, tableState} from "../../../../../shared/constants/app.constants";
import {convertMo2DateStr} from "../../../../../shared/utils/app-utils.functions";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {GiftListService} from "./gift-list.service";
import {AppPagination} from "../../../../../shared/model/common/app.pagination";
import {finalize, takeUntil} from "rxjs/operators";
import {AppTableState} from "../../../../../shared/model/common/app-table.state";
import {MatSort, Sort} from "@angular/material/sort";
import {Subject} from "rxjs";
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {GiftInforComponent} from "../gift-infor/gift-infor.component";

@Component({
    selector: 'gift-list',
    templateUrl: 'gift-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    displayedColumns: string[] = ['giftcode', 'giftname', 'describe', 'status', 'actions'];
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    isLoadingGrid: boolean = false;

    tableState: AppTableState = tableState();

    searchForm: FormGroup;
    statusItems: MatSelectModel[] = [
        {
            appCode: '',
            appName: 'Tất cả'
        },
        {
            appCode: 'ACTIVE',
            appName: 'ĐÃ QUAY THƯỞNG'
        },
        {
            appCode: 'NOT ACTIVE',
            appName: 'CHƯA QUAY THƯỞNG'
        }
    ];

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _giftListService: GiftListService,
        public dialog: MatDialog,
    ) {
    }

    /**
     * On init
     */
    ngOnInit(): void {
        this.buildSearchForm();
    }

    ngAfterViewInit() {
        this.doSearch();

        this.sort.sortChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((sort: Sort) => {
                this.paginator.pageIndex = 0;
                this.doSearch();
            });
    }

    buildSearchForm() {
        this.searchForm = this._formBuilder.group({
            giftcode: [''],
            giftname: [''],
            describe: [''],
            status: ['']
        });
    }

    doSearch(sort?: Sort) {
        let conditionObj = {
            ...this.searchForm.value,
            dob: convertMo2DateStr(this.searchForm.value.dob)
        }

        this.isLoadingGrid = true;
        let bodyReq: AppPagination<any> = new AppPagination<any>(this.paginator, conditionObj);
        this._giftListService.doSearch(bodyReq)
            .pipe(
                takeUntil(this._unsubscribeAll),
                finalize(() => {
                    this.isLoadingGrid = false;
                })
            )
            .subscribe(response => {
                if (RESPONSE_CODE.SUCCESS == response.code && response.data) {
                    this.dataSource.data = response.data.items;

                    setTimeout(() => {
                        this.paginator.length = response.data.totalCount;
                    });
                }
            });
    }

    pageChanged(event: PageEvent) {
        this.doSearch();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(GiftInforComponent);

        // Lắng nghe sự kiện đóng dialog và xử lý sau khi dialog được đóng
        dialogRef.afterClosed().subscribe((result: any) => {
            // Xử lý sau khi dialog được đóng (ví dụ: tải lại danh sách phần thưởng)
            if (result) {
                // Có thể gọi service để tải lại danh sách phần thưởng (nếu cần)
                this.doSearch();
            }
        });
    }

    viewGift(element: any) {
        this._giftListService.viewGift(element.giftcode).subscribe(response => {
            if (response.success) {
                const dialogRef = this.dialog.open(GiftInforComponent, {
                    data: { giftData: response.data },
                });

                dialogRef.afterClosed().subscribe((result: any) => {
                    if (result) {
                        // Có thể gọi service để tải lại danh sách phần thưởng (nếu cần)
                        this.doSearch();
                    }
                });
            }
        });
    }

    editGift(element: any) {
        this._giftListService.viewGift(element.giftcode).subscribe(response => {
            if (response.success) {
                const dialogRef = this.dialog.open(GiftInforComponent, {
                    data: { giftData: response.data },
                });

                dialogRef.afterClosed().subscribe((result: any) => {
                    if (result) {
                        // Có thể gọi service để cập nhật thông tin phần thưởng (nếu cần)
                        this.doSearch();
                    }
                });
            }
        });
    }


    deleteGift(element: any) {
        // Xử lý logic xóa ở đây
        console.log('Đã chọn xóa:', element);
        // Ví dụ: Gọi service để xóa gift với mã giftcode
        // this._giftListService.deleteGift(element.giftcode).subscribe((response) => {
        //     // Xử lý kết quả trả về sau khi xóa
        //     if (response.success) {
        //         // Hiển thị thông báo xóa thành công
        //     } else {
        //         // Hiển thị thông báo xóa thất bại hoặc xử lý lỗi
        //     }
        // });
    }
}
