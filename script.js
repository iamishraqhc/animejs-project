var count = 0;

function drag(evt){
    evt.dataTransfer.setData("image", evt.target.id);
    evt.target.style.opacity = "0";
}

function allowDrop(evt){
    evt.preventDefault();
}

function drop(evt){
    evt.preventDefault();
    var data = evt.dataTransfer.getData("image");
    var image = document.getElementById(data);
    evt.target.appendChild(image);
    var mapImage = document.querySelector('#mapImg');
        anime({
            targets : mapImage,
            scale: [1.5, 1],
            duration: 1500,
        });

    
    count = count + 1;
    if (count == 4){
        document.getElementById('background').innerHTML="<img src='images/final.png'>";
        var newImage = document.querySelector('#background');
        anime({
            targets: newImage,
            scale: [1.5, 1],
            rotate: 360,
            duration: 5000
        })
    }
}
