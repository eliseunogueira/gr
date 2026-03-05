var lessonNumber = 30;var lessonTitle = "Akzeptieren (To accept)";var forExamples = ["Akzeptieren","Sie müssen die Arbeit <strong>akzeptieren</strong>.","sie akzeptiert","<strong>Sie akzeptiert</strong> freudig die Rose.","sie hat akzeptiert","<strong>Sie hat</strong> nicht <strong>akzeptiert</strong>, ihre Medikamente zu nehmen.","Sie akzeptierten","<strong>Sie akzeptierten</strong> oft, mir zu helfen.","ich werde akzeptieren","<strong>Ich werde</strong> deine Einladung <strong>akzeptieren</strong>.","wir würden akzeptieren","Wenn wir nicht so beschäftigt wären, <strong>würden wir akzeptieren</strong>, euer Haus zu bauen."];var engExamples = ["To accept","They must <em>accept</em> the work.","she accepts","<em>She</em> happily <em>accepts</em> the rose.","she did accept","<em>She did</em>n't <em>accept</em> to take her medication.","you accepted","<em>You</em> often <em>accepted</em> to help me.","I will accept","<em>I will accept</em> your invitation.","we would accept","If we weren't so busy, <em>we would accept</em> to build your house."];var btnColor = ["#1EEC00","#163F00"];

var forConj1 = ["ich akzeptier<strong>e</strong>","du akzeptier<strong>st</strong>","er/sie/es akzeptier<strong>t</strong>","wir akzeptier<strong>en</strong>","ihr akzeptier<strong>t</strong>","Sie akzeptier<strong>en</strong>","sie akzeptier<strong>en</strong>"];
var quizConj1 = ["akzeptiere","akzeptierst","akzeptiert","akzeptieren","akzeptiert","akzeptieren"];

var forConj2 = ["ich habe akzeptier<strong>t</strong>","du hast akzeptier<strong>t</strong>","er/sie/es hat akzeptier<strong>t</strong>","wir haben akzeptier<strong>t</strong>","ihr habt akzeptier<strong>t</strong>","Sie haben akzeptier<strong>t</strong>","sie haben akzeptier<strong>t</strong>"];
var quizConj2 = ["habe akzeptiert","hast akzeptiert","hat akzeptiert","haben akzeptiert","habt akzeptiert","haben akzeptiert"];

var forConj3 = ["ich akzeptier<strong>te</strong>","du akzeptier<strong>test</strong>","er/sie/es akzeptier<strong>te</strong>","wir akzeptier<strong>ten</strong>","ihr akzeptier<strong>tet</strong>","Sie akzeptier<strong>ten</strong>","sie akzeptier<strong>ten</strong>"];
var quizConj3 = ["akzeptierte","akzeptiertest","akzeptierte","akzeptierten","akzeptiertet","akzeptierten"];

var forConj4 = ["ich werde akzeptier<strong>en</strong>","du wirst akzeptier<strong>en</strong>","er/sie/es wird akzeptier<strong>en</strong>","wir werden akzeptier<strong>en</strong>","ihr werdet akzeptier<strong>en</strong>","Sie werden akzeptier<strong>en</strong>","sie werden akzeptier<strong>en</strong>"];
var quizConj4 = ["werde akzeptieren","wirst akzeptieren","wird akzeptieren","werden akzeptieren","werdet akzeptieren","werden akzeptieren"];

var forConj5 = ["ich würde akzeptier<strong>en</strong>","du würdest akzeptier<strong>en</strong>","er/sie/es würde akzeptier<strong>en</strong>","wir würden akzeptier<strong>en</strong>","ihr würdet akzeptier<strong>en</strong>","Sie würden akzeptier<strong>en</strong>","sie würden akzeptier<strong>en</strong>"];
var quizConj5 = ["würde akzeptieren","würdest akzeptieren","würde akzeptieren","würden akzeptieren","würdet akzeptieren","würden akzeptieren"];

var engConj1  = ["I accept","you accept (informal)","he/she/it accepts","we accept","you accept (plural)","you accept (formal)","they accept"];
var engConj2  = ["I accepted","you accepted (informal)","he/she/it accepted","we accepted","you accepted (plural)","you accepted (formal)","they accepted"];
var engConj3  = ["I accepted","you accepted (informal)","he/she/it accepted","we accepted","you accepted (plural)","you accepted (formal)","they accepted"];
var engConj4  = ["I will accept","you will accept (informal)","he/she/it will accept","we will accept","you will accept (plural)","you will accept (formal)","they will accept"];
var engConj5  = ["I would accept","you would accept (informal)","he/she/it would accept","we would accept","you would accept (plural)","you would accept (formal)","they would accept"];

var verbTypeNum = "1";var forConj6 = "Haben";var forConj7 = "Akzeptier";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = [''];
var extraNote = "Verbs ending in <strong>-ieren</strong> do not have the prefix <strong>ge-</strong> in front of the past participle.";