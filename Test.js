//var img = new Image();   // Create new img element
//img.src ="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi_5cK9gZXmAhVJj54KHcifAZMQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.shutterstock.com%252Fsearch%252Fcartoon%252Bturkey%26psig%3DAOvVaw3aKoWhqTGhHxk2eUM8Z-UY%26ust%3D1575308999199677&psig=AOvVaw3aKoWhqTGhHxk2eUM8Z-UY&ust=1575308999199677"

function add_turkey() {
    var src = "http://mcgargles.com/wp-content/uploads/2016/12/Thanksgiving-turkey-free-turkey-clip-art.png";
    show_image("http://mcgargles.com/wp-content/uploads/2016/12/Thanksgiving-turkey-free-turkey-clip-art.png", 616,484, "Turkey");

    playAudio("http://spliffmobile.com/message-alert-tones/30012014/download/turkey-gobble-message-alert-tone.mp3");

}

function playAudio(url) {
    var a = new Audio("http://spliffmobile.com/message-alert-tones/30012014/download/turkey-gobble-message-alert-tone.mp3");
    a.play();
  }

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}

let x = 0
function ready(){
    add_turkey.onclick = function() {
        while (x < 2) {
            console.log('while loop');
            let f = document.createElement('p');
            let b = document.createElement('button')
            f.innerHTML = "add_turkey";
            f.id = "turkey";
            b.id = "remove";
            b.innerHTML = "Remove";
            b.onkeypress = function() {
                console.log("Remove click");
                let closest = f.closest("#turkey");
                closest.innerHTML = " ";
            }
            fill.append(f);
            fill.append(b);
            x++;
        };
        x = 0
    };
}