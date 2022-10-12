function hashFunc() {
    var hash = 'empty';
    let i = 0;
    var str = document.getElementById("text").value;

    var s = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

    for(i = 0; i<str.length;i++){
        // if(str[i] % 3 == 1){
        //     str[i] = s[i%3 + 1];
        // }
        str[i] = 'a';
    }
    hash = str;

    document.getElementById("password").innerHTML = hash;
    console.log("successful")
}

function hashSalt() {
    var str = document.getElementById("pwd").value;
}