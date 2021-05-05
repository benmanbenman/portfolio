let newstr = document.getElementById("change").innerHTML.split("")

for (i = 0; i < document.getElementById("change").innerHTML.length; i++) {
    if (Math.random() > 0.5 && newstr[i] != " ") {
        temp = newstr[i]
        newstr[i] = "<i>"+newstr[i]+"</i>"
        console.log(newstr)
    }
}

document.getElementById("change").innerHTML = newstr.join("")