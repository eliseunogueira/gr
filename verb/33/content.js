var lessonNumber = 33;var lessonTitle = "Ankommen (To arrive)";var forExamples = ["Ankommen","Sie müssen in dreißig Minuten <strong>ankommen</strong>.","du kommst an","<strong>Du kommst</strong> immer zu spät <em>an</em>. Ich warte auf dich!","er ist angekommen","<strong>Er ist</strong> nach einem langen Arbeitstag <strong>angekommen</strong>.","er kam an","<strong>Er kam</strong> früh <em>an</em> und wartete mit Blumen auf sie.","wir werden ankommen","<strong>Wir werden</strong> spät <strong>ankommen</strong>!","ich würde ankommen","Wenn ich mich nicht total verirrt hätte, <strong>würde ich</strong> rechtzeitig <strong>ankommen</strong>. "];var engExamples = ["To arrive","They have <em>to arrive</em> in thirty minutes.","you arrive","<em>You</em> always <em>arrive</em> late. I am waiting for you!","he arrived","<em>He arrived</em> after a long day of work.","he arrived","<em>He arrived</em> early and waited for her with flowers.","we will arrive","<em>We will arrive</em> late!","I would arrive","If I weren't completely lost, <em>I would arrive</em> in time."];var btnColor = ["#00BFFF","#001E51"];

var forConj1 = ["ich komm<strong>e</strong> an","du komm<strong>st</strong> an","er/sie/es komm<strong>t</strong> an","wir komm<strong>en</strong> an","ihr komm<strong>t</strong> an","Sie komm<strong>en</strong> an","sie komm<strong>en</strong> an"];
var quizConj1 = ["komme an","kommst an","kommt an","kommen an","kommt an","kommen an"];

var forConj2 = ["ich bin an<strong>ge</strong>komm<strong>en</strong>","du bist an<strong>ge</strong>komm<strong>en</strong>","er/sie/es ist an<strong>ge</strong>komm<strong>en</strong>","wir sind an<strong>ge</strong>komm<strong>en</strong>","ihr seid an<strong>ge</strong>komm<strong>en</strong>","Sie sind an<strong>ge</strong>komm<strong>en</strong>","sie sind an<strong>ge</strong>komm<strong>en</strong>"];
var quizConj2 = ["bin angekommen","bist angekommen","ist angekommen","sind angekommen","seid angekommen","sind angekommen"];

var forConj3 = ["ich k<em>am</em> an","du k<em>am</em><strong>st</strong> an","er/sie/es k<em>am</em> an","wir k<em>am</em><strong>en</strong> an","ihr k<em>am</em><strong>t</strong> an","Sie k<em>am</em><strong>en</strong> an","sie k<em>am</em><strong>en</strong> an"];
var quizConj3 = ["kam an","kamst an","kam an","kamen an","kamt an","kamen an"];

var forConj4 = ["ich werde ankomm<strong>en</strong>","du wirst ankomm<strong>en</strong>","er/sie/es wird ankomm<strong>en</strong>","wir werden ankomm<strong>en</strong>","ihr werdet ankomm<strong>en</strong>","Sie werden ankomm<strong>en</strong>","sie werden ankomm<strong>en</strong>"];
var quizConj4 = ["werde ankommen","wirst ankommen","wird ankommen","werden ankommen","werdet ankommen","werden ankommen"];

var forConj5 = ["ich würde ankomm<strong>en</strong>","du würdest ankomm<strong>en</strong>","er/sie/es würde ankomm<strong>en</strong>","wir würden ankomm<strong>en</strong>","ihr würdet ankomm<strong>en</strong>","Sie würden ankomm<strong>en</strong>","sie würden ankomm<strong>en</strong>"];
var quizConj5 = ["würde ankommen","würdest ankommen","würde ankommen","würden ankommen","würdet ankommen","würden ankommen"];

var engConj1  = ["I arrive","you arrive (informal)","he/she/it arrives","we arrive","you arrive (plural)","you arrive (formal)","they arrive"];
var engConj2  = ["I arrived","you arrived (informal)","he/she/it arrived","we arrived","you arrived (plural)","you arrived (formal)","they arrived"];
var engConj3  = ["I arrived","you arrived (informal)","he/she/it arrived","we arrived","you arrived (plural)","you arrived (formal)","they arrived"];
var engConj4  = ["I will arrive","you will arrive (informal)","he/she/it will arrive","we will arrive","you will arrive (plural)","you will arrive (formal)","they will arrive"];
var engConj5  = ["I would arrive","you would arrive (informal)","he/she/it would arrive","we would arrive","you would arrive (plural)","you would arrive (formal)","they would arrive"];

var verbTypeNum = "7";var forConj6 = "Sein";
var forConj7 = "An+k_m";

var pronominal = false;var conjNum = [0,0,1,1,2,2,3,3,4,4,5,5];

var irregReason = ['This verb is strong because the "omm" in the stem of the verb changes to "am" in some of the conjugation. The changes are shown in black in this lesson.'];
var extraNote = 'Some German verbs have separable prefixes. The prefixes change the meaning of the original verb. In some of the conjugation, they are separated from the verb and placed at the end of the sentence. The conjugation itself remains the same.<br><br>E.G. Kommen = To come<br><em style="opacity: 0;">E.G.</em> <strong>An</strong>kommen = To arrive';