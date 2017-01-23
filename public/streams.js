var promise = navigator.mediaDevices.getUserMedia({


video: true,
audio: true
});
promise.then((avStream) => {
// Find my video tag…
var video = document.createElement('video');
video.srcObject = avStream;
// attachMediaStream(video, avStream);
video.play();
// Add video tag to DOM
var videoContainer = document.getElementById('videoContainer');
videoContainer.append(video);
});
