var lessonNumber = 42;var lessonTitle = "Hereinkommen (To come in)";var forExamples = ["Hereinkommen","Kann ich in Ihr Büro <strong>hereinkommen</strong>?","ich komme herein","<strong>Ich komme</strong> ins Zelt <em>herein</em>, um ins Bett zu gehen.","er ist hereingekommen","<em>Er ist</em> <strong>hereingekommen</strong> und hat mir eine große Kiste gegeben.","ihr kamt herein","<strong>Ihr kamt</strong> <em>herein</em>, sobald er weg war.","du wirst hereinkommen","<strong>Du wirst hereinkommen</strong>, wenn du sauber bist.","wir würden hereinkommen","Wenn wir nicht unsere Schlüssel verloren hätten, <strong>würden wir</strong> in das Haus <strong>hereinkommen</strong>."];var engExamples = ["To come in","Can I <em>come in</em> your office?","I am coming in","<em>I am coming in</em> the tent to go to bed.","he came in","<em>He came in</em> and gave me a big box.","you came in","<em>You came in</em> as soon as he left.","you will come in","<em>You will come in</em> when you are clean.","we would come in","If we hadn't lost our keys, <em>we would come in</em> the house."];var btnColor = ["#1EEC00","#163F00"];

var forConj1 = ["ich komm<strong>e</strong> herein","du komm<strong>st</strong> herein","er/sie/es komm<strong>t</strong> herein","wir komm<strong>en</strong> herein","ihr komm<strong>t</strong> herein","Sie komm<strong>en</strong> herein","sie komm<strong>en</strong> herein"];
var quizConj1 = ["komme herein","kommst herein","kommt herein","kommen herein","kommt herein","kommen herein"];

var forConj2 = ["ich bin herein<strong>ge</strong>komm<strong>en</strong>","du bist herein<strong>ge</strong>komm<strong>en</strong>","er/sie/es ist herein<strong>ge</strong>komm<strong>en</strong>","wir sind herein<strong>ge</strong>komm<strong>en</strong>","ihr seid herein<strong>ge</strong>komm<strong>en</strong>","Sie sind herein<strong>ge</strong>komm<strong>en</strong>","sie sind herein<strong>ge</strong>komm<strong>en</strong>"];
var quizConj2 = ["bin hereingekommen","bist hereingekommen","ist hereingekommen","sind hereingekommen","seid hereingekommen","sind hereingekommen"];

var forConj3 = ["ich k<em>am</em> herein","du k<em>am</em><strong>st</strong> herein","er/sie/es k<em>am</em> herein","wir k<em>am</em><strong>en</strong> herein","ihr k<em>am</em><strong>t</strong> herein","Sie k<em>am</em><strong>en</strong> herein","sie k<em>am</em><strong>en</strong> herein"];
var quizConj3 = ["kam herein","kamst herein","kam herein","kamen herein","kamt herein","kamen herein"];

var forConj4 = ["ich werde hereinkomm<strong>en</strong>","du wirst hereinkomm<strong>en</strong>","er/sie/es wird hereinkomm<strong>en</strong>","wir werden hereinkomm<strong>en</strong>","ihr werdet hereinkomm<strong>en</strong>","Sie werden hereinkomm<strong>en</strong>","sie werden hereinkomm<strong>en</strong>"];
var quizConj4 = ["werde hereinkommen","wirst hereinkommen","wird hereinkommen","werden hereinkommen","werdet hereinkommen","werden hereinkommen"];

var forConj5 = ["ich würde hereinkomm<strong>en</strong>","du würdest hereinkomm<strong>en</strong>","er/sie/es würde hereinkomm<strong>en</strong>","wir würden hereinkomm<strong>en</strong>","ihr würdet hereinkomm<strong>en</strong>","Sie würden hereinkomm<strong>en</strong>","sie würden hereinkomm<strong>en</strong>"];
var quizConj5 = ["würde hereinkommen","würdest hereinkommen","würde hereinkommen","würden hereinkommen","würdet hereinkommen","würden hereinkommen"];

var engConj1  = ["I am coming in","you are coming in (informal)","he/she/it is coming in ","we come in","you come in (plural)","you come in (formal)","they come in"];
var engConj2  = ["I came in","you came in (informal)","he/she/it came in","we came in","you came in (plural)","you came in (formal)","they came in"];
var engConj3  = ["I used to come in","you used to come in (informal)","he/she/it used to come in","we used to come in","you used to come in (plural)","you used to come in (formal)","they used to come in"];
var engConj4  = ["I will come in","you will come in (informal)","he/she/it will come in","we will come in","you will come in (plural)","you will come in (formal)","they will come in"];
var engConj5  = ["I would come in","you would come in (informal)","he/she/it would come in","we would come in","you would come in (plural)","you would come in (formal)","they would come in"];

var verbTypeNum = "7";var forConj6 = "Sein";var forConj7 = "Herein + k_m";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "omm" in the stem becomes "am" in some of the conjugation. The changes are shown in black in this lesson.'];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style=”opacity: 0;”>E.G.</em> <strong>An</strong>kommen = To arrive';