// Done by Amandeep Singh.
function print_format(lst){
    // 'print_format' outputs the elements in the same way shown in the prompt.
    var format = "";
    for (var i =0; i<lst.length; i++){
        if (i == lst.length-1){
            format = format.concat(lst[i]);
        }
        else{
            var temp = lst[i] + ", ";
            format = format.concat(temp);
        }
    }
    console.log(format);
}

function int_to_word(character){
    // int_to_word changes the integer inputted to its phonetic equivalent.
    var str = "";
    switch(character){
        case "1":
            str = "One";
            break;
        case "2":
            str = "Two";
            break;
        case "3":
            str = "Three";
            break;
        case "4":
            str = "Four";
            break;
        case "5":
            str = "Five";
            break;
        case "6":
            str = "Six";
            break;
        case "7":
            str = "Seven";
            break;
        case "8":
            str = "Eight";
            break;
        case "9":
            str = "Nine";
            break;
        case "0":
            str = "Zero";
            break;
        default:
            str = "";
            break;
    }
    return str;
}

function bad_input(character){
    // bad_input is used to check if a character is an integer.
    const string = '1234567890';
    if (!string.includes(character)) {
        return true;
    }
}

// Turns args into a list (First 2 args are system related)
var args = process.argv.slice(2); 
//console.log(args.length);

// First check to see if we have any arguments provided. If not, we send an Error.
if (args.length === 0){
    console.log("Error: You did not enter any arguments.")
}

else{
    var final = [];
    var good_input = true;

    for (var i = 0; i < args.length; i++){
        //console.log(args[i]);
        var element = args[i];
        var string = "";
        if (!good_input){
            break;
        }
        for (var j = 0; j < element.length; j++) {

            if (bad_input(element[j])){
                good_input = false;
                break;
            }

            //console.log(element[j]);
            var x = int_to_word(element[j]);
            string = string.concat(x);
        }
        //console.log(string);
        final.push(string);
    }

    if (good_input){
        print_format(final);
    }
    else{
        console.log("Error: You entered a non-integer argument.");
    }
}
