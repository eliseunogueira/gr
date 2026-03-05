var lessonNumber = 113;var lessonTitle = "Aufwachen (To wake up)";var forExamples = ["Aufwachen","Er will wirklich nicht <strong>aufwachen</strong>.","du wachst auf","%Subordinating conjunctions (such as ''wenn'') make the verb go to the very end of the sentence, which causes separable verbs to remain attached.%Du bist immer fröhlich, wenn <strong>du aufwachst</strong>.","wir sind aufgewacht","<strong>Wir sind</strong> in guter Stimmung <strong>aufgewacht</strong>.","ich wachte auf","<strong>Ich wachte</strong> vor ihm <strong>auf</strong>.","sie wird aufwachen","Wenn der Alarm losgeht, <strong>wird sie aufwachen</strong>.","du würdest aufwachen","Wenn du früher ins Bett gegangen wärst, <strong>würdest du</strong> ausgeruht <strong>aufwachen</strong>."];var engExamples = ["To wake up","He really doesn't want <em>to wake up</em>.","you wake up","You are always happy when <em>you wake up</em>.","we woke up","<em>We woke up</em> in a good mood.","I woke up","<em>I woke up</em> before him.","she will wake up","<em>She will wake up</em> when the alarm goes off.","you would wake up","If you went to bed earlier, <em>you would wake up</em> well-rested."];var btnColor = ["#FFEE00","#B83D00"];

var forConj1 = ["ich wach<strong>e</strong> auf","du wach<strong>st</strong> auf","er/sie/es wach<strong>t</strong> auf","wir wach<strong>en</strong> auf","ihr wach<strong>t</strong> auf","Sie wach<strong>en</strong> auf","sie wach<strong>en</strong> auf"];
var quizConj1 = ["wache auf","wachst auf","wacht auf","wachen auf","wacht auf","wachen auf"];

var forConj2 = ["ich bin auf<strong>ge</strong>wach<strong>t</strong>","du bist auf<strong>ge</strong>wach<strong>t</strong>","er/sie/es ist auf<strong>ge</strong>wach<strong>t</strong>","wir sind auf<strong>ge</strong>wach<strong>t</strong>","ihr seid auf<strong>ge</strong>wach<strong>t</strong>","Sie sind auf<strong>ge</strong>wach<strong>t</strong>","sie sind auf<strong>ge</strong>wach<strong>t</strong>"];
var quizConj2 = ["bin aufgewacht","bist aufgewacht","ist aufgewacht","sind aufgewacht","seid aufgewacht","sind aufgewacht"];

var forConj3 = ["ich wach<strong>te</strong> auf","du wach<strong>test</strong> auf","er/sie/es wach<strong>te</strong> auf","wir wach<strong>ten</strong> auf","ihr wach<strong>tet</strong> auf","Sie wach<strong>ten</strong> auf","sie wach<strong>ten</strong> auf"];
var quizConj3 = ["wachte auf","wachtest auf","wachte auf","wachten auf","wachtet auf","wachten auf"];

var forConj4 = ["ich werde aufwach<strong>en</strong>","du wirst aufwach<strong>en</strong>","er/sie/es wird aufwach<strong>en</strong>","wir werden aufwach<strong>en</strong>","ihr werdet aufwach<strong>en</strong>","Sie werden aufwach<strong>en</strong>","sie werden aufwach<strong>en</strong>"];
var quizConj4 = ["werde aufwachen","wirst aufwachen","wird aufwachen","werden aufwachen","werdet aufwachen","werden aufwachen"];

var forConj5 = ["ich würde aufwach<strong>en</strong>","du würdest aufwach<strong>en</strong>","er/sie/es würde aufwach<strong>en</strong>","wir würden aufwach<strong>en</strong>","ihr würdet aufwach<strong>en</strong>","Sie würden aufwach<strong>en</strong>","sie würden aufwach<strong>en</strong>"];
var quizConj5 = ["würde aufwachen","würdest aufwachen","würde aufwachen","würden aufwachen","würdet aufwachen","würden aufwachen"];

var engConj1  = ["I wake up","you wake up (informal)","he/she/it wakes up","we wake up","you wake up (plural)","you wake up (formal)","they wake up"];
var engConj2  = ["I woke up","you woke up (informal)","he/she/it woke up","we woke up","you woke up (plural)","you woke up (formal)","they woke up"];
var engConj3  = ["I woke up","you woke up (informal)","he/she/it woke up","we woke up","you woke up (plural)","you woke up (formal)","they woke up"];
var engConj4  = ["I will wake up","you will wake up (informal)","he/she/it will wake up","we will wake up","you will wake up (plural)","you will wake up (formal)","they will wake up"];
var engConj5  = ["I would wake up","you would wake up (inf.)","he/she/it would wake up","we would wake up","you would wake up (pl.)","you would wake up (f.)","they would wake up"];

var verbTypeNum = "1";var forConj6 = "Sein";var forConj7 = "Aufwach";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = [''];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style=”opacity: 0;”>E.G.</em> <strong>An</strong>kommen = To arrive';