let url = $request.url;
url = url.replace(/(\?|&)udid=[^&]*/, '$1udid=00008110-000A09A00A91801E');
$done({ url });
//
