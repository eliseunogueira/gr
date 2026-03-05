var lessonNumber = 45;var lessonTitle = "Tanzen (To dance)";var forExamples = ["Tanzen","Wir lieben es, zu <strong>tanzen</strong> und zu singen.","sie tanzen","<strong>Sie tanzen</strong> in der Nähe des Ozeans.","sie hat getanzt","<strong>Sie hat</strong> fünf Jahre lang <strong>getanzt</strong>.","ihr tanztet","<strong>Ihr tanztet</strong> sehr gut zusammen.","ich werde tanzen","<strong>Ich werde</strong> heute Abend in der Show <strong>tanzen</strong>.","ich würde tanzen","<strong>Ich würde</strong> den ganzen Tag mit dir <strong>tanzen</strong>, wenn ich könnte."];var engExamples = ["To dance","We love <em>to dance</em> and to sing.","they are dancing","<em>They are dancing</em> near the ocean.","she danced","<em>She danced</em> for five years.","you used to dance","<em>You used to dance</em> very well together.","I will dance","<em>I will dance</em> in the show tonight.","I would dance","<em>I would dance</em> with you all day if I could."];var btnColor = ["#CC00E2","#4A0041"];

var forConj1 = ["ich tanz<strong>e</strong>","du tanz<strong>t</strong>","er/sie/es tanz<strong>t</strong>","wir tanz<strong>en</strong>","ihr tanz<strong>t</strong>","Sie tanz<strong>en</strong>","sie tanz<strong>en</strong>"];
var quizConj1 = ["tanze","tanzt","tanzt","tanzen","tanzt","tanzen"];

var forConj2 = ["ich habe <strong>ge</strong>tanz<strong>t</strong>","du hast <strong>ge</strong>tanz<strong>t</strong>","er/sie/es hat <strong>ge</strong>tanz<strong>t</strong>","wir haben <strong>ge</strong>tanz<strong>t</strong>","ihr habt <strong>ge</strong>tanz<strong>t</strong>","Sie haben <strong>ge</strong>tanz<strong>t</strong>","sie haben <strong>ge</strong>tanz<strong>t</strong>"];
var quizConj2 = ["habe getanzt","hast getanzt","hat getanzt","haben getanzt","habt getanzt","haben getanzt"];

var forConj3 = ["ich tanz<strong>te</strong>","du tanz<strong>test</strong>","er/sie/es tanz<strong>te</strong>","wir tanz<strong>ten</strong>","ihr tanz<strong>tet</strong>","Sie tanz<strong>ten</strong>","sie tanz<strong>ten</strong>"];
var quizConj3 = ["tanzte","tanztest","tanzte","tanzten","tanztet","tanzten"];

var forConj4 = ["ich werde tanz<strong>en</strong>","du wirst tanz<strong>en</strong>","er/sie/es wird tanz<strong>en</strong>","wir werden tanz<strong>en</strong>","ihr werdet tanz<strong>en</strong>","Sie werden tanz<strong>en</strong>","sie werden tanz<strong>en</strong>"];
var quizConj4 = ["werde tanzen","wirst tanzen","wird tanzen","werden tanzen","werdet tanzen","werden tanzen"];

var forConj5 = ["ich würde tanz<strong>en</strong>","du würdest tanz<strong>en</strong>","er/sie/es würde tanz<strong>en</strong>","wir würden tanz<strong>en</strong>","ihr würdet tanz<strong>en</strong>","Sie würden tanz<strong>en</strong>","sie würden tanz<strong>en</strong>"];
var quizConj5 = ["würde tanzen","würdest tanzen","würde tanzen","würden tanzen","würdet tanzen","würden tanzen"];

var engConj1  = ["I am dancing","you are dancing (informal)","he/she/it is dancing","we are dancing","you are dancing (plural)","you are dancing (formal)","they are dancing"];
var engConj2  = ["I danced","you danced (informal)","he/she/it danced","we danced","you danced (plural)","you danced (formal)","they danced"];
var engConj3  = ["I used to dance","you used to dance (informal)","he/she/it used to dance","we used to dance","you used to dance (plural)","you used to dance (formal)","they used to dance"];
var engConj4  = ["I will dance","you will dance (informal)","he/she/it will dance","we will dance","you will dance (plural)","you will dance (formal)","they will dance"];
var engConj5  = ["I would dance","you would dance (informal)","he/she/it would dance","we would dance","you would dance (plural)","you would dance (formal)","they would dance"];

var verbTypeNum = "1";var forConj6 = "Haben";var forConj7 = "Tanz";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = [''];
