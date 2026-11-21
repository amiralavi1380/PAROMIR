(() => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(expanded));
      nav.classList.toggle("open", expanded);
    });
  }
  const form = document.getElementById("inquiry-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const rows = Array.from(form.querySelectorAll("label")).map(label => {
      const title = label.querySelector("span").textContent.trim();
      const value = label.querySelector("input").value.trim();
      return title + ": " + value;
    });
    const subject = encodeURIComponent(form.dataset.title);
    const body = encodeURIComponent(rows.join("\n"));
    const recipient = form.dataset.recipient;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) return;
    window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  });
})();
