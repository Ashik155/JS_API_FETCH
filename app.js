document.getElementById("btn1").addEventListener("click",getTExt)


function getTExt(){
    fetch("data.txt").then(function(reponse){
            return reponse.text()
    }).then(function(data){
        document.getElementById("out").innerHTML = `<li>${data}</li>`
    })
}
document.getElementById("btn2").addEventListener("click",getjsont)


function getjsont(){
    fetch("data1.json").then(function(reponse){
            return reponse.json()
    }).then(function(data){
        data.forEach(function(dt){
            document.getElementById("out").innerHTML += `<li>${dt.id}</li>`
        })
       
    })
}

document.getElementById("btn3").addEventListener("click",getapi)


function getapi(){
    fetch("https://api.github.com/users").then(function(reponse){
            return reponse.json()
    }).then(function(data){
        data.forEach(function(dt){
            document.getElementById("out").innerHTML += `<li>${dt.login}</li>`
        })
       
    })
}