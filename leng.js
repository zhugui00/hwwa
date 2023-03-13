let url = $request.url;
const regex = /(\?|&)udid=([^&]*)/;
const match = regex.exec(url);
if (match) {
  const originalValue = match[2];
  url = url.replace(regex, `$1udid=00008110-001A118C0A79801E`);
} else {
  url += (url.includes('?') ? '&' : '?') + 'udid=00008110-001A118C0A79801E';
}
$done({ url });
