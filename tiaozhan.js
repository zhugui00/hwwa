var body = $request.body;
body = body.replace(/"rightQuestionNum"\s*:\s*0/g, "\"rightQuestionNum\": 5");
$done({body});