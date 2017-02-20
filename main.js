$(document).ready(function () {
    $("#btn").click(function () {
        var name = $("#personName").val();
        var age = $("#personAge").val();
        var eyeColor = $("#personEyeColor").val()
        var Person = {
            name: name,
            age: age,
            eyecolor: eyeColor
        }
        createBtn(Person);
    })

    function createBtn(Person) {
        var div = document.createElement("div");
        div.id=Person.name+"Text"
        div.style.display="none";
        div.innerHTML = "name:" + Person.name;
        div.innerHTML += "<br>"
        div.innerHTML += "age:" + Person.age;
        div.innerHTML += "<br>"
        div.innerHTML += "eyeColor:" + Person.eyeColor;
        var button=document.createElement("button");
        button.innerHTML=Person.name+" Button";
        button.onclick=function(){
           $("#"+Person.name+"Text").toggle(1000);
        }
        $("body").append(div)
        $("body").append(button)
        $("body").append("<br>")
    }
});