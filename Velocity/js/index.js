$(document).ready(function () {
    // 标准写法
    $(".element").on("click", function () {
        $(".element").velocity({

            width: "400px",
            right: "200px",
        }, {
            duration: 450
        }).velocity({
            width: 75
        }, {
            duration: 450
        }).velocity({
            height: 0
        }, {
            duration: 450
        });
        $(".element").velocity("reverse");
    });
});