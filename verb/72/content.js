var lessonNumber = 72;var lessonTitle = "(sich) Anhören (To listen to)";var forExamples = ["(sich) Anhören","Ich kann mir dieses Lied den ganzen Tag <strong>anhören</strong>.","sie hört (sich) an","<strong>Sie hört</strong> <em>sich</em> die Vogelstimmen <em>an</em>.","du hast (dir) angehört","<strong>Du hast</strong> <em>dir</em> ihr neues Album <strong>angehört</strong>?","wir hörten (uns) an","<strong>Wir hörten</strong> <em>uns</em> im Radio die Rede des Präsidenten <em>an</em>. ","wir werden (uns) anhören","<strong>Wir werden</strong> <em>uns</em> dieses Album oft <strong>anhören</strong>.","du würdest (dir) anhören","Wenn du Kopfhörer hättest, <strong>würdest</strong> <em>du dir</em> dieses Lied anders <strong>anhören</strong>."];var engExamples = ["To listen (to)","I can <em>listen to</em> this song all day long.","she is listening to","<em>She is listening to</em> the birds singing.","you listened to","<em>You listened to</em> her latest album?","we were listening to","<em>We were listening to</em> the president's speech on the radio.","we will listen to","<em>We will listen to</em> this album often.","you would listen to","If you had headphones, <em>you would listen to</em> this song differently."];var btnColor = ["#FFEE00","#B83D00"];

var forConj1 = ["ich hör<strong>e</strong> an","du hör<strong>st</strong> an","er/sie/es hör<strong>t</strong> an","wir hör<strong>en</strong> an","ihr hör<strong>t</strong> an","Sie hör<strong>en</strong> an","sie hör<strong>en</strong> an"];
var quizConj1 = ["höre an","hörst an","hört an","hören an","hört an","hören an"];

var forConj2 = ["ich habe an<strong>ge</strong>hör<strong>t</strong>","du hast an<strong>ge</strong>hör<strong>t</strong>","er/sie/es hat an<strong>ge</strong>hör<strong>t</strong>","wir haben an<strong>ge</strong>hör<strong>t</strong>","ihr habt an<strong>ge</strong>hör<strong>t</strong>","Sie haben an<strong>ge</strong>hör<strong>t</strong>","sie haben an<strong>ge</strong>hör<strong>t</strong>"];
var quizConj2 = ["habe angehört","hast angehört","hat angehört","haben angehört","habt angehört","haben angehört"];

var forConj3 = ["ich hör<strong>te</strong> an","du hör<strong>test</strong> an","er/sie/es hör<strong>te</strong> an","wir hör<strong>ten</strong> an","ihr hör<strong>tet</strong> an","Sie hör<strong>ten</strong> an","sie hör<strong>ten</strong> an"];
var quizConj3 = ["hörte an","hörtest an","hörte an","hörten an","hörtet an","hörten an"];

var forConj4 = ["ich werde anhör<strong>en</strong>","du wirst anhör<strong>en</strong>","er/sie/es wird anhör<strong>en</strong>","wir werden anhör<strong>en</strong>","ihr werdet anhör<strong>en</strong>","Sie werden anhör<strong>en</strong>","sie werden anhör<strong>en</strong>"];
var quizConj4 = ["werde anhören","wirst anhören","wird anhören","werden anhören","werdet anhören","werden anhören"];

var forConj5 = ["ich würde anhör<strong>en</strong>","du würdest anhör<strong>en</strong>","er/sie/es würde anhör<strong>en</strong>","wir würden anhör<strong>en</strong>","ihr würdet anhör<strong>en</strong>","Sie würden anhör<strong>en</strong>","sie würden anhör<strong>en</strong>"];
var quizConj5 = ["würde anhören","würdest anhören","würde anhören","würden anhören","würdet anhören","würden anhören"];

var engConj1  = ["I am listening to","you are listening to (informal)","he/she/it is listening to","we are listening to","you are listening to (plural)","you are listening to (formal)","they are listening to"];
var engConj2  = ["I listened to","you listened to (informal)","he/she/it listened to","we listened to","you listened to (plural)","you listened to (formal)","they listened to"];
var engConj3  = ["I was listening to","you were listening to (informal)","he/she/it was listening to","we were listening to","you were listening to (plural)","you were listening to (formal)","they were listening to"];
var engConj4  = ["I will listen to","you will listen to (informal)","he/she/it will listen to","we will listen to","you will listen to (plural)","you will listen to (formal)","they will listen to"];
var engConj5  = ["I would listen to","you would listen to (informal)","he/she/it would listen to","we would listen to","you would listen to (plural)","you would listen to (formal)","they would listen to"];

var verbTypeNum = "1";var forConj6 = "Haben";var forConj7 = "(sich) Anhör";var pronominal = true;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = [''];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style=”opacity: 0;”>E.G.</em> <strong>An</strong>kommen = To arrive';