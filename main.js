const text = `わたしはもとNHKしょくいんで、NHKからこくみんをまもるとうだいひょうのせいじかYouTuber、たちばなたかしでございます。いまから、まあまあおもしろいせいけんほうそうしますので、みなさんろくがをしてYouTubeにあっぷろーどしてください。`;
const resumeBtn = document.querySelectorAll(".resume-btn");
const uttr = new SpeechSynthesisUtterance(text);
var alreadySp = 0;
var app = new Vue({
  el: "#app",
  data: {
    textInput: "",
    cor: "",
  },
});
uttr.rate = 0.5;
// 高さ 0-2 初期値:1
uttr.pitch = 1;
// 音量 0-1 初期値:1
uttr.volume = 0.75;
speechSynthesis.speak(uttr);

for (let i = 0; i < resumeBtn.length; i++) {
  // ②
  resumeBtn[i].addEventListener("click", function () {
    // ②
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      $(function () {
        $("#start").css("display", "none");
        $("#stop").css("display", "inline");
      });
    } else if (speechSynthesis.speaking) {
      speechSynthesis.pause();
      $("#stop").css("display", "none");
      $("#start").css("display", "inline");
    } else if (!alreadySp) {
      speechSynthesis.speak(uttr);
      alreadySp = 1;
      $("#start").css("display", "none");
      $("#stop").css("display", "inline");
    }
  });
}
