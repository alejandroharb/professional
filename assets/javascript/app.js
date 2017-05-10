$(document).ready(function(){

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if(h > 550) {
    var contentBlockHeight = h/2 - 22;
    $('.content-block').css('height', contentBlockHeight + 'px');
    $('.main-display').css('height', h + 'px');
  }

  // setContentBlockDimension();


  function setContentBlockDimension() {

  }

  // ---------skill bar---------
  jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
