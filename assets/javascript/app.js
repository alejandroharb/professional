$(document).ready(function(){
  var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  };

  

  setContentBlockDimension();
  addEvent(window, "resize", setContentBlockDimension);

  $("#skills").click(function() {
    $('.content-wrapper').animate({
        scrollTop: $(".skill-wrapper").offset().top
    }, 2000);

  
});



  function setContentBlockDimension() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log("height: ", h)
    console.log("width: ", w)
      // $('.content-block').css('height', contentBlockHeight + 'px');
      $('.main-display').css('height', h + 'px');
      $('.verticalBar-wrapper').css('min-height', h+'px');
      $('.content-wrapper').css('min-height', h+'px');
      $('.background-img').css('min-height', h+'px');
    
  }

  // ---------skill bar---------
  jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
  
});
