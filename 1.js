 $(function(){
    $(".xuong, .kn").click(function(){
        $('body,html').animate({scrollTop:$('#khoiedu').offset().top},600)
    })

    $(".sp").click(function(){
        $('body,html').animate({scrollTop:$('#sanpham').offset().top},600)
    })
    $(".kh").click(function(){
        $('body,html').animate({scrollTop:$('#khoahoc').offset().top},600)
    })
    $(".lh").click(function(){
        $('body,html').animate({scrollTop:$('#lienhe').offset().top},600)
    })
    $(".cm").click(function(){
        $('body,html').animate({scrollTop:$('#khoicomment').offset().top},600)
    })
    $(".anh").click(function(){
        $('body,html').animate({scrollTop:$('#thuvienanh').offset().top},600)
    })
})