$(document).ready(function() {
    var customName = document.getElementById('customname');
    var randomize = document.querySelector('.randomize');
    var story = document.querySelector('.story');

    const characters = [
        'Alice',
        'Trump',
        'Obama'
    ]



    const locations = [
        'Jamacia',
        'Austria',
        'the White House'
    ]



    const weirdEvents = [
        'spontaneously combusted',
        'melted into a puddle on the sidewalk',
        'turned into a slug and crawled away'
    ]

    function grabRandomArrayItem(array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    function handleButtonClick() {
        let nameValue = customName.value;
        if (nameValue.value === '') {
            nameValue = 'Bob';
        }

        story.innerText = buidStory(nameValue);
        story.style.visibility = 'visible';
    }

    function storyBuilder(customName) {
        const character = grabRandomArrayItem(characters);
        const location = grabRandomArrayItem(locations);
        const weirdEvent = grabRandomArrayItem(weirdEvents);
        let temperature = Math.floor(Math.random() * 94);
        let weight = Math.floor(Math.random() * 300);
        let weightUnit = 'Pounds'
        let tempUnit = 'farenheit';

        if (document.getElementById('uk').checked) {
            temperature = (temperature - 32) * 5 / 9;
            tempUnit = 'centrigrade'
            weight = round(weight / 2.2);
            weightUnit = 'Kilos';
        }

        return `'It was 94 farenheit outside, so ${character} went for a walk. When they got to ${location}, they stared in horror for a few moments, then ${weirdEvent}. Bob saw the whole thing, but he was not surprised — ${characters} weighs ${weight} ${weightUnit}, and it was a hot day.`;
    }
});