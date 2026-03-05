var quizLessonBoth = "lesson";var lessonNumber = 13;var numOfAllQuiz = 15;var lessonTitle = "Verbindungswörter - Part III (Connection words)";var btnColor = ["#F30101","#5F0000","#FFC400","#BB0A00"];var quesToRemove = [];var startNarration = [];var narration = ["Dann = Then","Bevor = Before","Entlang = Along / Down (something)","","",""];var forTitles = ["Dann","Bevor","Entlang"];var engTitles = ["Then (after that)","Before","Along / Down"];var forSideTitles = forTitles;var engSideTitles = engTitles;var titleSkip = [false,false,false,false,false];var exampleNums = [5,4,3];

var forExamples = ["Ich gehe <strong>dann</strong> mal los.","Wir sehen uns <strong>dann</strong> später.","Ich habe geduscht, <strong>dann</strong> habe ich mich angezogen.","Ich arbeite, <strong>dann</strong> ruhe ich mich aus.","Sie haben das Zelt aufgeschlagen, <strong>dann</strong> haben sie Feuer gemacht.","Er trinkt Tee, <strong>bevor</strong> er ins Bett geht.","Ich dehne mich, <strong>bevor</strong> ich laufe.","Er rasiert sich, <strong>bevor</strong> er sich duscht.","Er wäscht sich die Hände, <strong>bevor</strong> er isst.","Wir gehen die Straße <strong>entlang</strong>.","Es gibt ein paar Docks <strong>entlang</strong> des Flusses.","Der Dieb schleicht an der Wand <strong>entlang</strong>."];

var engExamples = ["I'll be off <em>then</em>.","I'll see you later <em>then</em>.","I took a shower, <em>then (after that)</em> I got dressed.","I work, <em>then (after that)</em> I rest.","They put up the tent, <em>then (after that)</em> they made a fire.","He drinks tea <em>before</em> he goes to bed.","I stretch <em>before</em> I run.","He shaves <em>before</em> he takes a shower.","He washes his hands <em>before</em> he eats.","We are going <em>down</em> the street.","There are a few docks <em>along</em> the river.","The thief creeps <em>along</em> the wall."];

var forExtra1 = ["Und was hast du <strong>dann</strong> gemacht?","<strong>Dann</strong> biegen Sie an der Tankstelle links ab.","Und <strong>dann</strong> werden sie mich in die erste Klasse setzen?","Oh! Okay, <strong>dann</strong> möchte ich gerne ein bisschen mehr Reis."];


var engExtra1 = ["So what did you do <em>then</em>?","<em>Then (after that)</em> turn left at the gas station.","And <em>then (after that)</em> they will put me in first class?","Oh! Okay, <em>then</em> I would like a little more rice."];

var imageExtra1 = ["../../convo/images/convo56A.jpg","../../convo/images/convo24B.jpg","../../convo/images/convo57A.jpg","../../convo/images/convo9B.jpg"];var fastExtra1 = ["../../convo/56/sounds/1fast7","../../convo/24/sounds/2fast7","../../convo/57/sounds/1fast11","../../convo/9/sounds/2fast5"];

var slowExtra1 = ["../../convo/56/sounds/1slow7","../../convo/24/sounds/2slow7","../../convo/57/sounds/1slow11","../../convo/9/sounds/2slow5"];

var forExtra2 = ["Wir hatten den Raum vier Mal ausgemessen, <strong>bevor</strong> wir den neuen Boden bestellten.","Sie würden das Auto mit Benzin füllen, <strong>bevor</strong> sie nach Köln fahren, aber das Auto ist elektrisch."];

var engExtra2 = ["We had measured the room four times <em>before</em> ordering the new floor.","They would fill the car with gasoline <em>before</em> driving to Cologne, but the car is electric."];

var imageExtra2 = ["../../verb/145/images/pic4.jpg","../../verb/151/images/pic6.jpg"];

var fastExtra2 = ["../../verb/145/sounds/sound15","../../verb/151/sounds/sound23"];

var slowExtra2 = ["../../verb/145/sounds/sound16","../../verb/151/sounds/sound24"];