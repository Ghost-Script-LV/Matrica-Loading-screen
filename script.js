document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("loadingMusic");

  // Ensure sound starts unmuted
  music.muted = false;

  // Listen for spacebar key
  document.addEventListener("keydown", function (event) {
    // Ignore if typing in input/textarea
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

    // Toggle mute on spacebar press
    if (event.code === "Space") {
      event.preventDefault(); // Prevent page scroll
      music.muted = !music.muted;
      console.log(music.muted ? "Muted" : "Unmuted");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("rulesModal");
  const close = document.getElementById("closeModal");

  // Show panel on page load
  modal.style.display = "flex";

  // Close with X button
  close.onclick = function () {
    modal.style.display = "none";
  };

  // Close if clicked outside the panel
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("rulesModal");
  const close = document.getElementById("closeModal");
  const openBtn = document.getElementById("openRulesBtn");

  // Show modal on page load
  modal.style.display = "flex";

  // Close on X click
  close.onclick = function () {
    modal.style.display = "none";
  };

  // Reopen modal on button click
  openBtn.onclick = function () {
    modal.style.display = "flex";
  };

  // Close when clicking outside
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
