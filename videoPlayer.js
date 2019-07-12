function doFirst(){
	barSize=1050;
	myVideo = document.getElementById("video1");   
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
    screenWidth = screen.width;
	bar.addEventListener('click', clickedBar, false);
}

function play() { 
  	myVideo.play();
	updateBar=setInterval(update, 500);
} 

function update() {
	if (!myVideo.ended) {
		var percentage = Math.floor((100 / myVideo.duration) * myVideo.currentTime);
		progressBar.value = percentage;
		progressBar.innerHTML = percentage + '% played';
	} 
}

function clickedBar(e){
	if(!myVideo.paused && !myVideo.ended){
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime=mouseX*myVideo.duration/barSize;
		myVideo.currentTime=newtime;
		var percentage = Math.floor(mouseX / 10);
		progressBar.value = percentage;
		progressBar.innerHTML = percentage + '% played';
	}
}

function pause() {
	 myVideo.pause();
	 window.clearInterval(updateBar);
}

function increaseVolume() { 
  myVideo.volume = myVideo.volume + 0.1;
} 
  
function decreaseVolume() { 
  myVideo.volume = myVideo.volume - 0.1;
} 

function reload() {
	myVideo.load();
}

function muteUnmute() {
 if (myVideo.muted == true) {
 	myVideo.muted = false;
 } else {
 	myVideo.muted = true;
 }
}

function addone() {
	var value = document.getElementById("myLikefield").value;
	document.getElementById("likeCount").innerHTML = Number(value) + 1;
   document.getElementById("myLikefield").value = document.getElementById("likeCount").innerHTML;
}

function subtractone() {
	var value = document.getElementById("myUnlikefield").value;
	document.getElementById("unlikeCount").innerHTML = Number(value) + 1;
    document.getElementById("myUnlikefield").value = document.getElementById("unlikeCount").innerHTML;
}


$('#playlist li').each(function(){
$(this).click(function(){
var curUrl =$(this).attr("src");
$('#video1').attr("src",curUrl)
play();
});
});

window.addEventListener('load',doFirst,false);