$(document).ready(function(){

	$(".navbar-toggler-icon").click(function(){
        $(".navbar").addClass("nav-strict");
	});

     $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".navbar").addClass("nav-strict");
        } else {
            $(".navbar").removeClass("nav-strict");
        }
    });


     $(".list").click(function(){
        const value = $(this).attr('data-filter');
        // alert(value);
            $(this).addClass('btn-danger text-light').siblings().removeClass('btn-danger');

        if(value == 'active'){
            $(".list-item").show('1000');
        }else{
            $(".list-item").not('.'+value).hide('1000');
            $(".list-item").filter('.'+value).show('1000');
        }
     });

    
     
});
