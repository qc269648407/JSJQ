var vm3 = avalon.define({
    $id: "bg1Table",
    table1Data: []
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