function init() {
    document.getElementById("click-to-read").addEventListener("click", function() {
      document.getElementById("more-text").style.display = "block";
      var audio = document.getElementById("audio");
      audio.play();
    });
  }
  
  function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }




