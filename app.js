const button = document.getElementById('button');
const resetButton = document.getElementById('buttonReset');

button.addEventListener('click', () => {
    let givenNumber = document.getElementById("base-number").value
    if(!givenNumber){
        alert('Please enter number to convert.');
        document.getElementById('output').innerHTML = '-'
    } else if ( document.getElementById('systems-from').value == 'none'){
        alert('Enter the input base')
    } else if ( document.getElementById('systems-to').value == 'none'){
        alert('Enter the output base')
    }

    f = document.getElementById('systems-from').value;
    t = parseInt(document.getElementById('systems-to').value, 10)

    readNumber = parseInt(givenNumber, f);
    parsedNumber = readNumber.toString(t);
    document.getElementById('output').innerHTML = parsedNumber.toUpperCase()
}) 

resetButton.addEventListener('click', () => {
    f = document.getElementById('systems-from')
    t = document.getElementById('systems-to')

    f.value = 'none';
    t.value = 'none';
    document.getElementById("base-number").value = '';
    document.getElementById('output').innerHTML = '';
})


function alpha(e) {
    let k ;
    document.all ? k = e.keyCode : k = e.which;
    f = document.getElementById('systems-from').value;

    if(f == 2){
        return (k >= 48 && k <= 49);
    } else if (f == 3) {
        return (k >= 48 && k <= 50);
    } else if (f == 4) {
        return (k >= 48 && k <= 51);
    } else if (f == 5) {
        return (k >= 48 && k <= 52);
    } else if (f == 6) {
        return (k >= 48 && k <= 53);
    } else if (f == 7) {
        return (k >= 48 && k <= 54);
    }else if (f == 8) {
        return (k >= 48 && k <= 55);
    }else if (f == 9) {
        return (k >= 48 && k <= 56);
    }else {
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
}