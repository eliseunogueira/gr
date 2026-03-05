var lessonNumber = 91;var lessonTitle = "Sehen (To see)";var forExamples = ["Sehen","Er hat Schwierigkeiten, über den Zaun zu <strong>sehen</strong>.","ich sehe","Mit verbundenen Augen <strong>sehe</strong> <em>ich</em> nichts.","ihr habt gesehen","<strong>Ihr habt</strong> einige Wale <strong>gesehen</strong>.","sie sah","<strong>Sie sah</strong> Vögel am Himmel.","wir werden sehen","<strong>Wir werden sehen</strong>, wenn wir unsere Hände von unseren Augen nehmen.","Sie würden sehen","Wenn Sie eine Brille hätten, <strong>würden Sie</strong> besser <strong>sehen</strong>."];var engExamples = ["To see","He has difficulty seeing (<em>to see</em>) over the fence.","I see","<em>I</em> can't <em>see</em> anything, because I'm blindfolded.","you saw","<em>You saw</em> some whales.","she was seeing","<em>She was seeing</em> birds in the sky.","we will see","<em>We will see</em> when we take our hands off our eyes.","you would see","If you had glasses, <em>you would see</em> better."];var btnColor = ["#00BFFF","#001E51"];

var forConj1 = ["ich seh<strong>e</strong>","du s<em>ie</em>h<strong>st</strong>","er/sie/es s<em>ie</em>h<strong>t</strong>","wir seh<strong>e</strong><strong>n</strong>","ihr seh<strong>t</strong>","Sie seh<strong>e</strong><strong>n</strong>","sie seh<strong>e</strong><strong>n</strong>"];
var quizConj1 = ["sehe","siehst","sieht","sehen","seht","sehen"];

var forConj2 = ["ich habe <strong>ge</strong>seh<strong>e</strong><strong>n</strong>","du hast <strong>ge</strong>seh<strong>e</strong><strong>n</strong>","er/sie/es hat <strong>ge</strong>seh<strong>e</strong><strong>n</strong>","wir haben <strong>ge</strong>seh<strong>e</strong><strong>n</strong>","ihr habt <strong>ge</strong>seh<strong>e</strong><strong>n</strong>","Sie haben <strong>ge</strong>seh<strong>e</strong><strong>n</strong>","sie haben <strong>ge</strong>seh<strong>e</strong><strong>n</strong>"];
var quizConj2 = ["habe gesehen","hast gesehen","hat gesehen","haben gesehen","habt gesehen","haben gesehen"];

var forConj3 = ["ich s<em>a</em>h","du s<em>a</em>h<strong>st</strong>","er/sie/es s<em>a</em>h","wir s<em>a</em>h<strong>e</strong><strong>n</strong>","ihr s<em>a</em>h<strong>t</strong>","Sie s<em>a</em>h<strong>e</strong><strong>n</strong>","sie s<em>a</em>h<strong>e</strong><strong>n</strong>"];
var quizConj3 = ["sah","sahst","sah","sahen","saht","sahen"];

var forConj4 = ["ich werde seh<strong>e</strong><strong>n</strong>","du wirst seh<strong>e</strong><strong>n</strong>","er/sie/es wird seh<strong>e</strong><strong>n</strong>","wir werden seh<strong>e</strong><strong>n</strong>","ihr werdet seh<strong>e</strong><strong>n</strong>","Sie werden seh<strong>e</strong><strong>n</strong>","sie werden seh<strong>e</strong><strong>n</strong>"];
var quizConj4 = ["werde sehen","wirst sehen","wird sehen","werden sehen","werdet sehen","werden sehen"];

var forConj5 = ["ich würde seh<strong>e</strong><strong>n</strong>","du würdest seh<strong>e</strong><strong>n</strong>","er/sie/es würde seh<strong>e</strong><strong>n</strong>","wir würden seh<strong>e</strong><strong>n</strong>","ihr würdet seh<strong>e</strong><strong>n</strong>","Sie würden seh<strong>e</strong><strong>n</strong>","sie würden seh<strong>e</strong><strong>n</strong>"];
var quizConj5 = ["würde sehen","würdest sehen","würde sehen","würden sehen","würdet sehen","würden sehen"];

var engConj1  = ["I see","you see (informal)","he/she/it sees","we see","you see (plural)","you see (formal)","they see"];
var engConj2  = ["I saw","you saw (informal)","he/she/it saw","we saw","you saw (plural)","you saw (formal)","they saw"];
var engConj3  = ["I was seeing","you were seeing (informal)","he/she/it was seeing","we were seeing","you were seeing (plural)","you were seeing (formal)","they were seeing"];
var engConj4  = ["I will see","you will see (informal)","he/she/it will see","we will see","you will see (plural)","you will see (formal)","they will see"];
var engConj5  = ["I would see","you would see (informal)","he/she/it would see","we would see","you would see (plural)","you would see (formal)","they would see"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "S_h";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "e" in the stem changes to an "a" in some of the conjugation. In the present tense and imperative an "i" is added in front of the "e" in the stem. The changes are shown in black in this lesson.'];
