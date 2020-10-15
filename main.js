//https://teachablemachine.withgoogle.com/models/_a8b0xJBc/
Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_photo() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_url+"'>";
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_a8b0xJBc/model.json",modelloaded);
function modelloaded(){
    console.log("Model loaded");
}
function predict_emoji() {
  img=document.getElementById("captured_image");
  classifier.classify(img,getResult);
}
function getResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
 
        if(results[0].label=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128512;"+"&nbsp"+"&#128522;";
        }
        else if(results[0].label=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128532;"+"&nbsp"+"&#128546;";
        }
        else if(results[0].label=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128545;"+"&nbsp"+"&#128548;";
        }

        if(results[1].label=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128512;"+"&nbsp"+"&#128522;";
        }
        else if(results[1].label=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532;"+"&nbsp"+"&#128546;";
        }
        else if(results[1].label=="Angry"){
            document.getElementById("update_emoji2").innerHTML="&#128545;"+"&nbsp"+"&#128548;";
        }

    }
}