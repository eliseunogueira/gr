var lessonNumber = 56;var lessonTitle = "Vergessen (To forget)";var forExamples = ["Vergessen","Sie sitzt am Strand, um ihre Sorgen zu <strong>vergessen</strong>.","ich vergesse","<strong>Ich vergesse</strong> immer, wie diese Mathematikaufgabe zu lösen ist.","du hast vergessen","<strong>Hast</strong> <em>du</em> unsere Verabredung <strong>vergessen</strong>?","sie vergaßen","<strong>Die Kinder vergaßen</strong> nicht, was sie ihnen beigebracht hatte.","ich werde vergessen","<strong>Ich werde</strong> es nicht <strong>vergessen</strong>! Ich habe eine Notiz auf meiner Stirn!","du würdest vergessen","Wenn ich nicht hier wäre, <strong>würdest du</strong> alles <strong>vergessen</strong>."];var engExamples = ["To forget","She sits on the beach <em>to forget</em> her worries.","I forget","<em>I</em> always <em>forget</em> how to solve this math problem.","you did forget","<em>Did you forget</em> our appointment?","they were forgetting","<em>The children were</em>n't <em>forgetting</em> what she taught them.","I will forget","<em>I will</em> not <em>forget</em> it! I have a note on my forehead! ","you would forget","If I weren't here, <em>you would forget</em> everything."];var btnColor = ["#FFC400","#BB0A00"];

var forConj1 = ["ich vergess<strong>e</strong>","du verg<em>i</em>ss<strong>t</strong>","er/sie/es verg<em>i</em>ss<strong>t</strong>","wir vergess<strong>en</strong>","ihr vergess<strong>t</strong>","Sie vergess<strong>en</strong>","sie vergess<strong>en</strong>"];
var quizConj1 = ["vergesse","vergisst","vergisst","vergessen","vergesst","vergessen"];

var forConj2 = ["ich habe vergess<strong>en</strong>","du hast vergess<strong>en</strong>","er/sie/es hat vergess<strong>en</strong>","wir haben vergess<strong>en</strong>","ihr habt vergess<strong>en</strong>","Sie haben vergess<strong>en</strong>","sie haben vergess<strong>en</strong>"];
var quizConj2 = ["habe vergessen","hast vergessen","hat vergessen","haben vergessen","habt vergessen","haben vergessen"];

var forConj3 = ["ich verg<em>aß</em>","du verg<em>aß</em><strong>es</strong><strong>t</strong>","er/sie/es verg<em>aß</em>","wir verg<em>aß</em><strong>en</strong>","ihr verg<em>aß</em><strong>e</strong>)<strong>t</strong>","Sie verg<em>aß</em><strong>en</strong>","sie verg<em>aß</em><strong>en</strong>"];
var quizConj3 = ["vergaß","vergaßest","vergaß","vergaßen","vergaßet","vergaßen"];

var forConj4 = ["ich werde vergess<strong>en</strong>","du wirst vergess<strong>en</strong>","er/sie/es wird vergess<strong>en</strong>","wir werden vergess<strong>en</strong>","ihr werdet vergess<strong>en</strong>","Sie werden vergess<strong>en</strong>","sie werden vergess<strong>en</strong>"];
var quizConj4 = ["werde vergessen","wirst vergessen","wird vergessen","werden vergessen","werdet vergessen","werden vergessen"];

var forConj5 = ["ich würde vergess<strong>en</strong>","du würdest vergess<strong>en</strong>","er/sie/es würde vergess<strong>en</strong>","wir würden vergess<strong>en</strong>","ihr würdet vergess<strong>en</strong>","Sie würden vergess<strong>en</strong>","sie würden vergess<strong>en</strong>"];
var quizConj5 = ["würde vergessen","würdest vergessen","würde vergessen","würden vergessen","würdet vergessen","würden vergessen"];

var engConj1  = ["I forget","you forget (informal)","he/she/it forgets","we forget","you forget (plural)","you forget (formal)","they forget"];
var engConj2  = ["I forgot","you forgot (informal)","he/she/it forgot","we forgot","you forgot (plural)","you forgot (formal)","they forgot"];
var engConj3  = ["I was forgetting","you were forgetting (inf.)","he/she/it was forgetting","we were forgetting","you were forgetting (plural)","you were forgetting (formal)","they were forgetting"];
var engConj4  = ["I will forget","you will forget (informal)","he/she/it will forget","we will forget","you will forget (plural)","you will forget (formal)","they will forget"];
var engConj5  = ["I would forget","you would forget (informal)","he/she/it would forget","we would forget","you would forget (plural)","you would forget (formal)","they would forget"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "Verg";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "e" in the stem change to an "a" or an "i" in some of the conjugation. The changes are shown in black in this lesson.'];