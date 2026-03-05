var lessonNumber = 96;var lessonTitle = "Riechen (To smell)";var forExamples = ["Riechen","Ich möchte an Blumen <strong>riechen</strong>.","sie riechen","<strong>Die Kekse riechen</strong> sehr gut.","sie hat gerochen","<strong>Sie hat</strong> die Suppe <strong>gerochen</strong> und sie mag den Geruch.","er roch","<strong>Der Hund roch</strong> das Hähnchen auf der Theke.","ich werde riechen","<strong>Ich werde</strong> den ganzen Tag gut <strong>riechen</strong>.","Sie würden riechen","Mit diesem Parfüm <strong>würden Sie</strong> wirklich gut <strong>riechen</strong>."];var engExamples = ["To smell","I would like <em>to smell</em> flowers.","they smell","<em>The cookies smell</em> very good.","she smelled","<em>She smelled</em> the soup and she likes the aroma.","he was smelling","<em>The dog was smelling</em> the chicken on the counter.","I will smell","<em>I will smell</em> good all day.","you would smell","<em>You would smell</em> really good with this perfume."];var btnColor = ["#FFC400","#BB0A00"];

var forConj1 = ["ich riech<strong>e</strong>","du riech<strong>st</strong>","er/sie/es riech<strong>t</strong>","wir riech<strong>en</strong>","ihr riech<strong>t</strong>","Sie riech<strong>en</strong>","sie riech<strong>en</strong>"];
var quizConj1 = ["rieche","riechst","riecht","riechen","riecht","riechen"];

var forConj2 = ["ich habe <strong>ge</strong>r<em>o</em>ch<strong>en</strong>","du hast <strong>ge</strong>r<em>o</em>ch<strong>en</strong>","er/sie/es hat <strong>ge</strong>r<em>o</em>ch<strong>en</strong>","wir haben <strong>ge</strong>r<em>o</em>ch<strong>en</strong>","ihr habt <strong>ge</strong>r<em>o</em>ch<strong>en</strong>","Sie haben <strong>ge</strong>r<em>o</em>ch<strong>en</strong>","sie haben <strong>ge</strong>r<em>o</em>ch<strong>en</strong>"];
var quizConj2 = ["habe gerochen","hast gerochen","hat gerochen","haben gerochen","habt gerochen","haben gerochen"];

var forConj3 = ["ich r<em>o</em>ch","du r<em>o</em>ch<strong>st</strong>","er/sie/es r<em>o</em>ch","wir r<em>o</em>ch<strong>en</strong>","ihr r<em>o</em>ch<strong>t</strong>","Sie r<em>o</em>ch<strong>en</strong>","sie r<em>o</em>ch<strong>en</strong>"];
var quizConj3 = ["roch","rochst","roch","rochen","rocht","rochen"];

var forConj4 = ["ich werde riech<strong>en</strong>","du wirst riech<strong>en</strong>","er/sie/es wird riech<strong>en</strong>","wir werden riech<strong>en</strong>","ihr werdet riech<strong>en</strong>","Sie werden riech<strong>en</strong>","sie werden riech<strong>en</strong>"];
var quizConj4 = ["werde riechen","wirst riechen","wird riechen","werden riechen","werdet riechen","werden riechen"];

var forConj5 = ["ich würde riech<strong>en</strong>","du würdest riech<strong>en</strong>","er/sie/es würde riech<strong>en</strong>","wir würden riech<strong>en</strong>","ihr würdet riech<strong>en</strong>","Sie würden riech<strong>en</strong>","sie würden riech<strong>en</strong>"];
var quizConj5 = ["würde riechen","würdest riechen","würde riechen","würden riechen","würdet riechen","würden riechen"];

var engConj1  = ["I smell","you smell (informal)","he/she/it smells","we smell","you smell (plural)","you smell (formal)","they smell"];
var engConj2  = ["I smelled","you smelled (informal)","he/she/it smelled","we smelled","you smelled (plural)","you smelled (formal)","they smelled"];
var engConj3  = ["I was smelling","you were smelling (informal)","he/she/it was smelling","we were smelling","you were smelling (plural)","you were smelling (formal)","they were smelling"];
var engConj4  = ["I will smell","you will smell (informal)","he/she/it will smell","we will smell","you will smell (plural)","you will smell (formal)","they will smell"];
var engConj5  = ["I would smell","you would smell (informal)","he/she/it would smell","we would smell","you would smell (plural)","you would smell (formal)","they would smell"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "R__ch";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "ie" in the stem changes to an "o" in some of the conjugation. The change is shown in black in this lesson.'];