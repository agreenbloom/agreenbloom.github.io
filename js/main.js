$(document).ready(function () {
    $(".NavBtn").on("click", function () {
        $(".NavBtn").toggleClass("change");
        if ($(".NavBtn").hasClass("change")) {
            $("#MenuPanel").animate({ left: 0 }, 1000);
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
            
        } else {
            $("#MenuPanel").animate({ left: '-100%' }, 1000);
        };
    });
});
