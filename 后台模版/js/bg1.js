var vm3 = avalon.define({
    $id: "bg1Table",
    table1Data: [],
    pageIndex:1,
    maxPage:10,
});

$('.bg1Page').ready(function () {
    getTable1Data();
});

function getTable1Data() {
    vm3.table1Data = [{
            no: '01',
            standardNo: 'xxxxxx',
            standardName: 'XXXXXX',
            type: '标准',
            version: '2016',
            abolish: '1',
            Description: '12345678901234567890'
        },
        {
            no: '02',
            standardNo: 'aaaaaa',
            standardName: 'AAAAAA',
            type: '规范',
            version: '2017',
            abolish: '0',
            Description: '12345678901234567890'
        }
    ];
}

function frontPage() {
    if (vm3.pageIndex == 1) {
        alert('第一页');
    } else {
        vm3.pageIndex--;
        getTable1Data();
    }
}

function nextPage() {
    if (vm3.pageIndex == vm3.maxPage) {
        alert('最后一页');
    } else {
        vm3.pageIndex++;
        getTable1Data();
    }
}

function firstPage() {
    vm3.pageIndex = 1;
    getTable1Data();
}

function lastPage() {
    vm3.pageIndex = vm3.maxPage;
    getTable1Data();
}