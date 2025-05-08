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
  const openBtn = document.getElementById("openRulesBtn");
  const closeBtn = document.getElementById("closeModal");

  // Show on load
  modal.style.display = "flex";

  // Open/close logic
  openBtn.onclick = () => modal.style.display = "flex";
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  // Tab switching
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
