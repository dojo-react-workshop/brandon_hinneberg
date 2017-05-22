$(document).ready(function() {
    var customName = document.getElementById('customname');
    var randomize = document.querySelector('.randomize');
    var story = document.querySelector('.story');

    function randomValueFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }


    randomize.addEventListener('click', result);

    function result() {

        if (customName.value != '') {
            var name = customName.value;

        }

        if (document.getElementById("uk").checked) {
            var weight = Math.round(300);
            var temperature = Math.round(94);

        }

        story.textContent = ;
        story.style.visibility = 'visible';
    }

})