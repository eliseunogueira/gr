var lessonNumber = 100;var lessonTitle = "Stehlen (To steal)";var forExamples = ["Stehlen","Er versucht, das Auto zu <strong>stehlen</strong>.","Sie stehlen","Ich nehme Sie fest, weil <strong>Sie stehlen</strong>.","er hat gestohlen","Hilfe! <strong>Er hat</strong> meine Handtasche <strong>gestohlen</strong>!","du stahlst","Ich weiß, dass <strong>du</strong> mein Geld immer <strong>stahlst</strong>. ","wir werden stehlen","<strong>Wir werden</strong> viele Kekse <strong>stehlen</strong>.","ich würde stehlen","Wenn ich die Tür aufmachen könnte, <strong>würde ich</strong> das Auto <strong>stehlen</strong>."];var engExamples = ["To steal","He is trying <em>to steal</em> the car.","you are stealing","I am arresting you, because <em>you are stealing</em>.","he stole","Help! <em>He stole</em> my purse!","you were stealing","I know that <em>you were</em> always <em>stealing</em> my money.","we will steal","<em>We will steal</em> many cookies.","I would steal","If I could open the door, <em>I would steal</em> the car."];var btnColor = ["#FFEE00","#B83D00"];

var forConj1 = ["ich stehl<strong>e</strong>","du st<em>ie</em>hl<strong>st</strong>","er/sie/es st<em>ie</em>hl<strong>t</strong>","wir stehl<strong>en</strong>","ihr stehl<strong>t</strong>","Sie stehl<strong>en</strong>","sie stehl<strong>en</strong>"];
var quizConj1 = ["stehle","stiehlst","stiehlt","stehlen","stehlt","stehlen"];

var forConj2 = ["ich habe <strong>ge</strong>st<em>o</em>hl<strong>en</strong>","du hast <strong>ge</strong>st<em>o</em>hl<strong>en</strong>","er/sie/es hat <strong>ge</strong>st<em>o</em>hl<strong>en</strong>","wir haben <strong>ge</strong>st<em>o</em>hl<strong>en</strong>","ihr habt <strong>ge</strong>st<em>o</em>hl<strong>en</strong>","Sie haben <strong>ge</strong>st<em>o</em>hl<strong>en</strong>","sie haben <strong>ge</strong>st<em>o</em>hl<strong>en</strong>"];
var quizConj2 = ["habe gestohlen","hast gestohlen","hat gestohlen","haben gestohlen","habt gestohlen","haben gestohlen"];

var forConj3 = ["ich st<em>a</em>hl","du st<em>a</em>hl<strong>st</strong>","er/sie/es st<em>a</em>hl","wir st<em>a</em>hl<strong>en</strong>","ihr st<em>a</em>hl<strong>t</strong>","Sie st<em>a</em>hl<strong>en</strong>","sie st<em>a</em>hl<strong>en</strong>"];
var quizConj3 = ["stahl","stahlst","stahl","stahlen","stahlt","stahlen"];

var forConj4 = ["ich werde stehl<strong>en</strong>","du wirst stehl<strong>en</strong>","er/sie/es wird stehl<strong>en</strong>","wir werden stehl<strong>en</strong>","ihr werdet stehl<strong>en</strong>","Sie werden stehl<strong>en</strong>","sie werden stehl<strong>en</strong>"];
var quizConj4 = ["werde stehlen","wirst stehlen","wird stehlen","werden stehlen","werdet stehlen","werden stehlen"];

var forConj5 = ["ich würde stehl<strong>en</strong>","du würdest stehl<strong>en</strong>","er/sie/es würde stehl<strong>en</strong>","wir würden stehl<strong>en</strong>","ihr würdet stehl<strong>en</strong>","Sie würden stehl<strong>en</strong>","sie würden stehl<strong>en</strong>"];
var quizConj5 = ["würde stehlen","würdest stehlen","würde stehlen","würden stehlen","würdet stehlen","würden stehlen"];

var engConj1  = ["I am stealing","you are stealing (informal)","he/she/it is stealing","we are stealing","you are stealing (plural)","you are stealing (formal)","they are stealing"];
var engConj2  = ["I stole","you stole (informal)","he/she/it stole","we stole","you stole (plural)","you stole (formal)","they stole"];
var engConj3  = ["I was stealing","you were stealing (informal)","he/she/it was stealing","we were stealing","you were stealing (plural)","you were stealing (formal)","they were stealing"];
var engConj4  = ["I will steal","you will steal (informal)","he/she/it will steal","we will steal","you will steal (plural)","you will steal (formal)","they will steal"];
var engConj5  = ["I would steal","you would steal (informal)","he/she/it would steal","we would steal","you would steal (plural)","you would steal (formal)","they would steal"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "St_hl";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "e" in the stem changes to an "a" or an "o" in some of the conjugation. The changes are shown in black in this lesson.'];