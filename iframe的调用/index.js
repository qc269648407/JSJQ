
// 父级调用子iframe中的方法
window.frames[0].xxxx();

// 父级调用第二个子iframe中的方法
window.frames[1].xxxx();

// 子调用父级的方法
window.parent.xxxx();

// jquery选父级元素
$('.xxxx',window.parent.document);

//js选父级元素
window.parent.parent.document.getElementById('xxx');