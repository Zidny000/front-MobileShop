$(document).ready(function(){

 $('#banner-area  .owl-carousel').owlCarousel({
  dots:true,
  items:1
 });

 $('#top-sale .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  responsive:{
   0:{
    items:1
   },
   600:{
    items:3
   },
   1000:{
    items:5
   }
  }
 });

  $('#new-phones .owl-carousel').owlCarousel({
   loop:true,
   nav:false,
   dots:true,
   responsive:{
       0:{
     items:1
   },
    600:{
     items:3
    },
    1000:{
     items:5
    }
   }
  });
  $('#blogs .owl-carousel').owlCarousel({
   loop:true,
   nav:false,
   dots:true,
   responsive:{
       0:{
     items:1
   },
    600:{
     items:3
    }
    
   }
  });


 // isotope filter
 var $grid = $(".grid").isotope({
  itemSelector : '.grid-item',
  layoutMode : 'fitRows'
});

// filter items on button click
$(".button-group").on("click", "button", function(){
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue});
})



$(".qty-up").click(function(){
  var $val= parseInt($(".qty_input").attr("value"))  ;

  $val += 1;

  if($val < 11){
    $(".qty_input").attr("value",$val);
  }
  
  
})

$(".qty-down").click(function(){
  var $val= parseInt($(".qty_input").attr("value"))  ;

  $val -= 1;
  if($val != 0 )
  $(".qty_input").attr("value",$val);
  
})







});