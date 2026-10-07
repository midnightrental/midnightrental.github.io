// Before/after slider: the range input drives a CSS variable that clips the "after" image.
(function () {
  const compare = document.getElementById("compare");
  if (!compare) return;
  const range = compare.querySelector(".compare__range");

  function update() {
    compare.style.setProperty("--split", range.value + "%");
  }

  range.addEventListener("input", update);
  update();
})();
