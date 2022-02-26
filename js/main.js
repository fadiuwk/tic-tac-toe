let oArr = []
let xArr = []
let count = 0;
let player;

$('.btn').click(function () {
    $('.light-box').css('display','none')
    $('.item').html('')
    $('.turn').html(`O's Turn`);
    oArr = []
    xArr = []
    count = 0
})

for (let i = 0; i < 9; i++) {
    $('.turn').html(`O's Turn`);
    $('.item').click(function (e) {

        if (count % 2 == 0) {
            if ($(this).html() == '') {
                $('.turn').html(`X's Turn`);
                $(this).html('O');
                player = 'O';
                oArr.push($(this).index());
                checkWinner(oArr)
                count++;
            }

        } else {
            if ($(this).html() == '') {
                $('.turn').html(`O's Turn`);
                $(this).html('X');
                player = 'X';
                xArr.push($(this).index());
                checkWinner(xArr)
                count++;

            }

        }
    });
}

function checkWinner(array) {

        if (array.includes(0) && array.includes(1) && array.includes(2)) {
           printWinner();
        } else if (array.includes(3) && array.includes(4) && array.includes(5)) {
           printWinner();
        } else if (array.includes(6) && array.includes(7) && array.includes(8)) {
           printWinner();
        } else if (array.includes(0) && array.includes(3) && array.includes(6)) {
           printWinner();
        } else if (array.includes(1) && array.includes(4) && array.includes(7)) {
           printWinner();
        } else if (array.includes(2) && array.includes(5) && array.includes(8)) {
           printWinner();
        } else if (array.includes(0) && array.includes(4) && array.includes(8)) {
           printWinner();
        } else if (array.includes(2) && array.includes(4) && array.includes(6)) {
           printWinner();
        } else if (array.length > 4) {
            $('.light-box').css('display','flex')
            $('h3').html('Game Over')
        }
}

function printWinner(){
    $('.light-box').css('display','flex')
    $('h3').html(`${ player} ' s Winner`)
}

// let arr = [1, 2, 3, 4, 5 , 7]

// if(arr.includes(1) && arr.includes(3) && arr.includes(5)) {
//     alert('True')
// } else {
//     alert('false')
// }
