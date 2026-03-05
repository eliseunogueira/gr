var lessonNumber = 18;var lessonTitle = "Müssen (to have to) - Future/Conditional";var forExamples = ["ich werde müssen","<strong>Ich werde</strong> heute Nachmittag die Wäsche machen <strong>müssen</strong>.","du wirst müssen","<strong>Du wirst</strong> die Küche sauber machen <strong>müssen</strong>.","er wird müssen","<strong>Er wird</strong> eine andere Lösung finden <strong>müssen</strong>.","wir würden müssen","<strong>Wir würden</strong> heute all diese Kartons öffnen <strong>müssen</strong>, aber wir haben es nicht eilig.","ihr würdet müssen","<strong>Ihr würdet</strong> für diese Prüfung lernen <strong>müssen</strong>, wenn die Prüfung heute wäre.","sie würden müssen","Wenn es ihr Baby wäre, <strong>würden</strong> <em>sie</em> auf es aufpassen <strong>müssen</strong>."];var engExamples = ["I will have to","<em>I will have to</em> do the laundry this afternoon.","you will have to","<em>You will have to</em> clean the kitchen.","he will have to","<em>He will have to</em> find another solution.","we would have to","<em>We would have to</em> open all these boxes today, but we are not in a hurry.","you would have to","<em>You would have to</em> study, if the exam were today.","they would have to","If it were their baby, <em>they would have to</em> take care of it."];var btnColor = ["#F30101","#5F0000"];

var forConj1 = ["ich m<em>u</em>ss","du m<em>u</em>ss<strong>t</strong>","er/sie/es m<em>u</em>ss","wir müss<strong>en</strong>","ihr müss<strong>t</strong>","Sie müss<strong>en</strong>","sie müss<strong>en</strong>"];
var quizConj1 = ["muss","musst","muss","müssen","müsst","müssen"];

var forConj2 = ["ich habe <strong>ge</strong>m<em>u</em>ss<strong>t</strong>","du hast <strong>ge</strong>m<em>u</em>ss<strong>t</strong>","er/sie/es hat <strong>ge</strong>m<em>u</em>ss<strong>t</strong>","wir haben <strong>ge</strong>m<em>u</em>ss<strong>t</strong>","ihr habt <strong>ge</strong>m<em>u</em>ss<strong>t</strong>","Sie haben <strong>ge</strong>m<em>u</em>ss<strong>t</strong>","sie haben <strong>ge</strong>m<em>u</em>ss<strong>t</strong>"];
var quizConj2 = ["habe gemusst","hast gemusst","hat gemusst","haben gemusst","habt gemusst","haben gemusst"];

var forConj3 = ["ich m<em>u</em>ss<strong>te</strong>","du m<em>u</em>ss<strong>test</strong>","er/sie/es m<em>u</em>ss<strong>te</strong>","wir m<em>u</em>ss<strong>ten</strong>","ihr m<em>u</em>ss<strong>tet</strong>","Sie m<em>u</em>ss<strong>ten</strong>","sie m<em>u</em>ss<strong>ten</strong>"];
var quizConj3 = ["musste","musstest","musste","mussten","musstet","mussten"];

var forConj4 = ["ich werde müss<strong>en</strong>","du wirst müss<strong>en</strong>","er/sie/es wird müss<strong>en</strong>","wir werden müss<strong>en</strong>","ihr werdet müss<strong>en</strong>","Sie werden müss<strong>en</strong>","sie werden müss<strong>en</strong>"];
var quizConj4 = ["werde müssen","wirst müssen","wird müssen","werden müssen","werdet müssen","werden müssen"];

var forConj5 = ["ich würde müss<strong>en</strong>","du würdest müss<strong>en</strong>","er/sie/es würde müss<strong>en</strong>","wir würden müss<strong>en</strong>","ihr würdet müss<strong>en</strong>","Sie würden müss<strong>en</strong>","sie würden müss<strong>en</strong>"];
var quizConj5 = ["würde müssen","würdest müssen","würde müssen","würden müssen","würdet müssen","würden müssen"];

var engConj1  = ["I have to","you have to (informal)","he/she/it has to","we have to","you have to (plural)","you have to (formal)","they have to"];
var engConj2  = ["I had to","you had to (informal)","he/she/it had to","we had to","you had to (plural)","you had to (formal)","they had to"];
var engConj3  = ["I was having to","you were having to (informal)","he/she/it was having to","we were having to","you were having to (plural)","you were having to (formal)","they were having to"];
var engConj4  = ["I will have to","you will have to (informal)","he/she/it will have to","we will have to","you will have to (plural)","you will have to (formal)","they will have to"];
var engConj5  = ["I would have to","you would have to (informal)","he/she/it would have to","we would have to","you would have to (plural)","you would have to (formal)","they would have to (form. pl.)"];

var verbTypeNum = "3";var forConj6 = "Haben";var forConj7 = "M_ss";var pronominal = false;var conjNum = [4,4,4,4,4,4,5,5,5,5,5,5];

var irregReason = [''];
var quizForExamples = ["<strong>Wir werden</strong> viele Anrufe beantworten <em>müssen</em>.","<strong>Ich werde</strong> bald ins Bett gehen <strong>müssen</strong>.","<strong>Du würdest</strong> deine Tochter unterrichten <em>müssen</em>, wenn sie nicht wüsste, wie man es benutzt.","<strong>Sie würde</strong> ihre Schuhe zubinden <strong>müssen</strong>, wenn ihre Schnürsenkel offen wären."];var quizEngExamples = ["<em>We will have to</em> answer many calls.","<em>I will</em> soon <em>have to</em> go to bed.","<em>You would have to</em> teach your daughter, if she didn't know how to use it.","<em>She would have to</em> tie her shoes, if her shoelaces were untied."];