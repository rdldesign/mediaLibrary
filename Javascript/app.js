$(document).ready(function () {
  //launch modal
  $("a#imgLibrarythumb").on("click", function(event) {

    //prevent default click
    event.preventDefault();

    $('.bd-example-modal-xl').modal('show');

    //get folder name
    var img = $(this).find('img').attr('src');


    var parts = img.split("/");

    var folderName = "/images/" + parts[2];

    console.log(folderName);
    //load images

    //AJAX call to method in Laravel that retrieves all files in a folder



  });

  //form submission
  $( "form" ).on( "submit", function( event ) {

    //get clicked image
    event.preventDefault();

    //when form submitted trigger Ajax
    $.post( "ajax/test.html", function( data ) {

    }) .fail(function() {
      //close modal
      $('#myModal').modal('hide');
    });

  });

});
