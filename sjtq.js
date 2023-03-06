var requestBody = $request.body; // 获取请求主体

if (requestBody && requestBody.ques) {
    var selectedArrays = []; // 创建一个空的数组存储所选数组

    // 添加备选数组，每个数组都需要包含"userAnswer"、"id"和"originOptions"字段
    var backupArrays = [
        { "userAnswer": ["78379660108563", "78384700300614", "78387444864153", "78389346600489"], id: 21688628448709, "originOptions": [78379660108563, 78382908615071, 78384700300614, 78387444864153, 78389346600489] },
        { "userAnswer": ["78427162885770", "78430132621171", "78433968926487", "78435920890912"], id: 21699795221391, "originOptions": [78427162885770, 78430132621171, 78431831005327, 78433968926487, 78435920890912] },
        { "userAnswer": ["78546311135152"], id: 21729802966439, "originOptions": [78546311135152, 78547750511588, 78548717052922, 78551269549397] },
        { "userAnswer": ["78647293398446"], id: 21753288513760, "originOptions": [78640379748111, 78641631904863, 78644970587809, 78647293398446] },
        { "userAnswer": ["78909984420324"], id: 21830498596082, "originOptions": [78909984420324, 78912771887041] },
        { "userAnswer": ["79085168436927", "79085545839454"], id: 21873690397211, "originOptions": [79080110048470, 79082128173041, 79085168436927, 79085545839454] },
        { "userAnswer": ["79123904019599"], id: 21882881371985, "originOptions": [79123904019599, 79126101340520, 79128308695972, 79129226281671] },
        { "userAnswer": ["79214662147416"], id: 21904857273617, "originOptions": [79212122770022, 79214662147416, 79216569161295, 79220163077879] },
        { "userAnswer": ["79269951605513"], id: 21917356579824, "originOptions": [79267265453806, 79269951605513, 79271318070941, 79272405698145] },
        { "userAnswer": ["79301641515988"], id: 21931065101429, "originOptions": [79301641515988, 79302326016439] },
        { "userAnswer": ["78402466991585", "78402505620606", "78406394721839"], id: 21692341173123, "originOptions": [78402466991585, 78402505620606, 78406394721839, 78407066541958] },
        { "userAnswer": ["78423321649363"], id: 21696746345394, "originOptions": [78419445352953, 78420203187232, 78423321649363, 78425669241629] },
        { "userAnswer": ["78460615661556"], id: 21705146090764, "originOptions": [78457085979167, 78459768307211, 78460615661556, 78463681076217] },
        { "userAnswer": ["78847631623696"], id: 21808313067313, "originOptions": [78845809184596, 78847631623696, 78851132557327, 78851428791296] },
        { "userAnswer": ["78932015883133"], id: 21836094660295, "originOptions": [78928505585502, 78928951719606, 78932015883133, 78934086070931] },
        { "userAnswer": ["79015510282982", "79017778488084", "79019681454514"], id: 21858515961385, "originOptions": [79015510282982, 79017778488084, 79019681454514, 79021724188545] },
        { "userAnswer": ["79177943486089", "79181072469552", "79182761752078", "79185078947079"], id: 21896741251176, "originOptions": [79177484643745, 79177943486089, 79181072469552, 79182761752078, 79185078947079] },
        { "userAnswer": ["79204463057553"], id: 21902334462765, "originOptions": [79204463057553, 79205713649953, 79209187668183, 79210561417461] },
        { "userAnswer": ["79532997510078"], id: 21998620554308, "originOptions": [79532997510078, 79535262228933] },
        { "userAnswer": ["78359758677418", "78362443405870", "78367077159640", "78368880759517"], id: 21685189433085, "originOptions": [78359758677418, 78362443405870, 78365790666179, 78367077159640, 78368880759517] },
        { "userAnswer": ["78477301539569", "78477680145781", "78481370717983"], id: 21710027287019, "originOptions": [78477301539569, 78477680145781, 78481370717983, 78483445171339] },
        { "userAnswer": ["78610570579566"], id: 21744940319782, "originOptions": [78605076738829, 78608622169788, 78610570579566, 78612178322990] }, ,
        // 添加更多备选数组...
    ];

    while (selectedArrays.length < 10 && backupArrays.length > 0) {
        var randomIndex = Math.floor(Math.random() * backupArrays.length);
        selectedArrays.push(backupArrays[randomIndex]);
        backupArrays.splice(randomIndex, 1);
    }

    if (selectedArrays.length === 10) {
        requestBody.ques.splice(0, requestBody.ques.length, ...selectedArrays);
    }
}

$done({
    body: JSON.parse(JSON.stringify(requestBody))
});    while (selectedArrays.length < 10 && backupArrays.length > 0) {
        var randomIndex = Math.floor(Math.random() * backupArrays.length);
        selectedArrays.push(backupArrays[randomIndex]);
        backupArrays.splice(randomIndex, 1);
    }

    if (selectedArrays.length === 10) {
        requestBody.ques.splice(0, requestBody.ques.length, ...selectedArrays);
    }
}

$done({
    body: JSON.parse(JSON.stringify(requestBody))
});
