const resumeBtn = document.querySelectorAll(".resume-btn");
const uttr = new SpeechSynthesisUtterance(text1);
const area = document.getElementById("app").firstElementChild.firstElementChild;
var alreadySp = 0;
var time = 0;
uttr.rate = 0.5;
// 高さ 0-2 初期値:1
uttr.pitch = 1;
// 音量 0-1 初期値:1
uttr.volume = 0.75;
$(document).ready(function () {
  speechSynthesis.cancel(uttr);
  speechSynthesis.speak(uttr);
});

for (let i = 0; i < resumeBtn.length; i++) {
  resumeBtn[i].addEventListener("click", function () {
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
      setInterval(function () {
        time++;
      }, 1000);
    }
  });
}

window.onload = function () {
  var sub;
  sub = document.getElementById("app").firstElementChild.lastElementChild;
  sub.addEventListener("click", function () {
    if (area.value == text1) {
      Swal.fire({
        title: "正解",
        html: "すごい スコア:" + time + "秒",
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      Swal.fire({
        title: "残念",
        html: time + "秒経過",
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  });
};
function textAreaHeightSet(argObj) {
  // ==============================================
  //	フォーカス時の背景色リセット
  // ==============================================
  // 一旦テキストエリアを小さくしてスクロールバー（縦の長さを取得）
  argObj.style.height = "10px";
  var wSclollHeight = parseInt(argObj.scrollHeight);
  // 1行の長さを取得する
  var wLineH = parseInt(argObj.style.lineHeight.replace(/px/, ""));
  // 最低2行の表示エリアにする
  if (wSclollHeight < wLineH * 2) {
    wSclollHeight = wLineH * 2;
  }
  // テキストエリアの高さを設定する
  argObj.style.height = wSclollHeight + "px";
}
