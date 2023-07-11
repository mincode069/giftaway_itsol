import {MatPaginator} from "@angular/material/paginator";
import {Sort} from "@angular/material/sort";

/**
 * @author TungBT <<Bui Thanh Tung>>
 */
export class AppPagination<T> {
    skip: number;
    take: number;
    totalCount: number;
    condition: any;
    items: T[];
    sort: Sort;

    constructor(
        paginator: MatPaginator,
        condition?: T,
        sort?: Sort
    ) {
        this.skip = paginator.pageIndex * paginator.pageSize;
        this.take = paginator.pageSize;
        this.condition = condition
    }
}
