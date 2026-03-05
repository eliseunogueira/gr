var lessonNumber = 34;var lessonTitle = "Bitten um (To ask for)";var forExamples = ["Bitten (um)","Der Angestellte geht zum Chef, um ihn <em>um</em> eine Gehaltserhöhung zu <strong>bitten</strong>.","sie bitten (um)","<strong>Sie bitten um</strong> Hilfe, wenn sie nicht verstehen.","er hat gebeten (um)","<strong>Er hat</strong> mich <em>um</em> fünf Euro <strong>gebeten</strong>.","ich bat (um)","<strong>Ich bat</strong> meine Tochter <em>um</em> Hilfe.","ich werde bitten (um)","<strong>Ich werde</strong> meinen Bruder <em>um</em> Hilfe <strong>bitten</strong>.","du würdest bitten (um)","Wenn es nötig wäre, <strong>würdest du um</strong> Hilfe <strong>bitten</strong>. "];var engExamples = ["To ask (for)","The employee is going <em>to ask</em> the boss <em>for</em> a raise.","they ask (for)","<em>They ask for</em> help when they don't understand.","he asked (for) ","<em>He asked</em> me <em>for</em> five Euro.","I asked (for)","<em>I asked</em> my daughter <em>for</em> help.","I will ask (for)","<em>I will ask</em> my brother <em>for</em> help.","you would ask (for)","If it were necessary, <em>you would ask for</em> help."];var btnColor = ["#0066FF","#00025B"];

var forConj1 = ["ich bitt<strong>e</strong>","du bitt<strong>est</strong>","er/sie/es bitt<strong>et</strong>","wir bitt<strong>en</strong>","ihr bitt<strong>et</strong>","Sie bitt<strong>en</strong>","sie bitt<strong>en</strong>"];
var quizConj1 = ["bitte","bittest","bittet","bitten","bittet","bitten"];

var forConj2 = ["ich habe <strong>ge</strong>b<em>et</em><strong>en</strong>","du hast <strong>ge</strong>b<em>et</em><strong>en</strong>","er/sie/es hat <strong>ge</strong>b<em>et</em><strong>en</strong>","wir haben <strong>ge</strong>b<em>et</em><strong>en</strong>","ihr habt <strong>ge</strong>b<em>et</em><strong>en</strong>","Sie haben <strong>ge</strong>b<em>et</em><strong>en</strong>","sie haben <strong>ge</strong>b<em>et</em><strong>en</strong>"];
var quizConj2 = ["habe gebeten","hast gebeten","hat gebeten","haben gebeten","habt gebeten","haben gebeten"];

var forConj3 = ["ich b<em>at</em>","du b<em>at</em><strong>st</strong>","er/sie/es b<em>at</em>","wir b<em>at</em><strong>en</strong>","ihr b<em>at</em><strong>et</strong>","Sie b<em>at</em><strong>en</strong>","sie b<em>at</em><strong>en</strong>"];
var quizConj3 = ["bat","batst","bat","baten","batet","baten"];

var forConj4 = ["ich werde bitt<strong>en</strong>","du wirst bitt<strong>en</strong>","er/sie/es wird bitt<strong>en</strong>","wir werden bitt<strong>en</strong>","ihr werdet bitt<strong>en</strong>","Sie werden bitt<strong>en</strong>","sie werden bitt<strong>en</strong>"];
var quizConj4 = ["werde bitten","wirst bitten","wird bitten","werden bitten","werdet bitten","werden bitten"];

var forConj5 = ["ich würde bitt<strong>en</strong>","du würdest bitt<strong>en</strong>","er/sie/es würde bitt<strong>en</strong>","wir würden bitt<strong>en</strong>","ihr würdet bitt<strong>en</strong>","Sie würden bitt<strong>en</strong>","sie würden bitt<strong>en</strong>"];
var quizConj5 = ["würde bitten","würdest bitten","würde bitten","würden bitten","würdet bitten","würden bitten"];

var engConj1  = ["I ask","you ask (informal)","he/she/it asks","we ask","you ask (plural)","you ask (formal)","they ask"];
var engConj2  = ["I asked","you asked (informal)","he/she/it asked","we asked","you asked (plural)","you asked (formal)","they asked"];
var engConj3  = ["I asked","you asked (informal)","he/she/it asked","we asked","you asked (plural)","you asked (formal)","they asked"];
var engConj4  = ["I will ask","you will ask (informal)","he/she/it will ask","we will ask","you will ask (plural)","you will ask (formal)","they will ask"];
var engConj5  = ["I would ask","you would ask (informal)","he/she/it would ask","we would ask","you would ask (plural)","you would ask (formal)","they would ask"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "B_t";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];


var irregReason = ['This verb is strong because the "i" in the stem can change to either an "a" or an "e" in the some of the conjugation. The double "t" also becomes a single "t" in some cases. The changes are shown in black in this lesson.'];