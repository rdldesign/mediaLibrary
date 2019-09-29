(function($){
//
// Plugin definition goes here.
//

//assign function as property of object $
$.fn.mediaLibrary = function(options) {

  var settings = $.extend({
    photoElement: 'img.medialibraryPhoto',
    transformer: function(name) {
                  return name.replace(/thumbnail/,'photo');
                }
    nextControl: null,
    previousControl: null,
    firstControl: null,
    lastControl: null,
    playControl: null,
    delay: 3000
    ,options||{});
   function showImage (index) {
     $(settings.photoElement)
      .attr('src',
            settings.transformer(settings.thumbnails$[index].src));
      settings.current = index;
    }
    settings.current =0;
  })

};

//grab all image details from folder


})(jQuery);
