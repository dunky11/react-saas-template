/**
 * When called scrolls smooth to the top of the page.
 * globLastC prevents shaky animations when scrolling to
 * bottom while topscrolling.
 */
let globLastC = Infinity;
function smoothScrollTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0 && globLastC > c) {
    globLastC = c;
    window.requestAnimationFrame(smoothScrollTop);
    window.scrollTo(0, c - c / 8);
  } else {
    globLastC = Infinity;
  }
}

export default smoothScrollTop;
