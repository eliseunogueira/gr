var lessonNumber = 4;var lessonTitle = "Haben (To have)";var forExamples = ["Haben","Sie sind bereit, ein neues Haus zu <strong>haben</strong>.","ich habe","<strong>Ich habe</strong> eine Menge Arbeit zu tun.","ich habe","<strong>Ich habe</strong> Kopfschmerzen.","du hast","<strong>Du hast</strong> ein schönes Schlafzimmer.","du hast","<strong>Du hast</strong> Fieber.","er hat","<strong>Er hat</strong> ein neues Auto.","sie hat","<strong>Sie hat</strong> einen neuen Laptop.","wir haben","<strong>Wir haben</strong> ein Deutschprojekt zu machen.","wir haben","<strong>Wir haben</strong> sehr hübsche Dekorationen.","ihr habt","<strong>Ihr habt</strong> einen schönen Hund.","ihr habt","<strong>Ihr habt</strong> große Stücke Wassermelone.","Sie haben","<strong>Sie haben</strong> viel Geduld.","sie haben","<strong>Sie haben</strong> ein Problem mit ihrem Auto.","sie haben","<strong>Sie haben</strong> bunte Kleider."];var engExamples = ["To have","They are ready <em>to have</em> a new house.","I have","<em>I have</em> a lot of work to do.","I have","<em>I have</em> a headache.","you have","<em>You have</em> a beautiful bedroom.","you have","<em>You have</em> a fever.","he has","<em>He has</em> a new car.","she has","<em>She has</em> a new laptop computer.","we have","<em>We have</em> a German project to do.","we have","<em>We have</em> very nice decorations.","you have","<em>You have</em> a beautiful dog.","you have","<em>You have</em> big pieces of watermelon.","you have","<em>You have</em> a lot of patience.","they have","<em>They have</em> a problem with their car.","they have","<em>They have</em> colorful clothes."];var btnColor = ["#FFEE00","#B83D00"];

var forConj1 = ["ich hab<strong>e</strong>","du <em>ha</em><strong>st</strong>","er/sie/es <em>ha</em><strong>t</strong>","wir hab<strong>en</strong>","ihr hab<strong>t</strong>","Sie hab<strong>en</strong>","sie hab<strong>en</strong>"];
var quizConj1 = ["habe","hast","hat","haben","habt","haben"];

var forConj2 = ["ich habe <strong>ge</strong>hab<strong>t</strong>","du hast <strong>ge</strong>hab<strong>t</strong>","er/sie/es hat <strong>ge</strong>hab<strong>t</strong>","wir haben <strong>ge</strong>hab<strong>t</strong>","ihr habt <strong>ge</strong>hab<strong>t</strong>","Sie haben <strong>ge</strong>hab<strong>t</strong>","sie haben <strong>ge</strong>hab<strong>t</strong>"];
var quizConj2 = ["habe gehabt","hast gehabt","hat gehabt","haben gehabt","habt gehabt","haben gehabt"];

var forConj3 = ["ich ha<em>t</em><strong>te</strong>","du ha<em>t</em><strong>test</strong>","er/sie/es ha<em>t</em><strong>te</strong>","wir ha<em>t</em><strong>ten</strong>","ihr ha<em>t</em><strong>tet</strong>","Sie ha<em>t</em><strong>ten</strong>","sie ha<em>t</em><strong>ten</strong>"];
var quizConj3 = ["hatte","hattest","hatte","hatten","hattet","hatten"];

var forConj4 = ["ich werde hab<strong>en</strong>","du wirst hab<strong>en</strong>","er/sie/es wird hab<strong>en</strong>","wir werden hab<strong>en</strong>","ihr werdet hab<strong>en</strong>","Sie werden hab<strong>en</strong>","sie werden hab<strong>en</strong>"];
var quizConj4 = ["werde haben","wirst haben","wird haben","werden haben","werdet haben","werden haben"];

var forConj5 = ["ich würde hab<strong>en</strong>","du würdest hab<strong>en</strong>","er/sie/es würde hab<strong>en</strong>","wir würden hab<strong>en</strong>","ihr würdet hab<strong>en</strong>","Sie würden hab<strong>en</strong>","sie würden hab<strong>en</strong>"];
var quizConj5 = ["würde haben","würdest haben","würde haben","würden haben","würdet haben","würden haben"];

var engConj1  = ["I have","you have (informal)","he/she/it has","we have","you have (plural)","you have (formal)","they have"];
var engConj2  = ["I had","you had (informal)","he/she/it had","we had","you had (plural)","you had (formal)","they had"];
var engConj3  = ["I was having","you were having (informal)","he/she/it was having","we were having","you were having (plural)","you were having (formal)","they were having"];
var engConj4  = ["I will have","you will have (informal)","he/she/it will have","we will have","you will have (plural)","you will have (formal)","they will have"];
var engConj5  = ["I would have","you would have (informal)","he/she/it would have","we would have","you would have (plural)","you would have (formal)","they would have"];

var verbTypeNum = "2";var forConj6 = "Haben";var forConj7 = "Changing";var pronominal = false;var conjNum = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var irregReason = [''];
var quizForExamples = ["<strong>Ich habe</strong> zwei Brüder.","<strong>Du hast</strong> sehr große Augen.","<strong>Wir haben</strong> ein neues Haus.","<strong>Er hat</strong> eine Aktentasche in seinen Händen.","<strong>Sie haben</strong> einige Fragen zu stellen.","<strong>Sie haben</strong> schöne Zähne."];var quizEngExamples = ["<em>I have</em> two brothers.","<em>You have</em> very big eyes.","<em>We have</em> a new house.","<em>He has</em> a briefcase in his hands.","<em>They have</em> some questions to ask.","<em>You have</em> beautiful teeth."];