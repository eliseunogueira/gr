var lessonNumber = 65;var lessonTitle = "Kennen (To know)";var forExamples = ["Kennen","Er behauptet sie zu <strong>kennen</strong>.","du kennst","<strong>Kennst</strong> <em>du</em> meine Schwester?","er hat gekannt","<strong>Er hat</strong> sie seit Ewigkeiten <strong>gekannt</strong>.","ich kannte","<strong>Ich kannte</strong> ihn, als er jung war.","du wirst kennen","Nach deinem Schwimmunterricht <strong>wirst du</strong> das Schwimmbad <strong>kennen</strong>.","ihr würdet kennen","Wenn ihr Unterricht genommen hättet, <strong>würdet ihr</strong> das Thema <strong>kennen</strong>."];var engExamples = ["To know","He claims <em>to know</em> them.","you know","Do <em>you know</em> my sister?","he has known","<em>He has known</em> her for ages.","I knew","<em>I knew</em> him when he was young.","you will know","<em>You will know</em> (your way around) the swimming pool after your swimming lessons.","you would know","If you had taken a class, <em>you would know</em> the topic."];var btnColor = ["#F30101","#5F0000"];

var forConj1 = ["ich kenn<strong>e</strong>","du kenn<strong>st</strong>","er/sie/es kenn<strong>t</strong>","wir kenn<strong>en</strong>","ihr kenn<strong>t</strong>","Sie kenn<strong>en</strong>","sie kenn<strong>en</strong>"];
var quizConj1 = ["kenne","kennst","kennt","kennen","kennt","kennen"];

var forConj2 = ["ich habe <strong>ge</strong>k<em>a</em>nn<strong>t</strong>","du hast <strong>ge</strong>k<em>a</em>nn<strong>t</strong>","er/sie/es hat <strong>ge</strong>k<em>a</em>nn<strong>t</strong>","wir haben <strong>ge</strong>k<em>a</em>nn<strong>t</strong>","ihr habt <strong>ge</strong>k<em>a</em>nn<strong>t</strong>","Sie haben <strong>ge</strong>k<em>a</em>nn<strong>t</strong>","sie haben <strong>ge</strong>k<em>a</em>nn<strong>t</strong>"];
var quizConj2 = ["habe gekannt","hast gekannt","hat gekannt","haben gekannt","habt gekannt","haben gekannt"];

var forConj3 = ["ich k<em>a</em>nn<strong>te</strong>","du k<em>a</em>nn<strong>test</strong>","er/sie/es k<em>a</em>nn<strong>te</strong>","wir k<em>a</em>nn<strong>ten</strong>","ihr k<em>a</em>nn<strong>tet</strong>","Sie k<em>a</em>nn<strong>ten</strong>","sie k<em>a</em>nn<strong>ten</strong>"];
var quizConj3 = ["kannte","kanntest","kannte","kannten","kanntet","kannten"];

var forConj4 = ["ich werde kenn<strong>en</strong>","du wirst kenn<strong>en</strong>","er/sie/es wird kenn<strong>en</strong>","wir werden kenn<strong>en</strong>","ihr werdet kenn<strong>en</strong>","Sie werden kenn<strong>en</strong>","sie werden kenn<strong>en</strong>"];
var quizConj4 = ["werde kennen","wirst kennen","wird kennen","werden kennen","werdet kennen","werden kennen"];

var forConj5 = ["ich würde kenn<strong>en</strong>","du würdest kenn<strong>en</strong>","er/sie/es würde kenn<strong>en</strong>","wir würden kenn<strong>en</strong>","ihr würdet kenn<strong>en</strong>","Sie würden kenn<strong>en</strong>","sie würden kenn<strong>en</strong>"];
var quizConj5 = ["würde kennen","würdest kennen","würde kennen","würden kennen","würdet kennen","würden kennen"];

var engConj1  = ["I know","you know (informal)","he/she/it knows","we know","you know (plural)","you know (formal)","they know"];
var engConj2  = ["I have known","you have known (informal)","he/she/it has known","we have known","you have known (plural)","you have known (formal)","they have known"];
var engConj3  = ["I knew","you knew (informal)","he/she/it knew","we knew","you knew (plural)","you knew (formal)","they knew"];
var engConj4  = ["I will know","you will know (informal)","he/she/it will know","we will know","you will know (plural)","you will know (formal)","they will know"];
var engConj5  = ["I would know","you would know (informal)","he/she/it would know","we would know","you would know (plural)","you would know (formal)","they would know"];

var verbTypeNum = "4";var forConj6 = "Haben";var forConj7 = "K";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is mixed because the "e" in the stem changes to an "a" in some of the conjugation. The changes are noted in black in this lesson.'];

var extraNote='In German, there are two verbs that are the equivalent of "to know". <br><strong>Kennen</strong> is used when you know: People, pets or places. It is also used for "to be familiar with".<br><strong>Wissen</strong> is used when you know: Facts, information or "how to".';