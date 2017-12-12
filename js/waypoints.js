$(document).ready(function() {
	$('body').hide();
	$('body').fadeIn(1000);				
		});
			
 /*waypoints*/

$(function(){
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '100%'
        });
  });
}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});

function myFunction() {
  alert("You have successfully make your order at :" + new Date());
}

 /*add to cart*/

function main() {
$('.add-to-cart').on('click', function() {
  $(this).addClass('active');
  $(this).text("Added");
});
}
$(document).ready(main);