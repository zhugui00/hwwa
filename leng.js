let url = $request.url;
url = url.replace(/(\?|&)udid=[^&]*/, '$1udid=00008110-001A118C0A79801E');
$done({ url });
