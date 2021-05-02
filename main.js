var args = process.argv.slice(2); // Turns args into a list (First 2 args are system related)
//console.log(args);

var final = [];
for (var i = 0; i < args.length; i++){
    //console.log(args[i]);
    var element = args[i];
    var string = "";

    for (var j = 0; j < element.length; j++) {
        //console.log(element[j]);
        var x = int_to_word(element[j]);
        string = string.concat(x);
    }
    //console.log(string);
    final.push(string);
}

function print_format(lst){
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

print_format(final);

function int_to_word(character){
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
