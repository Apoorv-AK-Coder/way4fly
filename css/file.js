setInterval(mufun, 1000);
function mufun() {
  let b1 = document.getElementById("on");
  let b2 = document.getElementById("off");
  let view = document.getElementById("view");

  b1.addEventListener("click", function () {
    if ((view.style.display = "none")) {
      view.style.display = "block";

    }
  })

  b2.addEventListener("click", function () {
    if ((view.style.display = "block")) {
      view.style.display = "none";
    }
  })
}

function openTab(index) {
  // Get all tab buttons and content panels
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  
  // Remove active class from all tabs and panels
  tabs.forEach(tab => tab.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));

  // Add active class to the clicked tab and corresponding panel
  tabs[index].classList.add('active');
  panels[index].classList.add('active');
}