'use strict';

$(document).ready(function () {
    // 侧边栏滑动模块
    (function () {
        var sidebar = $('.sidebar');
        var mask = $('.mask');
        var sidebar_trigger = $('.sidebar_trigger');
        var showSidebar = function showSidebar() {
            mask.fadeIn();
            sidebar.animate({ 'right': 0 });
        };
        var hideSidebar = function hideSidebar() {
            mask.fadeOut();
            sidebar.css('right', -sidebar.width());
        };
        sidebar_trigger.bind('click', showSidebar);
        mask.bind('click', hideSidebar);
    })();
    //返回顶部模块
    (function () {
        var isPC = function isPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            if (window.screen.width >= 768) {
                flag = true;
            }
            return flag;
        };
        if (isPC()) {
            //如果是PC端，就出现back2top
            var backtotop = $('.back-to-top');
            backtotop.bind('click', function () {
                $('html,body').animate({ scrollTop: 0 }, 800);
            });
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 400) {
                    backtotop.fadeIn();
                } else {
                    backtotop.fadeOut();
                }
            });
        } else {
            //如果是移动端，就不需要出现back2top
        }
    })();
    // 招聘信息-下拉手风琴效果
    (function () {
        //全部下拉内容隐藏
        $(".bellows__content-wrapper").hide();
        //默认选中第一个
        $(".bellows__item:eq(1)").addClass("bellows--is-open");
        $(".bellows__content-wrapper:eq(1)").show();
        //点击事件
        $(".bellows__header").click(function () {
            //判断当前tab状态
            if ($(this).parent(".bellows__item").get(0) === $('.bellows--is-open').get(0)) {
                $(this).next().slideUp(); //自己关闭
                $(this).parent(".bellows__item").removeClass("bellows--is-open");
            } else {
                $(this).next().slideDown(); //内容展开
                $(this).parent(".bellows__item").addClass("bellows--is-open"); //父节点增加展开样式
                $(".bellows__header").not(this).next().slideUp(); //除了自己其他兄弟都关闭
                $(".bellows__header").not(this).parent(".bellows__item").removeClass("bellows--is-open"); //移除其他兄弟父节点的样式
            }
        });
    })();
});
$(function () {
    console.log($("a[href='http://wpa.qq.com/msgrd?v=3&uin=3292757596&site=qq&menu=yes']"));
    if (!isPc) {
        $("a[href='http://wpa.qq.com/msgrd?v=3&uin=3292757596&site=qq&menu=yes']").attr("href", "mqqwpa://im/chat?chat_type=wpa&uin=3292757596&version=1&src_type=web&web_src=oicqzone.com");
    }
    // $("a").click(function(){
    //     console.log(this,this.href)
    //     if(this.href == "http://wpa.qq.com/msgrd?v=3&uin=3292757596&site=qq&menu=yes"){
    //         console.log("打开手机QQ")
    //         chatQQ()
    //     }
    // })
});

var isPc = true;
function chatQQ() {
    alert("打开");
    window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=741369024&version=1&src_type=web&web_src=jiejiangzs.com";
}
// 判断浏览器设备
(function () {
    var isPC = function isPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        if (window.screen.width >= 768) {
            flag = true;
        }
        return flag;
    };
    if (isPC()) {
        isPc = true;
    } else {
        isPc = false;
    }
})();