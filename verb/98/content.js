var lessonNumber = 98;var lessonTitle = "Anfangen (To start)";var forExamples = ["Anfangen","Ich sollte bald <strong>anfangen</strong> zu arbeiten.","du fängst an","<strong>Du fängst</strong> <em>an</em> zu gehen!","sie haben angefangen","<em>Sie haben</em> <strong>angefangen</strong> zu verstehen.","ich fing an","<strong>Ich fing</strong> den Film ohne dich <em>an</em>.","sie wird anfangen","<strong>Sie wird</strong> bald <strong>anfangen</strong> zu laufen.","wir würden anfangen","Wenn wir aufhören könnten zu lachen, <strong>würden</strong> <em>wir</em> mit der Besprechung <strong>anfangen</strong>."];var engExamples = ["To start","I should <em>start</em> working soon.","you are starting","<em>You are starting</em> to walk!","they have started","<em>They have started</em> to understand.","I started","<em>I started</em> the movie without you.","she will start","<em>She will start</em> running soon.","we would start","If we could stop laughing, <em>we would start</em> the business meeting."];var btnColor = ["#90E700","#254800"];

var forConj1 = ["ich fang<strong>e</strong> an","du f<em>ä</em>ng<strong>st</strong> an","er/sie/es f<em>ä</em>ng<strong>t</strong> an","wir fang<strong>en</strong> an","ihr fang<strong>t</strong> an","Sie fang<strong>en</strong> an","sie fang<strong>en</strong> an"];
var quizConj1 = ["fange an","fängst an","fängt an","fangen an","fangt an","fangen an"];

var forConj2 = ["ich habe an<strong>ge</strong>fang<strong>en</strong>","du hast an<strong>ge</strong>fang<strong>en</strong>","er/sie/es hat an<strong>ge</strong>fang<strong>en</strong>","wir haben an<strong>ge</strong>fang<strong>en</strong>","ihr habt an<strong>ge</strong>fang<strong>en</strong>","Sie haben an<strong>ge</strong>fang<strong>en</strong>","sie haben an<strong>ge</strong>fang<strong>en</strong>"];
var quizConj2 = ["habe angefangen","hast angefangen","hat angefangen","haben angefangen","habt angefangen","haben angefangen"];

var forConj3 = ["ich f<em>i</em>ng an","du f<em>i</em>ng<strong>st</strong> an","er/sie/es f<em>i</em>ng an","wir f<em>i</em>ng<strong>en</strong> an","ihr f<em>i</em>ng<strong>t</strong> an","Sie f<em>i</em>ng<strong>en</strong> an","sie f<em>i</em>ng<strong>en</strong> an"];
var quizConj3 = ["fing an","fingst an","fing an","fingen an","fingt an","fingen an"];

var forConj4 = ["ich werde anfang<strong>en</strong>","du wirst anfang<strong>en</strong>","er/sie/es wird anfang<strong>en</strong>","wir werden anfang<strong>en</strong>","ihr werdet anfang<strong>en</strong>","Sie werden anfang<strong>en</strong>","sie werden anfang<strong>en</strong>"];
var quizConj4 = ["werde anfangen","wirst anfangen","wird anfangen","werden anfangen","werdet anfangen","werden anfangen"];

var forConj5 = ["ich würde anfang<strong>en</strong>","du würdest anfang<strong>en</strong>","er/sie/es würde anfang<strong>en</strong>","wir würden anfang<strong>en</strong>","ihr würdet anfang<strong>en</strong>","Sie würden anfang<strong>en</strong>","sie würden anfang<strong>en</strong>"];
var quizConj5 = ["würde anfangen","würdest anfangen","würde anfangen","würden anfangen","würdet anfangen","würden anfangen"];

var engConj1  = ["I am starting","you are starting (informal)","he/she/it is starting","we are starting","you are starting (plural)","you are starting (formal)","they are starting"];
var engConj2  = ["I have started","you have  started (informal)","he/she/it have started","we have started","you have started (plural)","you have started (formal)","they have started"];
var engConj3  = ["I started","you started (informal)","he/she/it started","we started","you started (plural)","you started (formal)","they started"];
var engConj4  = ["I will start","you will start (informal)","he/she/it will start","we will start","you will start (plural)","you will start (formal)","they will start"];
var engConj5  = ["I would start","you would start (informal)","he/she/it would start","we would start","you would start (plural)","you would start (formal)","they would start"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "An + f_ng";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "a" in the stem changes to an "i" in some of the conjugation. The changes are shown in black in this lesson.'];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style=”opacity: 0;”>E.G.</em> <strong>An</strong>kommen = To arrive';