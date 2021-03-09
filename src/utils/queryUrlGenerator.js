export default function queryUrlGenerator(url, params) {
  if (!params) {
    return url;
  }
  let esc = encodeURIComponent;
  let query = Object.keys(params)
    .filter((k) => params[k] !== undefined)
    .map((k) => {
      if (params[k]) return esc(k) + "=" + esc(params[k]);
      else return;
    })
    .join("&");
  if (query) return `${url}?${query}`;
  else return url;
}
