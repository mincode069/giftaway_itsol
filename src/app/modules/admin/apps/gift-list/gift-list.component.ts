import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSelectModel} from "../../../../shared/model/common/mat-select.model";
import {REGEX, RESPONSE_CODE, tableState} from "../../../../shared/constants/app.constants";
import {convertMo2DateStr} from "../../../../shared/utils/app-utils.functions";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {GiftListService} from "./gift-list.service";
import {AppPagination} from "../../../../shared/model/common/app.pagination";
import {finalize, takeUntil} from "rxjs/operators";
import {AppTableState} from "../../../../shared/model/common/app-table.state";
import {MatSort, Sort} from "@angular/material/sort";
import {Subject} from "rxjs";

@Component({
    selector: 'gift-list',
    templateUrl: 'gift-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    displayedColumns: string[] = ['username', 'email', 'fullname', 'phone', 'status', 'address'];
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
            appName: 'Hoạt động'
        },
        {
            appCode: 'LOCKING',
            appName: 'Đang khóa'
        }
    ];

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _giftListService: GiftListService
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
            username: [''],
            fullname: [''],
            createdDate: [''],
            phone: ['', [Validators.pattern((REGEX.PHONE_NUMBER))]],
            email: ['', [Validators.email]],
            address: [''],
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
}
