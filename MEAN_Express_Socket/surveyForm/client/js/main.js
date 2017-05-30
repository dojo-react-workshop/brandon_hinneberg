'use strict';

// Write code that stops form from submitting
$(document).ready(function() {
    console.log('Document has been read!');
    $('form').submit(function(event) {
        event.preventDefault();
        const dataForServer = $(this).serialize();

        $.ajax({
            url: '/user',
            method: 'post',
            data: dataForServer,
            success: function(responseFromServer) {
                const htmlTags = `
                    <p>Name: ${responseFromServer.User_name}</p>
                    <p>Location: ${responseFromServer.dojo_location}</p>
                    <p>Favorite Lanaguage: ${responseFromServer.fav_lang}</p>
                    <p>Comment: ${responseFromServer.comment_box}</p>
                    `
                $('.main-content').html(htmlTags);
            }
        })
    })
});