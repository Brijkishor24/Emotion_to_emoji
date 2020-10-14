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