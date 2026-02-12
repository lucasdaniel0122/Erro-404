window.addEventListener("load", () => {
 const video = document.createElement("video");
 const divVideo = document.querySelector(".divVideo");

 video.src = "assets/video-monstrinho-otimizado.mp4";
 video.autoplay = true;
 video.loop = true;
 video.muted = true;
 video.playsInline = true;

 divVideo.appendChild(video);
});