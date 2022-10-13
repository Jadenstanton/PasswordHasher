function hashFunc() {
    var str = document.getElementById("password").value;

    var s = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    
    var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', "-", "_", ".", "&","?", "!", "@", "#", "/"];
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', "-", "_", ".", "&","?", "!", "@", "#", "/"];
   
    var newStr = [...str];
    var myHash = 0;
    var char = str;
  
    for(let i = 0; i<newStr.length;i++){
        newStr[i] = char;
        char = str.charCodeAt(0);
        myHash = ((myHash << 5) - myHash) + char;
        myHash = myHash & myHash;
        newStr[i] = myHash + s[i + 10 % 3 +2] ;
    }
    console.log("New string: ", newStr.join(""));
    var hash = newStr.join("");

    document.getElementById("hashedPassword").innerHTML = hash;
    console.log("Successful: ", hash);
}

function hashSalt() {
    var str = document.getElementById("password").value;

    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);

    console.log("Salt:", array[0]);
    
    var s = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    
    var salt = array[0];
    salt = salt.toString().split('').map(Number).map(n => (n || 10) + 64).map(c => String.fromCharCode(c)).join('');


    var newStr = [...str+salt];
    console.log("Before hash: ", newStr);

    var myHash = 0;
    var char = str;
  
    for(let i = 0; i<newStr.length;i++){
        newStr[i] = char;
        char = str.charCodeAt(0);
        myHash = ((myHash << 5) - myHash) + char;
        myHash = myHash & myHash;
        newStr[i] = myHash + s[i + 10 % 3 +2] ;
    }

    var hash = Array.isArray(newStr) ? newStr.join("") : "";
    console.log("After hash: ", hash);


    document.getElementById("hashedPassword").innerHTML = hash;
    console.log("Successful: ", hash);
}