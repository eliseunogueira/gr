var lessonNumber = 36;var lessonTitle = "Kaufen (To buy)";var forExamples = ["Kaufen","Sie wollen ein Haus <strong>kaufen</strong>.","sie kauft","<strong>Sie kauft</strong> neue Jeans für ihren Sohn.","ich habe gekauft","<strong>Ich habe</strong> alles <strong>gekauft</strong>, was ich brauchte.","wir kauften","<strong>Wir kauften</strong> viele Kleider im Sonderangebot.","ich werde kaufen","<strong>Ich werde</strong> die Tomaten für das Abendessen <strong>kaufen</strong>.","du würdest kaufen","<strong>Du würdest</strong> dieses Auto <strong>kaufen</strong>, wenn es funktionieren würde."];var engExamples = ["To buy ","They want <em>to buy</em> a house.","she is buying","<em>She is buying</em> new jeans for her son.","I bought","<em>I bought</em> everything I needed.","we were buying","<em>We were buying</em> a lot of clothes on sale.","I will buy","<em>I will buy</em> the tomatoes for dinner.","you would buy","<em>You would buy</em> this car if it were functioning."];var btnColor = ["#00BFFF","#001E51"];

var forConj1 = ["ich kauf<strong>e</strong>","du kauf<strong>st</strong>","er/sie/es kauf<strong>t</strong>","wir kauf<strong>en</strong>","ihr kauf<strong>t</strong>","Sie kauf<strong>en</strong>","sie kauf<strong>en</strong>"];
var quizConj1 = ["kaufe","kaufst","kauft","kaufen","kauft","kaufen"];

var forConj2 = ["ich habe <strong>ge</strong>kauf<strong>t</strong>","du hast <strong>ge</strong>kauf<strong>t</strong>","er/sie/es hat <strong>ge</strong>kauf<strong>t</strong>","wir haben <strong>ge</strong>kauf<strong>t</strong>","ihr habt <strong>ge</strong>kauf<strong>t</strong>","Sie haben <strong>ge</strong>kauf<strong>t</strong>","sie haben <strong>ge</strong>kauf<strong>t</strong>"];
var quizConj2 = ["habe gekauft","hast gekauft","hat gekauft","haben gekauft","habt gekauft","haben gekauft"];

var forConj3 = ["ich kauf<strong>te</strong>","du kauf<strong>test</strong>","er/sie/es kauf<strong>te</strong>","wir kauf<strong>ten</strong>","ihr kauf<strong>tet</strong>","Sie kauf<strong>ten</strong>","sie kauf<strong>ten</strong>"];
var quizConj3 = ["kaufte","kauftest","kaufte","kauften","kauftet","kauften"];

var forConj4 = ["ich werde kauf<strong>en</strong>","du wirst kauf<strong>en</strong>","er/sie/es wird kauf<strong>en</strong>","wir werden kauf<strong>en</strong>","ihr werdet kauf<strong>en</strong>","Sie werden kauf<strong>en</strong>","sie werden kauf<strong>en</strong>"];
var quizConj4 = ["werde kaufen","wirst kaufen","wird kaufen","werden kaufen","werdet kaufen","werden kaufen"];

var forConj5 = ["ich würde kauf<strong>en</strong>","du würdest kauf<strong>en</strong>","er/sie/es würde kauf<strong>en</strong>","wir würden kauf<strong>en</strong>","ihr würdet kauf<strong>en</strong>","Sie würden kauf<strong>en</strong>","sie würden kauf<strong>en</strong>"];
var quizConj5 = ["würde kaufen","würdest kaufen","würde kaufen","würden kaufen","würdet kaufen","würden kaufen"];

var engConj1  = ["I am buying","you are buying (informal)","he/she/it is buying","we are buying","you are buying (plural)","you are buying (formal)","they are buying"];
var engConj2  = ["I bought","you bought (informal)","he/she/it bought","we bought","you bought (plural)","you bought (formal)","they bought"];
var engConj3  = ["I was buying","you were buying (informal)","he/she/it was buying","we were buying","you were buying (plural)","you were buying (formal)","they were buying"];
var engConj4  = ["I will buy","you will buy (informal)","he/she/it will buy","we will buy","you will buy (plural)","you will buy (formal)","they will buy"];
var engConj5  = ["I would buy","you would buy (informal)","he/she/it would buy","we would buy","you would buy (plural)","you would buy (formal)","they would buy"];

var verbTypeNum = "1";var forConj6 = "Haben";var forConj7 = "Kauf";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = [''];

if(sessionStorage["menuType"] == "guidedSection" && localStorage.getItem("GermanlegacyPath")){var extraNote = 'This lesson is part of our "individual verbs" module which goes over different tenses. Ouino uses an immersion approach. Rest assured, you are not expected to understand everything at first. Simply focus on the present tense for now and start immersing yourself in the other tenses. Our program has been carefully thought out and everything comes together, but the entire program should be seen as one entity.';}
