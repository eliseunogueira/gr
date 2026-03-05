var lessonNumber = 101;var lessonTitle = "Anhalten (To stop)";var forExamples = ["Anhalten","Der Bus muss an der Kreuzung <strong>anhalten</strong>.","sie halten an","<strong>Die Läufer halten</strong> <em>an</em>, um sich auszuruhen.","es hat angehalten","<strong>Das Taxi hat</strong> an der Straßenecke <strong>angehalten</strong>.","du hieltst an","<strong>Du hieltst</strong> während des Laufens <em>an</em>, um Wasser zu trinken.","sie werden anhalten","<strong>Die Autos werden anhalten</strong>, um die Kinder die Straße überqueren zu lassen.","wir würden anhalten","Wenn wir müde wären, <strong>würden</strong> <em>wir</em> beim Laufen <strong>anhalten</strong>."];var engExamples = ["To stop","The bus has <em>to stop</em> at the intersection.","they are stopping","<em>The runners are stopping</em> to rest.","it stopped","<em>The taxi stopped</em> at the street corner.","you stopped","<em>You stopped</em> running to drink water.","they will stop","<em>The cars will stop</em> to let the children cross the street.","we would stop","If we were tired, <em>we would stop</em> running."];var btnColor = ["#F30101","#5F0000"];

var forConj1 = ["ich halt<strong>e</strong> an","du h<em>ä</em>lt<strong>st</strong> an","er/sie/es h<em>ä</em>lt an","wir halt<strong>en</strong> an","ihr halt<strong>et</strong> an","Sie halt<strong>en</strong> an","sie halt<strong>en</strong> an"];
var quizConj1 = ["halte an","hältst an","hält an","halten an","haltet an","halten an"];

var forConj2 = ["ich habe an<strong>ge</strong>halt<strong>en</strong>","du hast an<strong>ge</strong>halt<strong>en</strong>","er/sie/es hat an<strong>ge</strong>halt<strong>en</strong>","wir haben an<strong>ge</strong>halt<strong>en</strong>","ihr habt an<strong>ge</strong>halt<strong>en</strong>","Sie haben an<strong>ge</strong>halt<strong>en</strong>","sie haben an<strong>ge</strong>halt<strong>en</strong>"];
var quizConj2 = ["habe angehalten","hast angehalten","hat angehalten","haben angehalten","habt angehalten","haben angehalten"];

var forConj3 = ["ich h<em>ie</em>lt an","du h<em>ie</em>lt<strong>st</strong> an","er/sie/es h<em>ie</em>lt an","wir h<em>ie</em>lt<strong>en</strong> an","ihr h<em>ie</em>lt<strong>et</strong> an","Sie h<em>ie</em>lt<strong>en</strong> an","sie h<em>ie</em>lt<strong>en</strong> an"];
var quizConj3 = ["hielt an","hieltst an","hielt an","hielten an","hieltet an","hielten an"];

var forConj4 = ["ich werde anhalt<strong>en</strong>","du wirst anhalt<strong>en</strong>","er/sie/es wird anhalt<strong>en</strong>","wir werden anhalt<strong>en</strong>","ihr werdet anhalt<strong>en</strong>","Sie werden anhalt<strong>en</strong>","sie werden anhalt<strong>en</strong>"];
var quizConj4 = ["werde anhalten","wirst anhalten","wird anhalten","werden anhalten","werdet anhalten","werden anhalten"];

var forConj5 = ["ich würde anhalt<strong>en</strong>","du würdest anhalt<strong>en</strong>","er/sie/es würde anhalt<strong>en</strong>","wir würden anhalt<strong>en</strong>","ihr würdet anhalt<strong>en</strong>","Sie würden anhalt<strong>en</strong>","sie würden anhalt<strong>en</strong>"];
var quizConj5 = ["würde anhalten","würdest anhalten","würde anhalten","würden anhalten","würdet anhalten","würden anhalten"];

var engConj1  = ["I am stopping","you are stopping (informal)","he/she/it is stopping","we are stopping","you are stopping (plural)","you are stopping (formal)","they are stopping"];
var engConj2  = ["I stopped","you stopped (informal)","he/she/it stopped","we stopped","you stopped (plural)","you stopped (formal)","they stopped"];
var engConj3  = ["I stopped","you stopped (informal)","he/she/it stopped","we stopped","you stopped (plural)","you stopped (formal)","they stopped"];
var engConj4  = ["I will stop","you will stop (informal)","he/she/it will stop","we will stop","you will stop (plural)","you will stop (formal)","they will stop"];
var engConj5  = ["I would stop","you would stop (informal)","he/she/it would stop","we would stop","you would stop (plural)","you would stop (formal)","they would stop"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "An + H_lt";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "a" in the stem changes to "ie" in some of the conjugation. The changes are shown in black in this lesson.'];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style=”opacity: 0;”>E.G.</em> <strong>An</strong>kommen = To arrive';