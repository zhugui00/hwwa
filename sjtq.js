var requestBody = JSON.parse(decodeURIComponent($request.body));
console.log(requestBody); // 打印请求体内容

var backupArrays = [
{"userAnswer": ["85730823275909", "85732399792099", "85735955706505"], "id": 23718189200069, "originOptions": [85727891299437, 85730823275909, 85732399792099, 85735955706505]},
{"userAnswer": ["85759611459244"], "id": 23724983420855, "originOptions": [85755989358376, 85759611459244, 85760603047596, 85763228038058]},
{"userAnswer": ["86099328150823", "86105947851840"], "id": 23821989810004, "originOptions": [86099328150823, 86102923791313, 86105454165693, 86105947851840, 86108491602277]},
{"userAnswer": ["87023995964154"], "id": 24079459296704, "originOptions": [87018453870037, 87020547714336, 87023995964154, 87025763760564]},
{"userAnswer": ["87045243691894"], "id": 24084649469658, "originOptions": [87045243691894, 87047642486558, 87048980189626, 87050448390475]},
{"userAnswer": ["87255206256992"], "id": 24137537186934, "originOptions": [87253028345185, 87255206256992, 87257104399698, 87258815778323]},
{"userAnswer": ["87348704514360"], "id": 24160996217566, "originOptions": [87348704514360, 87350907803127, 87351418147546, 87354132037932]},
{"userAnswer": ["87433523667571"], "id": 24189304572736, "originOptions": [87433523667571, 87435893139974]},
{"userAnswer": ["87532120189048", "87533966218641", "87535934963453", "87539567999979"], "id": 24220305608952, "originOptions": [87532120189048, 87533966218641, 87535934963453, 87539567999979]},
{"userAnswer": ["87618074411337"], "id": 24244911677959, "originOptions": [87616855776676, 87618074411337]},
{"userAnswer": ["85668860857362"], "id": 23702576215017, "originOptions": [85663538232935, 85665667112162, 85668860857362, 85671598745576]},
{"userAnswer": ["85919756094957"], "id": 23776852142456, "originOptions": [85919756094957, 85922866179846, 85925040697007, 85926131492738]},
{"userAnswer": ["86068817388204"], "id": 23813177768638, "originOptions": [86065649563161, 86068817388204, 86069388879399, 86072046351364]},
{"userAnswer": ["86111702213849", "86112492813212", "86115007381475", "86118068055895", "86118480738054"], "id": 23823384809654, "originOptions": [86111702213849, 86112492813212, 86115007381475, 86118068055895, 86118480738054]},
{"userAnswer": ["87092009245773"], "id": 24095061579737, "originOptions": [87088078844930, 87091107870567, 87092009245773, 87093757098066]},
{"userAnswer": ["87168280062845"], "id": 24115360265942, "originOptions": [87165101536565, 87168280062845, 87169044157458, 87171371050940]},
{"userAnswer": ["87234112057975", "87235332734296", "87238525859637", "87240825101994"], "id": 24133416235227, "originOptions": [87234112057975, 87235332734296, 87238525859637, 87240825101994, 87241590308776]},
{"userAnswer": ["87471512580415", "87475929666967", "87478793071271"], "id": 24203341059731, "originOptions": [87471512580415, 87473849877449, 87475929666967, 87478793071271]},
{"userAnswer": ["87484561169697"], "id": 24207121399795, "originOptions": [87484561169697, 87488425308579]},
{"userAnswer": ["87611756041919"], "id": 24241525086944, "originOptions": [87611756041919, 87614492654910]},
{"userAnswer": ["85636224041126", "85637720432166", "85641383081869"], "id": 23697373960219, "originOptions": [85636224041126, 85637720432166, 85641383081869, 85642902220276]},
{"userAnswer": ["85776559574584"], "id": 23729200287930, "originOptions": [85773274320141, 85776559574584]},
{"userAnswer": ["85934002565403"], "id": 23778164258179, "originOptions": [85928907881430, 85929653887590, 85931744065182, 85934002565403]},
{"userAnswer": ["87072576227474"], "id": 24092469203477, "originOptions": [87071746313432, 87072576227474, 87076116193938, 87078294093675]},
{"userAnswer": ["87148089726295"], "id": 24111276029883, "originOptions": [87148089726295, 87150960271659, 87152827431862, 87153671162662]},
{"userAnswer": ["87461111693498"], "id": 24198716356235, "originOptions": [87455608425979, 87457882974367, 87460499016776, 87461111693498]},
{"userAnswer": ["87621941043637"], "id": 24245407453382, "originOptions": [87621489573934, 87621941043637]},
{"userAnswer": ["85681150446833", "85682677287143", "85684692716277"], "id": 23707034246670, "originOptions": [85681150446833, 85682677287143, 85684692716277, 85688549491140]},
{"userAnswer": ["85818729053996"], "id": 23743484248902, "originOptions": [85816111491643, 85818729053996, 85821485957112, 85822734886058]},
{"userAnswer": ["85976180560697"], "id": 23788405923967, "originOptions": [85970844313906, 85973439580957, 85976180560697, 85978324037463]},
{"userAnswer": ["86149629049369"], "id": 23833053507573, "originOptions": [86149629049369, 86151446847251]},
{"userAnswer": ["87042953421695"], "id": 24083093179414, "originOptions": [87037165302391, 87037800160755, 87041089172575, 87042953421695]},
{"userAnswer": ["87321492536075"], "id": 24153084872310, "originOptions": [87321492536075, 87323430243441, 87326749043670, 87328772937599]},
{"userAnswer": ["87400016239917"], "id": 24174158386318, "originOptions": [87400016239917, 87401539411594]},
{"userAnswer": ["87550325230289", "87551143290629", "87554602754443", "87555279295072", "87558890357432"], "id": 24224684148175, "originOptions": [87550325230289, 87551143290629, 87554602754443, 87555279295072, 87558890357432]},
{"userAnswer": ["85678720860307"], "id": 23704095025010, "originOptions": [85672926142667, 85675340491337, 85676395185820, 85678720860307]},
{"userAnswer": ["85814539966785"], "id": 23741540395541, "originOptions": [85807131624738, 85810639145424, 85812317347484, 85814539966785]},
{"userAnswer": ["85914967038582"], "id": 23774669565539, "originOptions": [85914967038582, 85918076235646]},
{"userAnswer": ["86134614097765", "86135678433023", "86139246165381"], "id": 23828038553806, "originOptions": [86131728776442, 86134614097765, 86135678433023, 86139246165381]},
{"userAnswer": ["87198775005729", "87201554726614", "87203046790332", "87206339778180"], "id": 24123043539145, "originOptions": [87198775005729, 87201554726614, 87203046790332, 87206339778180]},
{"userAnswer": ["87286871676614", "87288826596742", "87293023600951"], "id": 24145701333505, "originOptions": [87286871676614, 87288826596742, 87293023600951, 87294214404281]},
{"userAnswer": ["87334477906934"], "id": 24156159009519, "originOptions": [87330058322733, 87331952833969, 87334477906934, 87336436136057]},
{"userAnswer": ["85954008730516"], "id": 23784460562059, "originOptions": [85954008730516, 85956458117566, 85958764474063, 85959674848144]},
{"userAnswer": ["86140683429297"], "id": 23830559225379, "originOptions": [86140683429297, 86142426694814]},
{"userAnswer": ["87053695528067"], "id": 24087116398257, "originOptions": [87053695528067, 87055072849765, 87058845661841, 87059445314478]},
{"userAnswer": ["87370228015409"], "id": 24164471537013, "originOptions": [87365186253427, 87367636385623, 87370228015409, 87371274152860]},
{"userAnswer": ["87464182100275"], "id": 24200494121135, "originOptions": [87464182100275, 87466715147600, 87468344087612, 87469857764480]},
{"userAnswer": ["87607116318660"], "id": 24238814276150, "originOptions": [87607116318660, 87610254036588]},
{"userAnswer": ["85782597343453"], "id": 23733039731130, "originOptions": [85782597343453, 85784833633219]},
{"userAnswer": ["85842041341871"], "id": 23749481148256, "originOptions": [85842041341871, 85845404057768, 85847645307364, 85849525992958]},
{"userAnswer": ["85867951747529", "85870724591308", "85872075182868", "85873611555298"], "id": 23757325645035, "originOptions": [85867951747529, 85870724591308, 85872075182868, 85873611555298]},
{"userAnswer": ["87125876565716"], "id": 24103807870078, "originOptions": [87122958788757, 87124390688809, 87125876565716, 87129257538409]},
{"userAnswer": ["87219143576346"], "id": 24128597841273, "originOptions": [87216292017569, 87219143576346, 87220793373551, 87222549160120]},
{"userAnswer": ["87591780709972", "87595339703234", "87597887573577", "87599589608140", "87600705213639"], "id": 24235730252857, "originOptions": [87591780709972, 87595339703234, 87597887573577, 87599589608140, 87600705213639]},
{"userAnswer": ["87602802957572"], "id": 24238530802319, "originOptions": [87602802957572, 87605286176066]},
{"userAnswer": ["85988413306094"], "id": 23792054273451, "originOptions": [85988413306094, 85990887167125, 85993067055338, 85995759811167]},
{"userAnswer": ["86121377066730", "86124303230214", "86125997818065", "86129871775156"], "id": 23826172864772, "originOptions": [86121377066730, 86124303230214, 86125997818065, 86127074286939, 86129871775156]},
{"userAnswer": ["87119559515871"], "id": 24101709532350, "originOptions": [87113173110813, 87115150392213, 87117411253251, 87119559515871]},
{"userAnswer": ["87424913611038"], "id": 24186245580858, "originOptions": [87424913611038, 87427478202349]},
{"userAnswer": ["87560680133229"], "id": 24226726790828, "originOptions": [87560680133229, 87561616079098]},
{"userAnswer": ["87583449445210", "87586031107320", "87588164979205", "87590067768671"], "id": 24233735586376, "originOptions": [87583449445210, 87586031107320, 87588164979205, 87590067768671]},
{"userAnswer": ["85777492295302"], "id": 23730951887992, "originOptions": [85777492295302, 85780265960762]},
{"userAnswer": ["85951895927815"], "id": 23781413346914, "originOptions": [85944554397339, 85947310172604, 85949789860501, 85951895927815]},
{"userAnswer": ["85967631920201"], "id": 23787310554682, "originOptions": [85962319392565, 85965684363384, 85967631920201, 85968153962485]},
{"userAnswer": ["86075602690947"], "id": 23815578609928, "originOptions": [86074956144363, 86075602690947, 86079637411287, 86080835514862]},
{"userAnswer": ["85796430575333"], "id": 23736863812804, "originOptions": [85790720715530, 85792182702885, 85795916290881, 85796430575333]},
{"userAnswer": ["85836040710505"], "id": 23748919019009, "originOptions": [85834443164899, 85836040710505, 85838719142918, 85839232839875]},
{"userAnswer": ["87174672902476", "87176811302008"], "id": 24117525371794, "originOptions": [87174672902476, 87176811302008, 87177362686053, 87180647440047]},
{"userAnswer": ["87414593616196"], "id": 24178797144242, "originOptions": [87412840282582, 87414593616196]},
{"userAnswer": ["87417362244821"], "id": 24181708400153, "originOptions": [87417362244821, 87417823464152]},
{"userAnswer": ["87525999710642", "87528201325158", "87531040320354"], "id": 24217744452604, "originOptions": [87523038821296, 87525999710642, 87528201325158, 87531040320354]},
{"userAnswer": ["85643880933744", "85646976759200", "85649782310264"], "id": 23697498767852, "originOptions": [85643880933744, 85646976759200, 85649782310264, 85650589807137]},
{"userAnswer": ["85787740733065"], "id": 23736098067432, "originOptions": [85786867743483, 85787740733065]},
{"userAnswer": ["86002938252173"], "id": 23795762651150, "originOptions": [85996499681962, 85999261415836, 86002134284334, 86002938252173]},
{"userAnswer": ["87062955414047"], "id": 24089648916934, "originOptions": [87062955414047, 87065401270688, 87066168916487, 87067817515526]},
{"userAnswer": ["85692704791235"], "id": 23709870084176, "originOptions": [85689632635926, 85692704791235, 85693410610507, 85695826571369]},
{"userAnswer": ["85897738923723"], "id": 23766022310553, "originOptions": [85897738923723, 85901394059071]},
{"userAnswer": ["87186593439129"], "id": 24118465542712, "originOptions": [87183444509774, 87185223835155, 87186593439129, 87189305595231]},
{"userAnswer": ["87207236279662"], "id": 24125230574999, "originOptions": [87207236279662, 87211080769403, 87212556329869, 87214055834283]},
{"userAnswer": ["87245841025254", "87251127634952"], "id": 24134102994850, "originOptions": [87244518219800, 87245841025254, 87249605073642, 87251127634952]},
{"userAnswer": ["87281307672449"], "id": 24143350663439, "originOptions": [87278544359590, 87281307672449, 87283221651543, 87284665244429]},
{"userAnswer": ["87312331293747"], "id": 24149880137379, "originOptions": [87305226693519, 87306258574144, 87308671554650, 87312331293747]},
{"userAnswer": ["87421404049139"], "id": 24183007280816, "originOptions": [87421404049139, 87422966083278]},
{"userAnswer": ["85652940530141", "85655918306036", "85657301074571", "85660110078633", "85661919859600"], "id": 23699990521987, "originOptions": [85652940530141, 85655918306036, 85657301074571, 85660110078633, 85661919859600]},
{"userAnswer": ["85885392853480", "85887866782102", "85889683235421", "85891517872193"], "id": 23759943932828, "originOptions": [85885392853480, 85887866782102, 85889683235421, 85891517872193]},
{"userAnswer": ["85894240858276"], "id": 23763231708137, "originOptions": [85894240858276, 85895430034913]},
{"userAnswer": ["86034468521975"], "id": 23803358129756, "originOptions": [86030773265104, 86034468521975, 86036217930462, 86036876975464]},
{"userAnswer": ["87105624531211"], "id": 24099077832317, "originOptions": [87105624531211, 87108279760869, 87108473778233, 87111167034712]},
{"userAnswer": ["87272807789871"], "id": 24140225880603, "originOptions": [87270879778870, 87272807789871, 87274937161932, 87276695899448]},
{"userAnswer": ["87514433164067", "87519525885440", "87521293393011"], "id": 24216129361510, "originOptions": [87514433164067, 87516454525923, 87519525885440, 87521293393011]},
{"userAnswer": ["85904176679896"], "id": 23767631064570, "originOptions": [85903378185755, 85904176679896]},
{"userAnswer": ["85943614990680"], "id": 23779745050510, "originOptions": [85936870971294, 85939300835291, 85941493249196, 85943614990680]},
{"userAnswer": ["86044578157061"], "id": 23805045934663, "originOptions": [86038967602732, 86042871325351, 86044578157061, 86046934627839]},
{"userAnswer": ["87226146214710"], "id": 24130037441903, "originOptions": [87226146214710, 87228158301114, 87229074490807, 87232575255970]},
{"userAnswer": ["87341098584700"], "id": 24157713311459, "originOptions": [87338502591155, 87341098584700, 87344068931475, 87345681808175]},
{"userAnswer": ["85736935269447", "85739107868861", "85742237543359", "85744556544662", "85746578778735"], "id": 23721079571734, "originOptions": [85736935269447, 85739107868861, 85742237543359, 85744556544662, 85746578778735]},
{"userAnswer": ["86027469989010"], "id": 23802379039399, "originOptions": [86021978653668, 86025088897157, 86027469989010, 86028680084258]},
{"userAnswer": ["86055961923644"], "id": 23807274036710, "originOptions": [86048425667471, 86050969969474, 86051867065067, 86055961923644]},
{"userAnswer": ["87503469810353"], "id": 24211746191900, "originOptions": [87498848073249, 87500569398205, 87503469810353, 87504950153584]},
{"userAnswer": ["86011626911022"], "id": 23797504590281, "originOptions": [86006273509993, 86007919341380, 86010452214323, 86011626911022]},
{"userAnswer": ["87080710203395"], "id": 24093295808548, "originOptions": [87078705749058, 87080710203395, 87082640921110, 87086421758369]},
{"userAnswer": ["87196412233514"], "id": 24122036832571, "originOptions": [87190738060078, 87193976456587, 87196412233514, 87196662981072]},
{"userAnswer": ["87316511713850"], "id": 24151568899991, "originOptions": [87313261695435, 87316511713850, 87317200071894, 87320635676001]},
{"userAnswer": ["87429285806104"], "id": 24188461133388, "originOptions": [87429285806104, 87431841190054]},
{"userAnswer": ["86089767829600"], "id": 23815597630513, "originOptions": [86082626072016, 86084037108691, 86087932357382, 86089767829600]},
{"userAnswer": ["87096553877514"], "id": 24098209928977, "originOptions": [87096553877514, 87098868777981, 87100558266097, 87103279327265]},
{"userAnswer": ["87162917967299"], "id": 24112933729714, "originOptions": [87156556615245, 87159006640419, 87159970407738, 87162917967299]},
{"userAnswer": ["87439264651360"], "id": 24193241145313, "originOptions": [87438376009606, 87439264651360]},
{"userAnswer": ["87509678821573"], "id": 24214365427515, "originOptions": [87505780415016, 87509678821573, 87510367286182, 87513337879827]},
{"userAnswer": ["87540381017826", "87545986177779"], "id": 24222579757602, "originOptions": [87540381017826, 87543966051052, 87545986177779, 87547099684141]},
{"userAnswer": ["85627108588734"], "id": 23694209458987, "originOptions": [85627108588734, 85630322974603, 85631563545916, 85634173027569]},
{"userAnswer": ["85717533735922", "85720485077738", "85722138396884", "85723637674938", "85725606771936"], "id": 23716328959645, "originOptions": [85717533735922, 85720485077738, 85722138396884, 85723637674938, 85725606771936]},
{"userAnswer": ["87480895312788"], "id": 24206154808490, "originOptions": [87480895312788, 87482969221444]},
{"userAnswer": ["85802777064972"], "id": 23739539463857, "originOptions": [85799488064883, 85802641065085, 85802777064972, 85805851836817]},
{"userAnswer": ["87449712546161"], "id": 24196770552957, "originOptions": [87445564379335, 87449712546161, 87449973327150, 87453260383770]},
{"userAnswer": ["85829043117593"], "id": 23744925705112, "originOptions": [85825249114770, 85828189734218, 85829043117593, 85830852193531]},
{"userAnswer": ["85876343589292", "85880176762937", "85884124351837"], "id": 23758097699808, "originOptions": [85876343589292, 85878590859330, 85880176762937, 85884124351837]},
{"userAnswer": ["85909197713505"], "id": 23770413712565, "originOptions": [85906138132024, 85909197713505]},
{"userAnswer": ["85709665832136", "85711532647528", "85712532992621", "85714688884839"], "id": 23713286055887, "originOptions": [85709665832136, 85711532647528, 85712532992621, 85714688884839]},
{"userAnswer": ["85754357691938"], "id": 23721994062671, "originOptions": [85748471313985, 85751073881702, 85751364222464, 85754357691938]},
{"userAnswer": ["86157630207385"], "id": 23838682509980, "originOptions": [86157630207385, 86160303141067]},
{"userAnswer": ["87563965695313", "87566288294538", "87569473983104", "87570239341110"], "id": 24228361098801, "originOptions": [87563965695313, 87566288294538, 87569473983104, 87570239341110]},
{"userAnswer": ["85854079088784"], "id": 23752934954910, "originOptions": [85851004570479, 85854079088784, 85856006017320, 85858410896644]},
{"userAnswer": ["87404060849603"], "id": 24175204482596, "originOptions": [87404060849603, 87406791561393]},
{"userAnswer": ["87137410750538"], "id": 24107412452573, "originOptions": [87129912576802, 87133446276439, 87135740558243, 87137410750538]},
{"userAnswer": ["86021095327123"], "id": 23798470231694, "originOptions": [86014235441961, 86017160962045, 86018319475445, 86021095327123]},
{"userAnswer": ["87572971922448", "87575810725507", "87577742078602", "87580102479836", "87582311713266"], "id": 24231881940855, "originOptions": [87572971922448, 87575810725507, 87577742078602, 87580102479836, 87582311713266]},
{"userAnswer": ["87445511452766"], "id": 24195668493669, "originOptions": [87442914843411, 87445511452766]},
{"userAnswer": ["87297339069246"], "id": 24147882672719, "originOptions": [87297339069246, 87299376940612, 87299879905492, 87303632493435]},
{"userAnswer": ["85982772273048"], "id": 23790923520645, "originOptions": [85980158802119, 85982772273048, 85984562431230, 85986783167017]},
{"userAnswer": ["87261493722361"], "id": 24138924452952, "originOptions": [87261493722361, 87264794329251, 87265613377396, 87267860838483]},
{"userAnswer": ["87027742977767", "87030726998499", "87032324390781"], "id": 24081357645255, "originOptions": [87027742977767, 87030726998499, 87032324390781, 87033230913817]},
{"userAnswer": ["86147252824351"], "id": 23831468760805, "originOptions": [86144421478857, 86147252824351]},
{"userAnswer": ["85911300728422"], "id": 23770946349432, "originOptions": [85911300728422, 85912778215627]},
{"userAnswer": ["87360736514672"], "id": 24162162686716, "originOptions": [87356154893480, 87358030087811, 87360736514672, 87363769725679]},
{"userAnswer": ["86156733293993"], "id": 23835879770934, "originOptions": [86154444033314, 86156733293993]},
{"userAnswer": ["85624076418537"], "id": 23691964289712, "originOptions": [85618989377627, 85620909521289, 85624076418537, 85624676770328]},
{"userAnswer": ["87139223941688", "87140602661511", "87143372574998"], "id": 24109318646153, "originOptions": [87139223941688, 87140602661511, 87143372574998, 87144950346209]},
{"userAnswer": ["85699508888928", "85702632111991", "85708008492902"], "id": 23712320131516, "originOptions": [85699508888928, 85701611293268, 85702632111991, 85705930302137, 85708008492902]},
{"userAnswer": ["86059072648072"], "id": 23810762831105, "originOptions": [86056407738719, 86059072648072, 86061871438286, 86064032904591]},
{"userAnswer": ["87491519559033"], "id": 24210011198393, "originOptions": [87489744783719, 87491519559033, 87493090589362, 87495828716220]},
{"userAnswer": ["86090818323416"], "id": 23819403054377, "originOptions": [86090818323416, 86094085917810, 86096131717044, 86098744261018]},
{"userAnswer": ["85859841444604", "85862420563261", "85863345331018", "85865644815523"], "id": 23753474195138, "originOptions": [85859841444604, 85862420563261, 85863345331018, 85865644815523]},
{"userAnswer": ["87411087059966"], "id": 24176481306284, "originOptions": [87408870497866, 87411087059966]},
{"userAnswer": ["85764173689336"], "id": 23726501725108, "originOptions": [85764173689336, 85766812134229, 85769300435654, 85771257309607]},
{"userAnswer": ["87375864167375"], "id": 24166322041268, "originOptions": [87373662299808, 87375864167375, 87377857484473, 87379286496130]},
{"userAnswer": ["87390787603368"], "id": 24170515484662, "originOptions": [87390787603368, 87392359110768, 87394254423270, 87397590103253]},
{"userAnswer": ["87384144075165"], "id": 24167824331538, "originOptions": [87382256498610, 87384144075165, 87385950144188, 87389107075831]},
];

var selectedArrays = [];
while (selectedArrays.length < 10) {
    var randomIndex = Math.floor(Math.random() * backupArrays.length);
    if (!selectedArrays.includes(backupArrays[randomIndex])) {
        selectedArrays.push(backupArrays[randomIndex]);
    }
}

if (requestBody && requestBody.ques) {
    for (var i = 0; i < requestBody.ques.length; i++) {
        var selectedArray = selectedArrays[i];
        requestBody.ques[i].userAnswer = selectedArray.userAnswer;
        requestBody.ques[i].id = selectedArray.id;
        requestBody.ques[i].originOptions = selectedArray.originOptions;
      }
      requestBody.useTimeSeconds = getRandomInt(30, 50); // 修改 useTimeSeconds 字段的值为随机整数
    } else {
      console.log('请求体格式不正确！');
    }
    
    console.log(requestBody);
    $done({
      body: JSON.stringify(requestBody, null, 2)
    }, false);
    
    // 生成指定范围内的随机整数
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
