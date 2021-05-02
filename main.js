var args = process.argv.slice(2); // Turns args into a list (First 2 args are system related)
//console.log(args);

for (var i = 0; i < args.length; i++){
    console.log(args[i]);
    var str = args[i];

    for (var j = 0; j < str.length; j++) {
        console.log(str[j])
    }

}