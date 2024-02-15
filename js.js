document.getElementById('revealButton').addEventListener('click', function() {
    var hotTakes = document.getElementsByClassName('hot-take');
    for (var i = 0; i < hotTakes.length; i++) {
        if (hotTakes[i].classList.contains('hidden')) {
            hotTakes[i].classList.remove('hidden');
            break; // Stop after revealing the first hidden hot take
        }
    }
    // Check if all hot takes are visible and hide the button if true
    var allVisible = true;
    for (var i = 0; i < hotTakes.length; i++) {
        if (hotTakes[i].classList.contains('hidden')) {
            allVisible = false;
            break;
        }
    }
    if (allVisible) {
        document.getElementById('revealButton').style.display = 'none';
    }
});
