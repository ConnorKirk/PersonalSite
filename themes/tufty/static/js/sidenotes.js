// Copy Markdown and Pandoc footnotes into the margin as sidenotes.
// The footnote list stays in the page; CSS shows it only on narrow screens,
// where the margin copies are hidden.
(function () {
  var content = document.querySelector(".post .content");
  if (!content) return;

  var refs = content.querySelectorAll("a.footnote-ref");
  if (!refs.length) return;

  refs.forEach(function (ref) {
    var id = decodeURIComponent((ref.getAttribute("href") || "").slice(1));
    var item = id && document.getElementById(id);
    if (!item) return;

    var note = item.cloneNode(true);
    note.querySelectorAll(".footnote-backref, .footnote-back").forEach(function (a) { a.remove(); });

    var side = document.createElement("span");
    side.className = "sidenote from-footnote";
    side.setAttribute("aria-hidden", "true");
    var num = document.createElement("span");
    num.className = "fn-number";
    num.textContent = ref.textContent.trim();
    side.appendChild(num);

    // Footnote items wrap their text in <p>; keep the inline content only.
    var paras = note.querySelectorAll("p");
    if (paras.length) {
      paras.forEach(function (p, i) {
        if (i) side.appendChild(document.createElement("br"));
        while (p.firstChild) side.appendChild(p.firstChild);
      });
    } else {
      while (note.firstChild) side.appendChild(note.firstChild);
    }

    // Goldmark wraps the link in <sup>; Pandoc puts <sup> inside the link.
    var anchor = ref.parentElement && ref.parentElement.tagName === "SUP" ? ref.parentElement : ref;
    anchor.insertAdjacentElement("afterend", side);
  });

  content.classList.add("has-sidenotes");
})();
