var body = $request.body;
try {
    var json = JSON.parse(body);
    var targetArray = json["ques"];
    var newOptions = [
      {"userAnswer":["78423321649363"],"id":21696746345394,"originOptions":[78419445352953,78420203187232,78423321649363,78425669241629]},
      {"userAnswer":["78517332214628"],"id":21718369800018,"originOptions":[78511790901616,78513924114194,78516217938846,78517332214628]},
      {"userAnswer":["79011806998719"],"id":21856724420663,"originOptions":[79007458676019,79008573431434,79011806998719,79013285885223]},
      {"userAnswer":["79109356920171"],"id":21879233252281,"originOptions":[79106010609221,79107834576617,79109356920171,79112314574575]},
      {"userAnswer":["79305545198731"],"id":21933254429189,"originOptions":[79305545198731,79306842638014]},
      {"userAnswer":["79326722446599"],"id":21944373093460,"originOptions":[79326722446599,79328401015275]},
      {"userAnswer":["79344917780642","79346179202490","79348203229786"],"id":21949668558495,"originOptions":[79344917780642,79346179202490,79348203229786,79350483478536]},
      {"userAnswer":["79416173346844"],"id":21969067503445,"originOptions":[79416004945362,79416173346844,79418447136016,79421781980535]},
      {"userAnswer":["79423853753839","79428277341796","79430346943737"],"id":21971909660301,"originOptions":[79423853753839,79426808419223,79428277341796,79430346943737]},
      {"userAnswer":["79518258900491","79520386562868","79522452516543","79524674302142","79527236009006"],"id":21992708199809,"originOptions":[79518258900491,79520386562868,79522452516543,79524674302142,79527236009006]};];
    var indexArr = [...new Array(newOptions.length).keys()]; // 创建包含所有索引值的数组
    var selectedIndexes = [];
    for (var i = 0; i < 10; i++) { // 随机选择 10 个索引值
        var randomIndex = Math.floor(Math.random() * indexArr.length);
        selectedIndexes.push(indexArr[randomIndex]);
        indexArr.splice(randomIndex, 1); // 移除已经选择的索引值
    }
    for (var j = 0; j < selectedIndexes.length; j++) {
        var randomIndex2 = Math.floor(Math.random() * newOptions.length);
        var newQuestion = newOptions[randomIndex2];
        var selectedIndex = selectedIndexes[j];
        targetArray[selectedIndex]["userAnswer"] = newQuestion["userAnswer"];
        targetArray[selectedIndex]["id"] = newQuestion["id"];
        targetArray[selectedIndex]["originOptions"] = newQuestion["originOptions"];
    }
    $done({body: JSON.stringify(json)});
} catch (e) {
    console.log("Error parsing JSON:", e);
    $done({});
}
