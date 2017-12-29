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

    //jquery动画写法
    $(".btn1").click(function () {
        $("#box").animate({
            height: "300px",
            top: "0"
        });
        $("button").animate({
            top: "0"
        });


    });
    $(".btn2").click(function () {
        $("#box").animate({
            height: "100px",
            top: "-120px"
        });
        $("button").animate({
            top: "-120px"
        });
    });


    $(".people").click(function () {
        $(".people").animate({
            top: "150px"
        }, 500).animate({
            left: "1250px"
        }, 4500);
    });
});