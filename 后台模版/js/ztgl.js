var vm2 = avalon.define({
    $id: "ztglLeftDiv",
    selectStage: {},
    stageArr1: [],
    rightClickText: function (n, ev) {
        if (3 == ev.which) {
            var menu = document.getElementById("menu");
            var oEvent = ev || event;
            //自定义的菜单显示
            menu.style.display = "block";
            //让自定义菜单随鼠标的箭头位置移动
            menu.style.left = oEvent.clientX + "px";
            menu.style.top = oEvent.clientY + "px";
            //return false阻止系统自带的菜单，
            //return false必须写在最后，否则自定义的右键菜单也不会出现
            vm2.selectStage = n;
        }
        return false;
    }

});

$('.ztglPage').ready(function () {
    getStage1();

    document.oncontextmenu = function (e) {
        e.preventDefault();
    };

    //实现点击document，自定义菜单消失
    document.onclick = function () {
        menu.style.display = "none";
    }
});

function getStage1() {
    vm2.stageArr1 = [{
        title: '标准建设管理',
        position: '0',
        url: '',
        showSubStage: false,
        subStage: [{
            title: '参考标准',
            position: '00',
            url: '',
            showSubStage: false,
            subStage: [{
                title: '标准数据库',
                position: '000',
                url: '',
                showSubStage: false,
                subStage: []
            }, {
                title: '元数据标准集',
                position: '001',
                url: '',
                showSubStage: false,
                subStage: [{
                    title: '国家标准',
                    position: '0010',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '行业标准',
                    position: '0011',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '校定标准',
                    position: '0012',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }, {
                title: '代码数据标准集',
                position: '002',
                url: '',
                showSubStage: false,
                subStage: [{
                    title: '国家标准',
                    position: '0020',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '行业标准',
                    position: '0021',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '校定标准',
                    position: '0022',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }]
        }, {
            title: '草案标准',
            position: '01',
            url: '',
            showSubStage: false,
            subStage: [{
                title: '主题管理',
                position: '010',
                url: './ztgl.html',
                showSubStage: false,
                subStage: []
            }, {
                title: '元数据标准',
                position: '011',
                url: '',
                showSubStage: false,
                subStage: [{
                    title: '公共',
                    position: '0110',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '教学相关',
                    position: '0111',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '科研相关',
                    position: '0112',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '人事相关',
                    position: '0113',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '后勤相关',
                    position: '0114',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '档案相关',
                    position: '0115',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '资产设备',
                    position: '0116',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }, {
                title: '代码数据',
                position: '012',
                url: '',
                showSubStage: false,
                subStage: [{
                    title: '公共标准',
                    position: '0120',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '本科教学',
                    position: '0121',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '研究生教学',
                    position: '0122',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '科研相关',
                    position: '0123',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '人事相关',
                    position: '0124',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '本科学生工作',
                    position: '0125',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '资产相关',
                    position: '0126',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '设备相关',
                    position: '0127',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '宿舍相关',
                    position: '0128',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }, {
                    title: '计划财务相关',
                    position: '0129',
                    url: '',
                    showSubStage: false,
                    subStage: []
                }]
            }]
        }, {
            title: '执行标准',
            position: '02',
            url: '',
            showSubStage: false,
            subStage: []
        }]
    }, {
        title: '标准使用管理',
        position: '1',
        url: '',
        showSubStage: false,
        subStage: []
    }]
}