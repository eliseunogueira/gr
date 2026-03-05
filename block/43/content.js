var quizLessonBoth = "lesson";var lessonNumber = 43;var numOfAllQuiz = 44;var lessonTitle = "Personalpronomen: Akkusativ - Part III (Accusative personal pronouns)";var btnColor = ["#F30101","#5F0000","#FFC400","#BB0A00"];var quesToRemove = [];var startNarration = [];var narration = ["Ihn = Him","Sie = Her","''Es'' replaces previously mentioned neuter nouns.","","",""];var forTitles = ["ihn","sie","es","sie"];var engTitles = ["him","her","it","them"];var forSideTitles = forTitles;var engSideTitles = engTitles;var titleSkip = [false,false,false,false,false];var exampleNums = [4,4,3,4];


var forExamples = ["Ich werde <strong>ihn</strong> ins Kino mitnehmen.","Sie mag <strong>ihn</strong> gerne.","Er ruft seinen Freund an. Er ruft <strong>ihn</strong> an.","Das ist eine Überraschung für <strong>ihn</strong>.","Ich liebe meine Frau. Ich liebe <strong>sie</strong>.","Sie ließen <strong>sie</strong> allein.","Ich mag diese lustige Lampe. Ich mag <strong>sie</strong>.","Sie sieht ihre Freundin. Sie sieht <strong>sie</strong>.","Ich spiele <em>Klavier</em>. Ich spiele <strong>es</strong>.","Liest du <em>das</em> deutsche <em>Buch</em>? Ja, ich lese <strong>es</strong>.","Ich baue <em>ein Haus</em>. Ich baue <strong>es</strong>.","Ich esse <em>Himbeeren</em>. Ich esse <strong>sie</strong>.","Er bindet <em>seine Stiefel</em> zu. Er bindet <strong>sie</strong> zu.","Ich schaue <em>die Vögel</em> an. Ich schaue <strong>sie</strong> an.","Der Hund treibt <em>die Schafe</em> zusammen. Er treibt <strong>sie</strong> zusammen."];

var engExamples = ["I will take <em>him</em> to the movie theater.","She likes <em>him</em>.","He calls his friend. He calls <em>him</em>.","That is a surprise for <em>him</em>. (''für'' is accusative)","I love my wife. I love <em>her</em>.","They left <em>her</em> alone.","I like this funny lamp. I like <em>her</em>. (replaces feminine noun)","She sees her friend. She sees <em>her</em>.","I play <em>piano</em>. I play <em>it</em>.","Are you reading <em>the</em> German <em>book</em>? Yes, I am reading <em>it</em>.","I am building <em>a house</em>. I'm building <em>it</em>.","I am eating <em>raspberries</em>. I am eating <em>them</em>.","He is tying <em>his boots</em>. He is tying <em>them</em>.","I am watching <em>the birds</em>. I am watching <em>them</em>.","The dog is herding <em>the sheep</em>. He is herding <em>them</em>."];


var forExtra1 = ["Können Sie <strong>ihn</strong> für mich beschreiben?","Ich kannte <strong>ihn</strong>, als er jung war.","Wirklich? Ich gehe <strong>ihn</strong> sofort holen!","Er mag es nicht, zu lügen; es macht <strong>ihn</strong> nervös."];

var engExtra1 = ["Can you describe <em>him</em> for me?","I knew <em>him</em> when he was young.","Really? I am going to get <em>him</em> right away!","He doesn't like to lie; it makes <em>him</em> nervous."];


var imageExtra1 = ["../../convo/images/convo51A.jpg","../../verb/65/images/pic4.jpg","../../convo/images/convo38A.jpg","../../verb/70/images/pic1.jpg"];var fastExtra1 = ["../../convo/51/sounds/1fast4","../../verb/65/sounds/sound15","../../convo/38/sounds/1fast11","../../verb/70/sounds/sound3"];var slowExtra1 = ["../../convo/51/sounds/1slow4","../../verb/65/sounds/sound16","../../convo/38/sounds/1slow11","../../verb/70/sounds/sound4"];


var forExtra2 = ["Dann musst du <strong>sie</strong> um ein Date bitten.","Er wird die Wagentür für <strong>sie</strong> aufmachen.","Er kam früh an und wartete mit Blumen auf <strong>sie</strong>.","Wenn du mit deiner Freundin sprechen willst, ruf <strong>sie</strong> an."];

var engExtra2 = ["Then you must ask <em>her</em> out on a date.","He will open the car door for <em>her</em>. (''für'' is accusative)","He arrived early and waited for <em>her</em> with flowers. (''auf'' is accusative)","If you want to talk to your friend, call <em>her</em>."];


var imageExtra2 = ["../../convo/images/convo61B.jpg","../../verb/80/images/pic5.jpg","../../verb/33/images/pic4.jpg","../../verb/104/images/pic1.jpg"];
var fastExtra2 = ["../../convo/61/sounds/2fast8","../../verb/80/sounds/sound19","../../verb/33/sounds/sound15","../../verb/104/sounds/sound3"];
var slowExtra2 = ["../../convo/61/sounds/2slow8","../../verb/80/sounds/sound20","../../verb/33/sounds/sound16","../../verb/104/sounds/sound4"];


var forExtra4 = ["Er behauptet <strong>sie</strong> zu kennen.","Mein Mann hat <strong>sie</strong> selbst gebaut.","Ich denke, ich werde <strong>sie</strong> nehmen.","Muss ich <strong>sie</strong> mit dem Essen nehmen?","Ja, ich würde <strong>sie</strong> gerne anprobieren."];

var engExtra4 = ["He claims to know <em>them</em>.","My husband made <em>them</em> himself.","I think I am going to take <em>them</em>.","Do I need to take <em>them</em> with food?","Yes, I would like to try <em>them</em> on."];


var imageExtra4 = ["../../verb/65/images/pic1.jpg","../../convo/images/convo42A.jpg","../../convo/images/convo34B.jpg","../../convo/images/convo21A.jpg","../../convo/images/convo34B.jpg"];var fastExtra4 = ["../../verb/65/sounds/sound3","../../convo/42/sounds/1fast8","../../convo/34/sounds/2fast12","../../convo/21/sounds/1fast6","../../convo/34/sounds/2fast4"];var slowExtra4 = ["../../verb/65/sounds/sound4","../../convo/42/sounds/1slow8","../../convo/34/sounds/2slow12","../../convo/21/sounds/1slow6","../../convo/34/sounds/2slow4"];