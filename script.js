$(document).ready(function() {
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const images = {
        A: 'images/A.jpg', B: 'images/B.jpg', C: 'images/C.jpg',
        D: 'images/D.jpg', E: 'images/E.jpg', F: 'images/F.jpg',
        G: 'images/G.jpg', H: 'images/H.jpg', I: 'images/I.jpg',
        J: 'images/J.jpg', K: 'images/K.jpg', L: 'images/L.jpg',
        M: 'images/M.jpg', N: 'images/N.jpg', O: 'images/O.jpg',
        P: 'images/P.jpg', Q: 'images/Q.jpg', R: 'images/R.jpg',
        S: 'images/S.jpg', T: 'images/T.jpg', U: 'images/U.jpg',
        V: 'images/V.jpg', W: 'images/W.jpg', X: 'images/X.jpg',
        Y: 'images/y.jpg', Z: 'images/Z.jpg'
    };

    $('#enter').on('click', function() {
        const n = $('#numberInput').val();
        if (n >= 1 && n <= 26) {
            const randomLetters =generateRandomLetters(n);
            displayLetters(randomLetters);
            } 
        else {
            alert('Please enter a number between 1 and 26.');
            $('#letters').empty();
            $('#images').empty();
           }
    });

    function generateRandomLetters(n) {
                console.log("number of letters:" + n);
                let result = '';
                for (let i = 1; i <= n; i++) {
                    const randomIndex = Math.floor(Math.random() *  letters.length);
                    result += letters[randomIndex];
                    console.log(" letter is : (" + randomIndex  +") "+ letters[randomIndex]);
               }
               return result;
           }

    function displayLetters(randomLetters) {
        $('#letters').empty();
        $('#images').empty();
        for (let i of randomLetters) {
            const letterElement = $('<div class="letter"></div>').html(i);
            letterElement.on('click', function() {
                $('#images').html( $('<img>').attr('src', images[i]).css('display', 'inline-block'));
            
            });
            $('#letters').append(letterElement);
        }
    }
});
