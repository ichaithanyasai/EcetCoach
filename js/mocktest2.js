function isLogged() {
		if(localStorage.getItem("usermail")) {
			var database = firebase.database();
			var refstr = (localStorage.getItem("usermail")).substring(0,(localStorage.getItem("usermail")).search(".com"));
			//refstr = "san@gmail";
			var ref = database.ref(refstr+"/"+k);
			ref.on('value', (data)=> {
			var scores = data.val();
			//console.log(Object.keys(scores).length);
			if(!scores || (Object.keys(scores).length)<1 || refstr == "ecet@gmail") {
				//console.log("a");
			}
			else
				alert("You have exceeded maximum attempts");
				window.location.href = "mockstart.html";
				
			},
			(err)=> {
				console.log(err);
			});
		}
		else {
			window.location.href = "mockstart.html";
			
		}
	}
isLogged();


$('body').bind('cut copy paste', function (e) {
 return false;
});

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	//console.log(params["name"]);
	return params;
};
var params = getParams(window.location.href);
var year;
if(params["key"] === "86F7A8E49FEC936938F6957EC1145E20") {
	year = params["year"];
	//console.log(year);
}

$(".name").html("Mock Test -"+(params["name"])[2]+" (CME)");
$(".username").text(localStorage.getItem("usermail"));

localStorage.setItem("present","1");
$("#btn1").css({"background":"#FF0000","color":"#fff"});

var data;
var answers = [];
var oanswers = [];
var reviews = [];
var sub, qstn, ans, prst;
var th, tm;


var data = jdata["cme"]["pyq"];
bindex(1);

var t;
function startTime() {
	t = setInterval(() => {
			
			th = $("#hour").text();
			tm = $("#minute").text();
			
			if(th == "0" && tm == "1") {
				clearInterval(t);
				subconfirm();
				submit();
			}
			if(tm == "0") {
				$("#minute").text("59");
				$("#hour").text(th - 1);
			}
			else {
				$("#minute").text(tm - 1);
			}
			
			//console.log($("#minute").text());
		}, 1000);
}

function begin() {
	//alert("a");
	if($('#icheck').prop('checked')) {
		$("#instructions").css("display","none");
		$(".footer2").css("display","none");
		$("#mock").css("display","block");
		$(".footer").css("display","block");
		startTime();
	}
}

$("#subindicator").change(()=> {
    if($("#subindicator").val() == 1)
        bindex(1);
    else if($("#subindicator").val() == 2)
        bindex(51);
    else if($("#subindicator").val() == 3)
        bindex(76);  
	else if($("#subindicator").val() == 4) 
		bindex(101);
});

function category(s, k) {
	if(k>=1 && k<=50) {
		sub = "maths";
		year = params["year"];
		$('#subindicator').val("1");
	}
	else if(k>50 && k<=75) {
		sub = "physics";
		year = params["year"];
		$('#subindicator').val("2");
		k = k - 50;
	}
	else if(k>75 && k<=100) {
		sub = "chemistry";
		year = params["year"];
		$('#subindicator').val("3");
		k = k - 75;
	}
	else if(k>100 && k<=200) {
		$('#subindicator').val("4");
		year = "technical"+params["year"];
		sub = "tech";
		k = k - 100;
	}
	if(s == "calc")
		return sub;
	else if(s == "qstn")
		return k;
}

var n;
function changeQ(k) {
	$('#num').text("Question "+k);
	n = k;
	k = category("qstn", k);
	//console.log(year+" "+sub+" "+k);
	if(typeof (data.TS[year][sub]["q"+k].qimg) != 'undefined') {
		qstn = "<img src=\"qimages/"+params["year"]+"/"+data.TS[year][sub]["q"+k].qimg+"\" alt=\"question "+k+"\" class=\"queimg\"> ";
	}
	else {
		qstn = data.TS[year][sub]["q"+k].q;
	}
	$('#qstn').html(qstn);
	$('#op1').html(data.TS[year][sub]["q"+k].op1);
	$('#op2').html(data.TS[year][sub]["q"+k].op2);
	$('#op3').html(data.TS[year][sub]["q"+k].op3);
	$('#op4').html(data.TS[year][sub]["q"+k].op4);
	//console.log((data.TS[year][sub]["q"+k].sol)[8]);
	oanswers[n] = (data.TS[year][sub]["q"+k].sol)[8];
	MathJax.typeset();
}

function addA() {
	prst = localStorage.getItem("present");
	ans = $("input[name='radio']:checked").val();
	answers[prst] = ans;
	
	
	
	if(answers[prst]) {
		if(!reviews[prst])
			$("#btn"+prst).css({"background":"#228B22","color":"#fff"});
	}
	else {
		if(!reviews[prst])
			$("#btn"+prst).css({"background":"#FF0000","color":"#fff"});
	}
}

function bindex(k) {
	changeQ(k);
	addA();
	
	//prst = localStorage.getItem("present");
	
	$("#option"+ans).prop("checked",false);
	localStorage.setItem("present",k);
	
	if(answers[k]) {
		//console.log("#option"+answers[k]);
		$("#option"+answers[k]).prop("checked",true);
	}
	else {
		if(!reviews[k])
			$("#btn"+k).css({"background":"#FF0000","color":"#fff"});
	}
	
	
	
}

function previous() {
	prst = localStorage.getItem("present");
	if(Number(prst) > 1) {
		bindex(Number(prst)-1);
	}
	else {
		addA();
		reviews[prst] = 0;
	}
}

function snext() {
	prst = localStorage.getItem("present");
	
	if(Number(prst) < 200) {
		bindex(Number(prst)+1);
	}
	else {
		addA();
		reviews[prst] = 0;
		$(".submitest").click();
	}
}

function review() {
	addA();
	reviews[prst] = 1;
	if(answers[prst]) {
		//mark for review with answer
		$("#btn"+prst).css({"background":"#0000FF","color":"#fff"});
	}
	else {
		//mark for review without answer
		$("#btn"+prst).css({"background":"#9400d3","color":"#fff"});
	}
	if(Number(prst) < 200) 
		bindex(Number(prst)+1);
}

var mscore=0, pscore=0, cscore=0, tscore=0;     /*---------------------------*/
function calcScore(k) {
	var k2 = category("calc", k);
	if(oanswers[k] == answers[k]) {
		if(k2 == "maths")
			mscore++;
		else if(k2 == "physics")
			pscore++;
		else if(k2 == "chemistry")
			cscore++;
		else if(k2 == "tech")
			tscore++;
	}
}

function subconfirm() {
	addA();
	var total = 200;
	var ansd=0, notansd=0, marked=0, ansdmarked=0, notvstd=0;
	mscore=0, pscore=0, cscore=0, tscore=0;
	for(i=1; (i<answers.length); i++) {
		//console.log(ansd);
		if(answers[i]) {
			calcScore(i);
			if(reviews[i])
				ansdmarked++;
			else
				ansd++;
		}
		else {
			if(reviews[i])
				marked++;
			else
				notansd++;
		}
		
	}
	$("#ansd").text(ansd);
	$("#notansd").text(notansd);
	$("#marked").text(marked);
	$("#ansdmarked").text(ansdmarked);
	$("#notvstd").text(total - (ansd + notansd));
	//console.log(mscore+ " "+pscore+" "+cscore);
}

//console.log(firebase);
function store() {
	var database = firebase.database();
	var refstr = (localStorage.getItem("usermail")).substring(0,(localStorage.getItem("usermail")).search(".com"));
	//console.log(refstr);
	var ref = database.ref(refstr+"/"+params["name"]);
	var score = {
		Maths: mscore,
		Physics: pscore,
		Chemistry: cscore,
		Technical: tscore,
		Total: mscore+pscore+cscore+tscore
	};
    //console.log(score);
	ref.push(score);
    var x = setTimeout(()=> {
        window.open("result.html","_self");
    },1000);
    
}

function submit() {
	clearInterval(t);
	console.log(answers);
	console.log(oanswers);
	//console.log(reviews);
	store();
    //window.open("result.html","_self");
	
}

window.onunload = () => {
   // Clear the local storage
   window.MyStorage.clear()
}