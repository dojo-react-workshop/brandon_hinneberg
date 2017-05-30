'use strict';
const http = axios; // using axios but with a differenent name
// Write code that stops form from submitting
$(document).ready(function() {
    console.log('Document has been read!');
    $('form').submit(function(event) {
        event.preventDefault();
        const dataForServer = $(this).serialize();

        let promise = http({
            url: '/user',
            method: 'post',
            data: dataForServer
        });

        promise.then(function(responseFromServer) { // this will run when the promise is resolved ( successful)
                const data = responseFromServer.data; // Or you can use -> const {data} = responseFromServer;
                const htmlTags = `
                    <p>Name: ${data.User_name}</p>
                    <p>Location: ${data.dojo_location}</p>
                    <p>Favorite Lanaguage: ${data.fav_lang}</p>
                    <p>Comment: ${data.comment_box}</p>
                    `
                $('.main-content').html(htmlTags);
            })
            .catch(function(err) {
                $('.main-content').prepend(`<p class='error'> There was an error</p>`)
            })
    })
});