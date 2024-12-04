  let x;
  let y;
  let z;

document.getElementById("verify").onclick = function verify(){ 

    x = document.getElementById("x").value;
    x = Number(x);

    y = document.getElementById("y").value;
    y = Number(y);

    z = document.getElementById("z").value;
    z = Number(z);

    if (x > y) {
        z = x * y
        document.getElementById("z").innerHTML = z;
        console.log(z)
    } else {
        z = (Math.log( x + y ))
        document.getElementById("z").innerHTML = z;
    console.log(z)
    
    }document.getElementById("z").value = z
    
}