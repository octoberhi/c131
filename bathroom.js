picture="";
status="";
function preload()
{
picture = loadImage("bathroom.jpg");
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML ="Status: Detecting Objects";
}

function modelLoaded()
{
console.log("Model is loaded");
status = true;
objectDetector.detect(picture, gotResult);
}
function gotResult(results)
{
if(error)
{
console.error(error);
}
console.log(results);
}
function draw()
{
image(picture, 0,0,500,300);

}