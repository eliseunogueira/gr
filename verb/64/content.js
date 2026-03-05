var lessonNumber = 64;var lessonTitle = "Springen (To jump)";var forExamples = ["Springen","Mein Pferd liebt es, zu <strong>springen</strong>.","du springst","<strong>Du springst</strong> auf das Feld, um den Ball zu stoppen.","er ist gesprungen","<strong>Er ist</strong> mit seinem Snowboard auf einen Ast <strong>gesprungen</strong>.","ihr sprangt","<strong>Ihr sprangt</strong> auf dem Trampolin.","ich werde springen","<strong>Ich werde</strong> aus diesem Flugzeug <strong>springen</strong>.","sie würden springen","Wenn das Wasser nicht so kalt wäre, <strong>würden sie</strong> ins Schwimmbecken <strong>springen</strong>."];var engExamples = ["To jump","My horse loves <em>to jump</em>.","you jump","<em>You jump</em> onto the field to stop the ball.","he jumped","<em>He jumped</em> on a branch with his snowboard.","you were jumping","<em>You were jumping</em> on the trampoline.","I will jump","<em>I will jump</em> from this plane.","they would jump","If the water weren't so cold, <em>they would jump</em> in the swimming pool."];var btnColor = ["#FFC400","#BB0A00"];

var forConj1 = ["ich spring<strong>e</strong>","du spring<strong>st</strong>","er/sie/es spring<strong>t</strong>","wir spring<strong>en</strong>","ihr spring<strong>t</strong>","Sie spring<strong>en</strong>","sie spring<strong>en</strong>"];
var quizConj1 = ["springe","springst","springt","springen","springt","springen"];

var forConj2 = ["ich bin <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>","du bist <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>","er/sie/es ist <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>","wir sind <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>","ihr seid <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>","Sie sind <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>","sie sind <strong>ge</strong>spr<em>u</em>ng<strong>en</strong>"];
var quizConj2 = ["bin gesprungen","bist gesprungen","ist gesprungen","sind gesprungen","seid gesprungen","sind gesprungen"];

var forConj3 = ["ich spr<em>a</em>ng","du spr<em>a</em>ng<strong>st</strong>","er/sie/es spr<em>a</em>ng","wir spr<em>a</em>ng<strong>en</strong>","ihr spr<em>a</em>ng<strong>t</strong>","Sie spr<em>a</em>ng<strong>en</strong>","sie spr<em>a</em>ng<strong>en</strong>"];
var quizConj3 = ["sprang","sprangst","sprang","sprangen","sprangt","sprangen"];

var forConj4 = ["ich werde spring<strong>en</strong>","du wirst spring<strong>en</strong>","er/sie/es wird spring<strong>en</strong>","wir werden spring<strong>en</strong>","ihr werdet spring<strong>en</strong>","Sie werden spring<strong>en</strong>","sie werden spring<strong>en</strong>"];
var quizConj4 = ["werde springen","wirst springen","wird springen","werden springen","werdet springen","werden springen"];

var forConj5 = ["ich würde spring<strong>en</strong>","du würdest spring<strong>en</strong>","er/sie/es würde spring<strong>en</strong>","wir würden spring<strong>en</strong>","ihr würdet spring<strong>en</strong>","Sie würden spring<strong>en</strong>","sie würden spring<strong>en</strong>"];
var quizConj5 = ["würde springen","würdest springen","würde springen","würden springen","würdet springen","würden springen"];

var engConj1  = ["I jump","you jump (informal)","he/she/it jumps","we jump","you jump (plural)","you jump (formal)","they jump"];
var engConj2  = ["I jumped","you jumped (informal)","he/she/it jumped","we jumped","you jumped (plural)","you jumped (formal)","they jumped"];
var engConj3  = ["I was jumping","you were jumping (informal)","he/she/it was jumping","we were jumping","you were jumping (plural)","you were jumping (formal)","they were jumping"];
var engConj4  = ["I will jump","you will jump (informal)","he/she/it will jump","we will jump","you will jump (plural)","you will jump (formal)","they will jump"];
var engConj5  = ["I would jump","you would jump (informal)","he/she/it would jump","we would jump","you would jump (plural)","you would jump (formal)","they would jump"];

var verbTypeNum = "7";var forConj6 = "Sein";var forConj7 = "Spr_ng";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "i" in the stem changes to an "a" or a "u" in some of the conjugation. The changes are shown in black in this lesson.'];
