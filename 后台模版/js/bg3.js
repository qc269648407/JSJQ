var vm5 = avalon.define({
    $id: "bg3Page",
    tableTitle: 'GXBYQX 高校毕业去向代码表',
    table3Data: []
});

$('.bg3Page').ready(function () {
    getTable3Data();
});

function getTable3Data() {
    vm5.table3Data = [{
        no: '10',
        name: '派遣',
        shortName: '',
        wordCode: '',
        description: '毕业生通过学习与用人单位签订就业协议书',
    },
    {
        no: '20',
        name: '用人单位接收',
        shortName: '',
        wordCode: '',
        description: '毕业生与用人单位已签定劳动合同，或者用人单位出具就业函....',
    },{
        no: '30',
        name: '升学',
        shortName: '',
        wordCode: '',
        description: '考取研究生，包括考取第二学、专升本等',
    },{
        no: '40',
        name: '出国（境）',
        shortName: '',
        wordCode: '',
        description: '',
    },{
        no: '50',
        name: '暂缓就业',
        shortName: '',
        wordCode: '',
        description: '一是缓解就业压力的一项政策；二是因病暂缓，期限均为两年',
    },{
        no: '60',
        name: '灵活就业',
        shortName: '',
        wordCode: '',
        description: '......',
    },{
        no: '70',
        name: '定向委培',
        shortName: '',
        wordCode: '',
        description: '享受国家专项奖学金，招生或在校时',
    },{
        no: '80',
        name: '国家地方项目',
        shortName: '',
        wordCode: '',
        description: '政策性支扶项目，大学生志愿服务西部计划，研究生支教团等',
    },{
        no: '99',
        name: '其他',
        shortName: '',
        wordCode: '',
        description: '',
    }
    ];
}