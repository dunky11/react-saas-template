function calculateSpacing(width, theme) {
  console.log(theme["breakpoints"]);
  const currentWidth = theme["breakpoints"]["values"][width];
  if (currentWidth >= theme["breakpoints"]["values"]["lg"]) {
    return 10;
  }
  if (currentWidth >= theme["breakpoints"]["values"]["md"]) {
    return 8;
  }
  if (currentWidth >= theme["breakpoints"]["values"]["sm"]) {
    return 6;
  }
  return 4;
}

export default calculateSpacing;
