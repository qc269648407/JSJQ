var vm = avalon.define({
    $id: "leftBodyDiv",
    stageArr: [],
    changeFrame: function(url){
        if(url){
            vm1.frameUrl = url;
        }
    }
});

var vm1 = avalon.define({
    $id: "rightBodyDiv",
    frameUrl: 'https://www.baidu.com',
});

$('.indexPage').ready(function () {
    getStage();
});


function getStage() {
    vm.stageArr = [{
        title: '标准建设管理',
        url: '',
        showSubStage: false,
        subStage: [{
            title: '参考标准',
            url: '',
            showSubStage: false,
            subStage: [{
                title: '标准数据库',
                url: './bg1.html',
                showSubStage: false,
                subStage: []
            }, {
                title: '元数据标准集',
                url: './bg2.html',
                showSubStage: false,
                subStage: [{
                    title: '国家标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '行业标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '校定标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }, {
                title: '代码数据标准集',
                url: './bg3.html',
                showSubStage: false,
                subStage: [{
                    title: '国家标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '行业标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '校定标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }]
        }, {
            title: '草案标准',
            url: '',
            showSubStage: false,
            subStage: [{
                title: '主题管理',
                url: './ztgl.html',
                showSubStage: false,
                subStage: []
            }, {
                title: '元数据标准',
                url: '',
                showSubStage: false,
                subStage: [{
                    title: '公共',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '教学相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '科研相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '人事相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '后勤相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '档案相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '资产设备',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }, {
                title: '代码数据',
                url: '',
                showSubStage: false,
                subStage: [{
                    title: '公共标准',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '本科教学',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '研究生教学',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '科研相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '人事相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '本科学生工作',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '资产相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '设备相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '宿舍相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                },{
                    title: '计划财务相关',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }]
        }, {
            title: '执行标准',
            url: '',
            showSubStage: false,
            subStage: []
        }]
    }, {
        title: '标准使用管理',
        url: '',
        showSubStage: false,
        subStage: []
    }]
}