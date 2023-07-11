import {MatPaginatorIntl} from "@angular/material/paginator";

export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = 'Số lượng';
    customPaginatorIntl.nextPageLabel = 'Trang sau';
    customPaginatorIntl.previousPageLabel = 'Trang trước';
    customPaginatorIntl.firstPageLabel = 'Trang đầu';
    customPaginatorIntl.lastPageLabel = 'Trang cuối';
    customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) {
            return `0 của ${length}`;
        }

        length = Math.max(length, 0);

        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} – ${endIndex} của ${length}`;
    }

    return customPaginatorIntl;
}
