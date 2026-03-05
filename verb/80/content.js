var lessonNumber = 80;var lessonTitle = "Aufmachen (To open)";var forExamples = ["Aufmachen","Kann ich eine dieser Süßigkeitendosen <strong>aufmachen</strong>?","ihr macht auf","Jeden Morgen <strong>macht</strong> <em>ihr</em> euren Briefkasten <em>auf</em>. ","sie hat aufgemacht","<strong>Sie hat</strong> die Motorhaube <strong>aufgemacht</strong>, aber sie sieht das Problem nicht.","du machtest auf","<strong>Du machtest</strong> dein Geschenk <em>auf</em> und es war Licht darin. ","er wird aufmachen","<strong>Er wird</strong> die Wagentür für sie <strong>aufmachen</strong>.","ich würde aufmachen","Wenn die Tür nicht geschlossen wäre, <strong>würde</strong> <em>ich</em> sie <strong>aufmachen</strong>."];var engExamples = ["To open","Can I <em>open</em> one of these candy jars?","you open","<em>You open</em> your mailbox every morning.","she opened","<em>She opened</em> the hood, but she doesn't see the problem.","you were opening","<em>You were opening</em> your gift and there was light inside.","he will open","<em>He will open</em> the car door for her.","I would open","If the door weren't locked, <em>I would open</em> it."];var btnColor = ["#FFC400","#BB0A00"];

var forConj1 = ["ich mach<strong>e</strong> auf","du mach<strong>st</strong> auf","er/sie/es mach<strong>t</strong> auf","wir mach<strong>en</strong> auf","ihr mach<strong>t</strong> auf","Sie mach<strong>en</strong> auf","sie mach<strong>en</strong> auf"];
var quizConj1 = ["mache auf","machst auf","macht auf","machen auf","macht auf","machen auf"];

var forConj2 = ["ich habe auf<strong>ge</strong>mach<strong>t</strong>","du hast auf<strong>ge</strong>mach<strong>t</strong>","er/sie/es hat auf<strong>ge</strong>mach<strong>t</strong>","wir haben auf<strong>ge</strong>mach<strong>t</strong>","ihr habt auf<strong>ge</strong>mach<strong>t</strong>","Sie haben auf<strong>ge</strong>mach<strong>t</strong>","sie haben auf<strong>ge</strong>mach<strong>t</strong>"];
var quizConj2 = ["habe aufgemacht","hast aufgemacht","hat aufgemacht","haben aufgemacht","habt aufgemacht","haben aufgemacht"];

var forConj3 = ["ich mach<strong>te</strong> auf","du mach<strong>test</strong> auf","er/sie/es mach<strong>te</strong> auf","wir mach<strong>ten</strong> auf","ihr mach<strong>tet</strong> auf","Sie mach<strong>ten</strong> auf","sie mach<strong>ten</strong> auf"];
var quizConj3 = ["machte auf","machtest auf","machte auf","machten auf","machtet auf","machten auf"];

var forConj4 = ["ich werde aufmach<strong>en</strong>","du wirst aufmach<strong>en</strong>","er/sie/es wird aufmach<strong>en</strong>","wir werden aufmach<strong>en</strong>","ihr werdet aufmach<strong>en</strong>","Sie werden aufmach<strong>en</strong>","sie werden aufmach<strong>en</strong>"];
var quizConj4 = ["werde aufmachen","wirst aufmachen","wird aufmachen","werden aufmachen","werdet aufmachen","werden aufmachen"];

var forConj5 = ["ich würde aufmach<strong>en</strong>","du würdest aufmach<strong>en</strong>","er/sie/es würde aufmach<strong>en</strong>","wir würden aufmach<strong>en</strong>","ihr würdet aufmach<strong>en</strong>","Sie würden aufmach<strong>en</strong>","sie würden aufmach<strong>en</strong>"];
var quizConj5 = ["würde aufmachen","würdest aufmachen","würde aufmachen","würden aufmachen","würdet aufmachen","würden aufmachen"];

var engConj1  = ["I open","you open (informal)","he/she/it opens","we open","you open (plural)","you open (formal)","they open"];
var engConj2  = ["I opened","you opened (informal)","he/she/it opened","we opened","you opened (plural)","you opened (formal)","they opened"];
var engConj3  = ["I was opening","you were opening (informal)","he/she/it was opening","we were opening","you were opening (plural)","you were opening (formal)","they were opening"];
var engConj4  = ["I will open","you will open (informal)","he/she/it will open","we will open","you will open (plural)","you will open (formal)","they will open"];
var engConj5  = ["I would open","you would open (informal)","he/she/it would open","we would open","you would open (plural)","you would open (formal)","they would open"];

var verbTypeNum = "1";var forConj6 = "Haben";var forConj7 = "Aufmach";var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = [''];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style=”opacity: 0;”>E.G.</em> <strong>An</strong>kommen = To arrive';