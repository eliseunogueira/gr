var lessonNumber = 51;var lessonTitle = "Essen (To eat)";var forExamples = ["Essen","Wirst du das ganze Stück Wassermelone <strong>essen</strong>?","ich esse","<strong>Ich esse</strong> einen Apfel.","wir haben gegessen","<strong>Wir haben</strong> Müsli zum Frühstück <strong>gegessen</strong>.","sie aßen","<strong>Sie aßen</strong> jeden Samstagabend im Restaurant.","sie werden essen","<strong>Die Kinder werden</strong> frische Donuts <strong>essen</strong>.","sie würde essen","Wenn sie hungrig wäre, <strong>würde sie essen</strong>."];var engExamples = ["To eat","Are you going <em>to eat</em> the whole slice of watermelon?","I am eating","<em>I am eating</em> an apple.","we ate","<em>We ate</em> cereal for breakfast.","they used to eat","<em>They used to eat</em> at the restaurant every Saturday night.","they will eat","<em>The children will eat</em> fresh donuts.","she would eat","If she were hungry, <em>she would eat</em>."];var btnColor = ["#BB5D00","#271300"];

var forConj1 = ["ich ess<strong>e</strong>","du <em>i</em>ss<strong>t</strong>","er/sie/es <em>i</em>ss<strong>t</strong>","wir ess<strong>en</strong>","ihr ess<strong>t</strong>","Sie ess<strong>en</strong>","sie ess<strong>en</strong>"];
var quizConj1 = ["esse","isst","isst","essen","esst","essen"];

var forConj2 = ["ich habe <strong>ge</strong><em>g</em>ess<strong>en</strong>","du hast <strong>ge</strong><em>g</em>ess<strong>en</strong>","er/sie/es hat <strong>ge</strong><em>g</em>ess<strong>en</strong>","wir haben <strong>ge</strong><em>g</em>ess<strong>en</strong>","ihr habt <strong>ge</strong><em>g</em>ess<strong>en</strong>","Sie haben <strong>ge</strong><em>g</em>ess<strong>en</strong>","sie haben <strong>ge</strong><em>g</em>ess<strong>en</strong>"];
var quizConj2 = ["habe gegessen","hast gegessen","hat gegessen","haben gegessen","habt gegessen","haben gegessen"];

var forConj3 = ["ich <em>aß</em>","du <em>aß</em><strong>es</strong><strong>t</strong>","er/sie/es <em>aß</em>","wir <em>aß</em><strong>en</strong>","ihr <em>aß</em><strong>e</strong>)<strong>t</strong>","Sie <em>aß</em><strong>en</strong>","sie <em>aß</em><strong>en</strong>"];
var quizConj3 = ["aß","aßest","aß","aßen","aßet","aßen"];

var forConj4 = ["ich werde ess<strong>en</strong>","du wirst ess<strong>en</strong>","er/sie/es wird ess<strong>en</strong>","wir werden ess<strong>en</strong>","ihr werdet ess<strong>en</strong>","Sie werden ess<strong>en</strong>","sie werden ess<strong>en</strong>"];
var quizConj4 = ["werde essen","wirst essen","wird essen","werden essen","werdet essen","werden essen"];

var forConj5 = ["ich würde ess<strong>en</strong>","du würdest ess<strong>en</strong>","er/sie/es würde ess<strong>en</strong>","wir würden ess<strong>en</strong>","ihr würdet ess<strong>en</strong>","Sie würden ess<strong>en</strong>","sie würden ess<strong>en</strong>"];
var quizConj5 = ["würde essen","würdest essen","würde essen","würden essen","würdet essen","würden essen"];

var engConj1  = ["I am eating","you are eating (informal)","he/she/it is eating","we are eating","you are eating (plural)","you are eating (formal)","they are eating"];
var engConj2  = ["I ate","you ate (informal)","he/she/it ate","we ate","you ate (plural)","you ate (formal)","they ate"];
var engConj3  = ["I used to eat","you used to eat (informal)","he/she/it used to eat","we used to eat","you used to eat (plural)","you used to eat (formal)","they used to eat"];
var engConj4  = ["I will eat","you will eat (informal)","he/she/it will eat","we will eat","you will eat (plural)","you will eat (formal)","they will eat"];
var engConj5  = ["I would eat","you would eat (informal)","he/she/it would eat","we would eat","you would eat (plural)","you would eat (formal)","they would eat"];

var verbTypeNum = "7";var forConj6 = "Haben";var forConj7 = "Changing";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "e" in the stem changes to an "a" in the narrative past. You will also notice the "ss" changing to "ß" in the narrative past and a "g" added in front of the verb in the conversational past.'];
