function StartClassification() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1nE00_yPz/model.json",modelready);
}

function modelready() {
    classifier.classify(gotresults);
}

function gotresults(error,results) {
    if(error) {
        console.error(error);
    }
    else {
    console.log(results);

    random_r = Math.floor(Math.random() * 255) +1;
    random_g = Math.floor(Math.random() * 255) +1;
    random_b = Math.floor(Math.random() * 255) +1;

    document.getElementById("Result_label").innerHTML = 'I can hear - '+results[0].label;
    document.getElementById("Result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence *100).toFixed(2)+"%";

    document.getElementById("Result_label").style.color = "rgb("+random_r +","+random_g+","+random_b+")";
    document.getElementById("Result_confidence").style.color = "rgb("+random_r +","+random_g+","+random_b+")";

    img1 = document.getElementById('dog');
    img2 = document.getElementById('cat');
    img3 = document.getElementById('lion');

    if(results[0].label == "Barking") {
        img1.src='dog.gif';
        img2.src='cat.png';
        img3.src='lion.png';
    }
    else if(results[0].label == "Meowing") {
        img1.src='dog.png';
        img2.src='cat.gif';
        img3.src='lion.png';
    }
    else if(results[0].label == "Roaring") {
        img1.src='dog.png';
        img2.src='cat.png';
        img3.src='lion.gif';
    }
    }
    }
    