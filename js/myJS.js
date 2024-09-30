$(document).ready(function () {
    let time= document.getElementById('crr-time');
    setInterval(() => {
      let d = new Date();
      time.innerHTML = d.toLocaleTimeString('en-US');
    },1000)
    document.getElementById("crr-time").style.display = "inline";
/***************/

$(".employment ul li").hover(function(){
  
  if ( $("li").hasClass ("menu-pointer") ){
     $("li").removeClass( "menu-pointer" )
    }
    
    $(this).addClass("menu-pointer");
    // $("li").addClass("active-arr");}
    console.log( $(this))
  
});



/*****submenu of header********/
$(".header-menu a#navbarDropdown").click(function(){
    if ($('.dropdown-menu').hasClass('d-block')){
    $(".dropdown-menu").removeClass("d-block");
  } else {
    $(".dropdown-menu").addClass("d-block");
  }
});


});