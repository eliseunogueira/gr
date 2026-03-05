var lessonNumber = 24;var lessonTitle = "Mögen (To like)";var forExamples = ["ich mag","<strong>Ich mag</strong> Bücher mit bunten Bildern.","du magst","<strong>Du magst</strong> Peperoni, weil sie scharf sind.","er mag","Weißt du, ob <strong>er</strong> Brettspiele <strong>mag</strong>?","wir mögen","<strong>Wir mögen</strong> das Geräusch der Wellen.","ihr mögt","Warum <strong>mögt</strong> <em>ihr</em> diesen Film, er ist so langweilig!","sie mögen","<strong>Sie mögen</strong> Konfitüre, Marmelade aber nicht."];var engExamples = ["I like","<em>I like</em> books with colorful pictures.","you like","<em>You like</em> hot peppers because they are spicy.","he likes","Do you know if <em>he likes</em> board games?","we like","<em>We like</em> the sound of the waves.","you like","Why do <em>you like</em> this movie, it is so boring!","they like","<em>They like</em> jam, but not marmalade."];var btnColor = ["#1EEC00","#163F00"];

var forConj1 = ["ich m<em>a</em>g","du m<em>a</em>g<strong>st</strong>","er/sie/es m<em>a</em>g","wir mög<strong>en</strong>","ihr mög<strong>t</strong>","Sie mög<strong>en</strong>","sie mög<strong>en</strong>"];
var quizConj1 = ["mag","magst","mag","mögen","mögt","mögen"];

var forConj2 = ["ich habe <strong>ge</strong>m<em>och</em><strong>t</strong>","du hast <strong>ge</strong>m<em>och</em><strong>t</strong>","er/sie/es hat <strong>ge</strong>m<em>och</em><strong>t</strong>","wir haben <strong>ge</strong>m<em>och</em><strong>t</strong>","ihr habt <strong>ge</strong>m<em>och</em><strong>t</strong>","Sie haben <strong>ge</strong>m<em>och</em><strong>t</strong>","sie haben <strong>ge</strong>m<em>och</em><strong>t</strong>"];
var quizConj2 = ["habe gemocht","hast gemocht","hat gemocht","haben gemocht","habt gemocht","haben gemocht"];

var forConj3 = ["ich m<em>och</em><strong>te</strong>","du m<em>och</em><strong>test</strong>","er/sie/es m<em>och</em><strong>te</strong>","wir m<em>och</em><strong>ten</strong>","ihr m<em>och</em><strong>tet</strong>","Sie m<em>och</em><strong>ten</strong>","sie m<em>och</em><strong>ten</strong>"];
var quizConj3 = ["mochte","mochtest","mochte","mochten","mochtet","mochten"];

var forConj4 = ["ich werde mög<strong>en</strong>","du wirst mög<strong>en</strong>","er/sie/es wird mög<strong>en</strong>","wir werden mög<strong>en</strong>","ihr werdet mög<strong>en</strong>","Sie werden mög<strong>en</strong>","sie werden mög<strong>en</strong>"];
var quizConj4 = ["werde mögen","wirst mögen","wird mögen","werden mögen","werdet mögen","werden mögen"];

var forConj5 = ["ich würde mög<strong>en</strong>","du würdest mög<strong>en</strong>","er/sie/es würde mög<strong>en</strong>","wir würden mög<strong>en</strong>","ihr würdet mög<strong>en</strong>","Sie würden mög<strong>en</strong>","sie würden mög<strong>en</strong>"];
var quizConj5 = ["würde mögen","würdest mögen","würde mögen","würden mögen","würdet mögen","würden mögen"];

var engConj1  = ["I like","you like (informal)","he/she/it likes","we like","you like (plural)","you like (formal)","they like"];
var engConj2  = ["I liked","you liked (informal)","he/she/it liked","we liked","you liked (plural)","you liked (formal)","they liked"];
var engConj3  = ["I was liking","you were liking (informal)","he/she/it was liking","we were liking","you were liking (plural)","you were liking (formal)","they were liking"];
var engConj4  = ["I will like","you will like (informal)","he/she/it will like","we will like","you will like (plural)","you will like (formal)","they will like"];
var engConj5  = ["I would like","you would like (informal)","he/she/it would like","we would like","you would like (plural)","you would like (formal)","they would like"];

var verbTypeNum = "3";var forConj6 = "Haben";var forConj7 = "M";var pronominal = false;var conjNum = [1,1,1,1,1,1,1,1,1,1,1,1];

var irregReason = [''];
var quizForExamples = ["<strong>Sie mag</strong> kleine Hunde, aber sie hat Angst vor großen Hunden.","<strong>Wir mögen</strong> die Farben des Laubes im Herbst.","<strong>Ihr mögt</strong> dieses Lied, obwohl es sehr traurig ist.","<strong>Ich mag</strong> dein Geschenk, ich schwöre es!"];var quizEngExamples = ["<em>She likes</em> small dogs, but she is afraid of big dogs.","<em>We like</em> the colors of the leaves in fall.","<em>You like</em> this song, even though it is very sad.","<em>I like</em> your gift, I swear!"];