var lessonNumber = 1;var lessonTitle = "Sein (To be)";var forExamples = ["Sein","Er liebt es, Vater zu <strong>sein</strong>.","ich bin","<strong>Ich bin</strong>  Deutschlehrer.","ich bin","<strong>Ich bin</strong> heute Morgen müde.","du bist","Heute <strong>bist</strong> <em>du</em> krank.","du bist","<strong>Du bist</strong> eine ruhige Person.","er ist","<strong>Er ist</strong> glücklich, wieder in die Schule zu gehen.","sie ist","<strong>Sie ist</strong> mutig.","wir sind","<strong>Wir sind</strong> ein bisschen verloren.","wir sind","<strong>Wir sind</strong> fertig zum Gehen.","ihr seid","<strong>Ihr seid</strong> sehr schön.","ihr seid","<strong>Ihr seid</strong> sehr stolz auf eure Arbeit.","Sie sind","<strong>Sind</strong> <em>Sie</em> sicher, dass es die richtige Antwort ist?","sie sind","<strong>Sie sind</strong> immer noch verliebt.","sie sind","<strong>Sie sind</strong> im Park."];var engExamples = ["To be","He likes <em>to be</em> a father.","I am","<em>I am</em> a German teacher.","I am","<em>I am</em> tired this morning.","you are","<em>You are</em> sick today.","you are","<em>You are</em> a calm person.","he is","<em>He is</em> happy to go back to school.","she is","<em>She is</em> courageous.","we are","<em>We are</em> a bit lost.","we are","<em>We are</em> ready to leave.","you are","<em>You are</em> very beautiful.","you are","<em>You are</em> very proud of your work.","you are","<em>Are you</em> certain that it's the right answer?","they are","<em>They are</em> still in love.","they are","<em>They are</em> at the park."];var btnColor = ["#1EEC00","#163F00"];

var forConj1 = ["ich <em>bin</em>","du <em>bist</em>","er/sie/es <em>ist</em>","wir <em>sind</em>","ihr <em>seid</em>","Sie <em>sind</em>","sie <em>sind</em>"];
var quizConj1 = ["bin","bist","ist","sind","seid","sind"];

var forConj2 = ["ich bin <strong>ge</strong><em>wes</em><strong>en</strong>","du bist <strong>ge</strong><em>wes</em><strong>en</strong>","er/sie/es ist <strong>ge</strong><em>wes</em><strong>en</strong>","wir sind <strong>ge</strong><em>wes</em><strong>en</strong>","ihr seid <strong>ge</strong><em>wes</em><strong>en</strong>","Sie sind <strong>ge</strong><em>wes</em><strong>en</strong>","sie sind <strong>ge</strong><em>wes</em><strong>en</strong>"];
var quizConj2 = ["bin gewesen","bist gewesen","ist gewesen","sind gewesen","seid gewesen","sind gewesen"];

var forConj3 = ["ich <em>war</em>","du <em>war</em><strong>st</strong>","er/sie/es <em>war</em>","wir <em>war</em><strong>en</strong>","ihr <em>war</em><strong>t</strong>","Sie <em>war</em><strong>en</strong>","sie <em>war</em><strong>en</strong>"];
var quizConj3 = ["war","warst","war","waren","wart","waren"];

var forConj4 = ["ich werde sei<strong>n</strong>","du wirst sei<strong>n</strong>","er/sie/es wird sei<strong>n</strong>","wir werden sei<strong>n</strong>","ihr werdet sei<strong>n</strong>","Sie werden sei<strong>n</strong>","sie werden sei<strong>n</strong>"];
var quizConj4 = ["werde sein","wirst sein","wird sein","werden sein","werdet sein","werden sein"];

var forConj5 = ["ich würde sei<strong>n</strong>","du würdest sei<strong>n</strong>","er/sie/es würde sei<strong>n</strong>","wir würden sei<strong>n</strong>","ihr würdet sei<strong>n</strong>","Sie würden sei<strong>n</strong>","sie würden sei<strong>n</strong>"];
var quizConj5 = ["würde sein","würdest sein","würde sein","würden sein","würdet sein","würden sein"];

var engConj1  = ["I am","you are (informal)","he/she/it is","we are","you are (plural)","you are (formal)","they are"];
var engConj2  = ["I was","you were (informal)","he/she/it was","we were","you were (plural)","you were (formal)","they were"];
var engConj3  = ["I was being","you were being (informal)","he/she/it was being","we were being","you were being (plural)","you were being (formal)","they were being"];
var engConj4  = ["I will be","you will be (informal)","he/she/it will be","we will be","you will be (plural)","you will be (formal)","they will be"];
var engConj5  = ["I would be","you would be (informal)","he/she/it would be","we would be","you would be (plural)","you would be (formal)","they would be"];

var verbTypeNum = "2";var forConj6 = "Sein";var forConj7 = "Changing";var pronominal = false;var conjNum = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var irregReason = [''];
var quizForExamples = ["<strong>Ich bin</strong> in der Bibliothek.","<strong>Du bist</strong> von deinem Ergebnis enttäuscht.","<strong>Sie ist</strong> auf dem Fußboden.","<strong>Wir sind</strong> zuversichtlich.","<strong>Ihr seid</strong> Kinder.","<strong>Sie sind</strong> ziemlich stark."];var quizEngExamples = ["<em>I am</em> in the library.","<em>You are</em> disappointed of your result.","<em>She is</em> on the floor.","<em>We are</em> confident.","<em>You are</em> children.","<em>They are</em> rather strong."];