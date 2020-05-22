var count = 0;

function dragGroup5(evt){
    evt.dataTransfer.setData("image", evt.target.id);
    evt.target.style.opacity = "0";
}

function dragGroup3(evt){
    evt.dataTransfer.setData("image", evt.target.id);
    evt.target.style.opacity = "0";
}

function dragRectangle6copy6(evt){
    evt.dataTransfer.setData("image", evt.target.id);
    evt.target.style.opacity = "0";
}

function dragLayer1(evt){
    evt.dataTransfer.setData("image", evt.target.id);
    evt.target.style.opacity = "0";
}

function allowDrop(evt){
    evt.preventDefault();
}

function dropGroup5(evt){
    evt.preventDefault();
    var data = evt.dataTransfer.getData("image");
    var image = document.getElementById(data);
    evt.target.appendChild(image);
    count = count + 1;
    if (count == 4){
        document.getElementById('background').innerHTML="<img src='images/final.png'>";
    }
}

function dropGroup3(evt){
    evt.preventDefault();
    var data = evt.dataTransfer.getData("image");
    var image = document.getElementById(data);
    evt.target.appendChild(image);
    count = count + 1;
    if (count == 4){
        document.getElementById('background').innerHTML="<img src='images/final.png'>";
    }
}

function dropRectangle6copy6(evt){
    evt.preventDefault();
    var data = evt.dataTransfer.getData("image");
    var image = document.getElementById(data);
    evt.target.appendChild(image);
    count = count + 1;
    if (count == 4){
        document.getElementById('background').innerHTML="<img src='images/final.png'>";
    }
}

function dropLayer1(evt){
    evt.preventDefault();
    var data = evt.dataTransfer.getData("image");
    var image = document.getElementById(data);
    evt.target.appendChild(image);
    count = count + 1;
    if (count == 4){
        document.getElementById('background').innerHTML="<img src='images/final.png'>";
    }
}
