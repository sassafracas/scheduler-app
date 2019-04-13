$(function() {
    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate()

    let totalDays = new Date(year, month, 0).getDate()

    let output =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    $('.date').text(`${output}`)

    $( ".planes" ).click(function(e) {
        let row = 0, length = 1, column = 0

        console.log(this)
        console.log(e)
        console.log(e.target.className.includes(1))

        if(e.target.className.includes(1)) {
            $('.modal-container').css('display', 'block')
            $('.modal-container--close').click(function(){$('.modal-container').css('display', 'none')})

            row = 1
            column = 1
        } else if (e.target.className.includes(2)){
            row = 1
            column = 2
        }
        // $(`#${row}`).replaceWith(`<div class='event' style='grid-row:${row}/span ${y};grid-column:${z}'>Event</div>`)
        $('.content').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column}'>Event</div>`)
        // e.target
        console.log(this)
      });
//create a new div with a predefined css event class then change grid-column and grid-row property based on the div it was clicked on
    // let e = jQuery.Event( "click" );
    // $( ".content > div" ).trigger( e );
  });