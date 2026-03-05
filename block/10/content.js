var quizLessonBoth = "both";var lessonNumber = 10;var numOfAllQuiz = 10;var lessonTitle = "Unbestimmte Artikel (Indefinite articles)";var btnColor = ["#00BFFF","#001E51","#0066FF","#00025B"];var quesToRemove = [];var startNarration = ["In this lesson, you will learn the equivalence of the English articles ''a'' and ''an'' in German.","They are the indefinite articles."];var narration = ["Ein = A / An (masculine)","Ein = A / An (neuter)","Eine = A / An (feminine) ","Kein / Keine = No & Not any","These articles are in the nominative case. You'll learn more about the German cases in the declension lessons.",""];var forTitles = ["Ein","Ein","Eine","Kein / Keine"];var forSideTitles = forTitles;



var engTitles = ["A / An (masculine)","A / An (neuter)","A / An (feminine)","No & Not any"];
var engSideTitles = ["A / An (masculine)","A / An (neuter)","A / An (feminine)","No & Not any"];

var titleSkip = [false,false,false,false,false];var exampleNums = [4,3,4,4];

var forExamples = ["<strong>Ein</strong> Rock","<strong>Ein</strong> Onkel","<strong>Ein</strong> Löffel","<strong>Ein</strong> Wald","<strong>Ein</strong> Knie","<strong>Ein</strong> Fahrrad","<strong>Ein</strong> Tier","<strong>Eine</strong> Krawatte","<strong>Eine</strong> Tür","<strong>Eine</strong> Kartoffel","<strong>Eine</strong> Tante","<em>Ein</em> Hammer. <strong>Kein</strong> Hammer.","<em>Eine</em> Zitrone. <strong>Keine</strong> Zitrone.","<em>Ein</em> Haustier. <strong>Kein</strong> Haustier.","<em>Ein</em> Cousin. <strong>Kein</strong> Cousin."];

var engExamples = ["<em>A</em> skirt (masculine)","<em>An</em> uncle (masculine)","<em>A</em> spoon (masculine)","<em>A</em> forest (masculine)","<em>A</em> knee (neuter)","<em>A</em> bicycle (neuter)","<em>An</em> animal (neuter)","<em>A</em> tie (feminine)","<em>A</em> door (feminine)","<em>A</em> potato (feminine)","<em>An</em> aunt (feminine)","<em>A</em> hammer. <em>No</em> hammer.","<em>A</em> lemon. <em>No</em> lemon.","<em>A</em> pet. <em>No</em> pet.","<em>A</em> cousin. <em>No</em> cousin."];


var forExtra1 = ["<strong>Ein</strong> Regenschirm ist anders als die anderen.","Es war definitiv <strong>ein</strong> Mann.","<strong>Ein</strong> großer Mann sitzt vor mir.","Das ist gut. <strong>Ein</strong> Arm heilt, aber <em>ein</em> Kopf..."];var engExtra1 = ["<em>One</em> umbrella is different from the others. <i class='qhint'>(masculine)</i>","It was clearly <em>a</em> man. <i class='qhint'>(masculine)</i>","<em>A</em> tall man is sitting in front of me. <i class='qhint'>(masculine)</i>","That's good. <em>An</em> arm heals, but <em>a</em> head... <i class='qhint'>(masculine)</i>"];

var imageExtra1 = ["../../vocab/94/images/pic1.jpg","../../convo/images/convo51B.jpg","../../block/28/images/pic6.jpg","../../convo/images/convo22A.jpg"];
var fastExtra1 = ["../../vocab/94/sounds/sound3","../../convo/51/sounds/2fast3","../../block/28/sounds/sound11","../../convo/22/sounds/1fast10"];
var slowExtra1 = ["../../vocab/94/sounds/sound4","../../convo/51/sounds/2slow3","../../block/28/sounds/sound12","../../convo/22/sounds/1slow10"];


var forExtra2 = ["Es ist <strong>ein</strong> Geschenk von mir!","Ich möchte <strong>ein</strong> Hotelzimmer mieten.","Er bringt <strong>ein</strong> Ding ins Feld.","Wir schickten unseren Freunden <strong>ein</strong> Geschenk.","Es wird <strong>ein</strong> neues Gebäude in der Gegend geben."];
var engExtra2 = ["It's <em>a</em> gift from me! <i class='qhint'>(neuter)</i>","I would like to rent <em>a</em> hotel room. <i class='qhint'>(neuter)</i>","He is bringing <em>a</em> thing in the field. <i class='qhint'>(neuter)</i>","We were sending our friends <em>a</em> gift. <i class='qhint'>(neuter)</i>","There will be <em>a</em> new building in the neighborhood. <i class='qhint'>(neuter)</i>"];



var imageExtra2 = ["../../block/45/images/pic1.jpg","../../verb/86/images/pic1.jpg","../../vocab/40/images/pic11.jpg","../../verb/138/images/pic4.jpg","../../block/75/images/pic9.jpg"];var fastExtra2 = ["../../block/45/sounds/sound1","../../verb/86/sounds/sound3","../../vocab/40/sounds/sound43","../../verb/138/sounds/sound15","../../block/75/sounds/sound17"];var slowExtra2 = ["../../block/45/sounds/sound2","../../verb/86/sounds/sound4","../../vocab/40/sounds/sound44","../../verb/138/sounds/sound16","../../block/75/sounds/sound18"];

var forExtra3 = ["Ja. Es ist schon <strong>eine</strong> Weile her!","Es gibt <strong>eine</strong> Menge Schnee.","Ja, ich werde dir <strong>eine</strong> SMS schicken.","Sie brauchen jedoch <strong>eine</strong> Füllung.","Nein, ich möchte <strong>eine</strong> Rückfahrkarte.	","Es sieht wie <strong>eine</strong> Lungeninfektion aus.","<strong>Eine</strong> volle Woche wäre billiger...","Ich traf <strong>eine</strong> Menge interessante Leute.","Ja. Jeden Morgen gibt es <strong>eine</strong> Führung."];

var engExtra3 = ["Yes. It's been <em>a</em> while! <i class='qhint'>(feminine)</i>","There is <em>a</em> lot of snow. <i class='qhint'>(feminine)</i>","Yes, I'll send you <em>a</em> text. <i class='qhint'>(feminine)</i>","You need <em>a</em> filling, though. <i class='qhint'>(feminine)</i>","No, I would like <em>a</em> round trip. <i class='qhint'>(feminine)</i>","It looks like <em>a</em> lung infection. <i class='qhint'>(feminine)</i>","<em>A</em> full week would be less expensive... <i class='qhint'>(feminine)</i>","I met <em>a</em> lot of interesting people. <i class='qhint'>(feminine)</i>","Yes. There is <em>a</em> guided tour every morning. <i class='qhint'>(feminine)</i>"];

var imageExtra3 = ["../../convo/images/convo2B.jpg","../../vocab/38/images/pic3.jpg","../../convo/images/convo4B.jpg","../../convo/images/convo23A.jpg","../../convo/images/convo29B.jpg","../../convo/images/convo20A.jpg","../../convo/images/convo25A.jpg","../../verb/78/images/pic4.jpg","../../convo/images/convo17A.jpg"];

var fastExtra3 = ["../../convo/2/sounds/2fast2","../../vocab/38/sounds/sound11","../../convo/4/sounds/2fast10","../../convo/23/sounds/1fast12","../../convo/29/sounds/2fast2","../../convo/20/sounds/1fast8","../../convo/25/sounds/1fast7","../../verb/78/sounds/sound15","../../convo/17/sounds/1fast3"];var slowExtra3 = ["../../convo/2/sounds/2slow2","../../vocab/38/sounds/sound12","../../convo/4/sounds/2slow10","../../convo/23/sounds/1slow12","../../convo/29/sounds/2slow2","../../convo/20/sounds/1slow8","../../convo/25/sounds/1slow7","../../verb/78/sounds/sound16","../../convo/17/sounds/1slow3"];

var forExtra4 = ["Ich habe wohl <strong>keine</strong> Wahl!","Ich habe gar <strong>keine</strong> Idee.","<strong>Kein</strong> Käse für die Maus.","Dieses Haus hat <strong>kein</strong> Dach!","Der Junge hat <strong>keine</strong> Socke.","Es gibt <strong>keine</strong> Möbel im Haus.","<strong>Kein</strong> Mann ist so stark wie Herkules.","Es sind <strong>keine</strong> Männer in dieser Gruppe."];

var engExtra4 = ["I have <em>no</em> choice! <i class='qhint'>(feminine)</i>","I have <em>no</em> idea at all. <i class='qhint'>(feminine)</i>","<em>No</em> cheese for the mouse. <i class='qhint'>(masculine)</i>","This house has <em>no</em> roof! <i class='qhint'>(neuter)</i>","The boy has <em>no</em> sock. <i class='qhint'>(feminine)</i>","There is <em>no</em> furniture in the house. <i class='qhint'>(plural)</i>","<em>No</em> man is as strong as Hercules. <i class='qhint'>(masculine)</i>","There are <em>no</em> men in this group. <i class='qhint'>(plural)</i>"];


var imageExtra4 = ["../../convo/images/convo18B.jpg","../../block/34/images/pic4.jpg","../../block/64/images/pic2.jpg","../../block/64/images/pic4.jpg","../../block/64/images/pic7.jpg","../../block/75/images/pic14.jpg","../../block/64/images/pic1.jpg","../../vocab/89/images/pic3.jpg"];

var fastExtra4 = ["../../convo/18/sounds/2fast5","../../block/34/sounds/sound7","../../block/64/sounds/sound3","../../block/64/sounds/sound7","../../block/64/sounds/sound13","../../block/75/sounds/sound27","../../block/64/sounds/sound1","../../vocab/89/sounds/sound9"];

var slowExtra4 = ["../../convo/18/sounds/2slow5","../../block/34/sounds/sound8","../../block/64/sounds/sound4","../../block/64/sounds/sound8","../../block/64/sounds/sound14","../../block/75/sounds/sound28","../../block/64/sounds/sound2","../../vocab/89/sounds/sound10"];