$(document).ready(function () {
    let time= document.getElementById('crr-time');
    setInterval(() => {
      let d = new Date();
      time.innerHTML = d.toLocaleTimeString('fa-IR');
    },1000)
    document.getElementById("crr-time").style.display = "inline";
/***************/

$(".masters ul li").click(function(){
  
  if ( $("li").hasClass ("active") ){
     $("li").removeClass( "active" )
    }
    
    $(this).addClass("active");
    // $("li").addClass("active-arr");}
    console.log( $(this))
  
});

/*****submenu of header********/


// $(".header-menu a").click(function(){
  
  // if ( $(".tab-content").hasClass ("d-block") ){
  //    $(".tab-content").removeClass( "d-block" )
  //   }
    
//     $(".tab-content").addClass("d-block");
//     console.log( $(this))
  
// });






});