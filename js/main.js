const instance = new vidbg(".video", {
  mp4: "video/world.mp4", // URL or relative path to MP4 video. ссылка на видео в папку
  webm: "video/world.webpm", // URL or relative path to webm video. ссылка на видео в папку
  poster: "video/poster.jpg", // URL or relative path to fallback image. загружается картинка
  overlay: false, // Boolean to display the overlay or not
});
const rellax = new Rellax(".rocket");
if (document.body.clientWidth < 576) {
  rellax.destroy();
};
AOS.init();
