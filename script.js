function hashFunc() {
    var str = document.getElementById("password").value;
    
    var myHash = 0;
  
    for(let i = 0; i<str.length;i++){
        var char = str.charCodeAt(i);//get unicode of character i
        myHash = ((myHash << 5) - myHash) + char + str.charCodeAt(i-1); //shift hash bits 5 to the left and add unicode
        myHash |= 0;
    }

    console.log("Hashed string: ", myHash);
    document.getElementById("hashedPassword").innerHTML = myHash;
    console.log("Successful!");

}

function hashSalt() {
    var str = document.getElementById("password").value; 

    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);
    console.log("Salt:", array[0]);
        
    var salt = array[0];
    salt = salt.toString().split('').slice(2,9).map(Number).map(n => (n || 10) + 64).map(c => String.fromCharCode(c)).join('').toLowerCase();
    console.log("Salt as Chars:", salt);

    var saltedString = str+salt;
    var newStr = [...saltedString];
    console.log("String Before hash as char array: ", newStr);

    var myHash = 0;
    for(let i = 0; i<newStr.length;i++){
        var char = saltedString.charCodeAt(i);//get unicode of character i
        myHash = ((myHash << 5) - myHash) + char + saltedString.charCodeAt(i-1); //shift hash bits 5 to the left and add unicode
        myHash |= 0;//convert to 32 bit int
    }
    myHash = Math.abs(myHash);

    console.log("After hash: ", myHash);

    document.getElementById("hashedPassword").innerHTML = myHash;
    console.log("Successful!");
}