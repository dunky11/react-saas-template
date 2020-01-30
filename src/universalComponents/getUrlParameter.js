function getUrlParameter(name, url) {
  const curName = name.replace(/[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${curName}(=([^&#]*)|&|#|$)`);

  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default getUrlParameter;
