const fetchIpData = new Promise((resolve, reject) => {
  const ajax = new XMLHttpRequest();
  if (window.location.href.includes("localhost")) {
    /**
     *  Resolve with dummydata, GET call will be rejected,
     *  since ipinfos server is configured that way
     */
    resolve({ data: { country: "DE" } });
    return;
  }
  ajax.open("GET", "https://ipinfo.io/json");
  ajax.onload = () => {
    const response = JSON.parse(ajax.responseText);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  };
  ajax.onerror = reject;
  ajax.send();
});

export default fetchIpData;
