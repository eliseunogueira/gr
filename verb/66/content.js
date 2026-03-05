var lessonNumber = 66;var lessonTitle = "Wissen (To know)";var forExamples = ["Wissen","Kinder wollen alles <strong>wissen</strong>.","wir wissen","<strong>Wir wissen</strong>, dass der Mond kein Planet ist.","er hat gewusst","<em>Er hat</em> <strong>gewusst</strong>, was zu tun ist, um das Feuer schnell zu löschen.","ich wusste","<strong>Ich wusste</strong>, wie man Gitarre spielt.","du wirst wissen","<strong>Du wirst wissen</strong>, was es bedeutet.","ihr würdet wissen","Wenn ihr gelernt hättet, <strong>würdet</strong> <em>ihr</em> <strong>wissen</strong>, was die Hauptstadt von Österreich ist. "];var engExamples = ["To know","Children want <em>to know</em> everything.","we know","<em>We know</em> that the moon is not a planet.","he knew","<em>He knew</em> what to do to extinguish the fire quickly.","I knew","<em>I knew</em> how to play guitar.","you will know","<em>You will know</em> what it means.","you would know","If you had studied, <em>you would know</em> what the capital of Austria is."];var btnColor = ["#1EEC00","#163F00"];

var forConj1 = ["ich w<em>eiß</em>","du w<em>eiß</em><strong>t</strong>","er/sie/es w<em>eiß</em>","wir wiss<strong>en</strong>","ihr wiss<strong>t</strong>","Sie wiss<strong>en</strong>","sie wiss<strong>en</strong>"];
var quizConj1 = ["weiß","weißt","weiß","wissen","wisst","wissen"];

var forConj2 = ["ich habe <strong>ge</strong>w<em>u</em>ss<strong>t</strong>","du hast <strong>ge</strong>w<em>u</em>ss<strong>t</strong>","er/sie/es hat <strong>ge</strong>w<em>u</em>ss<strong>t</strong>","wir haben <strong>ge</strong>w<em>u</em>ss<strong>t</strong>","ihr habt <strong>ge</strong>w<em>u</em>ss<strong>t</strong>","Sie haben <strong>ge</strong>w<em>u</em>ss<strong>t</strong>","sie haben <strong>ge</strong>w<em>u</em>ss<strong>t</strong>"];
var quizConj2 = ["habe gewusst","hast gewusst","hat gewusst","haben gewusst","habt gewusst","haben gewusst"];

var forConj3 = ["ich w<em>u</em>ss<strong>te</strong>","du w<em>u</em>ss<strong>test</strong>","er/sie/es w<em>u</em>ss<strong>te</strong>","wir w<em>u</em>ss<strong>ten</strong>","ihr w<em>u</em>ss<strong>tet</strong>","Sie w<em>u</em>ss<strong>ten</strong>","sie w<em>u</em>ss<strong>ten</strong>"];
var quizConj3 = ["wusste","wusstest","wusste","wussten","wusstet","wussten"];

var forConj4 = ["ich werde wiss<strong>en</strong>","du wirst wiss<strong>en</strong>","er/sie/es wird wiss<strong>en</strong>","wir werden wiss<strong>en</strong>","ihr werdet wiss<strong>en</strong>","Sie werden wiss<strong>en</strong>","sie werden wiss<strong>en</strong>"];
var quizConj4 = ["werde wissen","wirst wissen","wird wissen","werden wissen","werdet wissen","werden wissen"];

var forConj5 = ["ich würde wiss<strong>en</strong>","du würdest wiss<strong>en</strong>","er/sie/es würde wiss<strong>en</strong>","wir würden wiss<strong>en</strong>","ihr würdet wiss<strong>en</strong>","Sie würden wiss<strong>en</strong>","sie würden wiss<strong>en</strong>"];
var quizConj5 = ["würde wissen","würdest wissen","würde wissen","würden wissen","würdet wissen","würden wissen"];

var engConj1  = ["I know","you know (informal)","he/she/it knows","we know","you know (plural)","you know (formal)","they know"];
var engConj2  = ["I knew","you knew (informal)","he/she/it knew","we knew","you knew (plural)","you knew (formal)","they knew"];
var engConj3  = ["I knew","you knew (informal)","he/she/it knew","we knew","you knew (plural)","you knew (formal)","they knew"];
var engConj4  = ["I will know","you will know (informal)","he/she/it will know","we will know","you will know (plural)","you will know (formal)","they will know"];
var engConj5  = ["I would know","you would know (informal)","he/she/it would know","we would know","you would know (plural)","you would know (formal)","they would know"];

var verbTypeNum = "4";var forConj6 = "Haben";var forConj7 = "W";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is slightly irregular because the "i" in the stem changes to "ei" or "u" in some of the conjugation. The double "s" is seen as "ß" in some of the conjugation. The changes are shown in black in this lesson.'];

var extraNote='In German, there are two verbs that are the equivalent of "to know". <br><strong>Kennen</strong> is used when you know: People, pets or places. It is also used for "to be familiar with".<br><strong>Wissen</strong> is used when you know: Facts, information or "how to".';