$(document).ready(function(){
    var activeCat = "";
    function filterGroup(group){
        if(activeCat != group){
        $(".li-cat").filter("."+group).show();
        $(".li-cat").filter(":not(."+group+")").hide();
        activeCat = group;
        }
    }

    $(".cat-all").click(function(){
        $(".li-cat").show();
        activeCat = "all";
    });

    $(".cat-coded").click(function(){ filterGroup("group-1"); });
    $(".cat-design").click(function(){ filterGroup("group-2"); });

    $('.burger').on('click',function(e){
        e.preventDefault();
        $('.burger').toggleClass('fa-bars');
        $('.burger').toggleClass('fa-times');
        $('.header-navbar .navbar').toggleClass('active');
        $('.nav-ul li').toggleClass('active');
    });;
});