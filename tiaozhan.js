var body = $request.body;
var newNum = Math.floor(Math.random() * 6) + 5;
body = body.replace(/"rightQuestionNum"\s*:\s*\d+/g, "\"rightQuestionNum\": " + newNum);
$done({body});
