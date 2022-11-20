

 $(".qloader").click(function(){
        $("#questionloader").modal({
            backdrop: 'static',
            keyboard: false
        });
});
    
//$(".qloader").click();

$('body').bind('cut copy', function (e) {
 return false;
});

	
$(document).ready(function(){
	
  
  $("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
  });
  
    
 
// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
$('#myBtn').click(function() {
	//alert("d");
  $('#myModal1').show();
}); 

 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  $('#myModal1').hide();
  $('.post-btn').remove();
  $('.discussiona').remove();
  $('.discussionu').remove();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    $('#myModal1').hide();
    $('.post-btn').remove();
    $('.discussiona').remove();
    $('.discussionu').remove();
    
  }
}
	//alert("h");
  //$(".qstopload").click();
  

});

//alert(localStorage.getItem("cate")+" "+localStorage.getItem("sub"));
//var ck = getCookie('category');  
var data = jdata["cme"]["pyq"];
	//console.log(jdata);
    var st = localStorage.getItem("state");
    //alert(st);
	data = data[st];
	console.log(data);
	if(localStorage.getItem("cate") == "subject") {
    //alert("for 1");
	for(i in data) {
	  //for(i=(Object.keys(data).length)-1; i>=0; i--) {  
        var ck = localStorage.getItem("sub");
        //alert(ck);
        
		$("#queans").append("<h3 class=\"ecet\">"+st+" Ecet "+i+" ("+ck+")</h3>");
          var cate = data[i][ck];
		  //console.log(Object.keys(data)[i]);
		    //var cate = data[Object.keys(data)[i]][ck];
          //if(typeof cate == 'undefined'){ alert("a");}
          //console.log(data[i][ck]);
		  for(j=1; j<=Object.keys(cate).length; j++) {
			$("#queans").append("<div class=\"container\"><div class=\"row\"><div class=\"col-md-12 "+cate["q"+j].id+"\"></div></div></div>");
			/*$("."+cate["q"+j].id).append("<button class=\"discuss-btn\" onclick=\"modaldis('"+cate["q"+j].id+"') hidden \"><img src=\"images/discussion1.png\" width=\"30px\"/></button>"); */
			$("."+cate["q"+j].id).append("<span class=\"number\">Question "+j+"</span>");
			
            if(typeof (cate["q"+j].q) != 'undefined') {
				$("."+cate["q"+j].id).append("<div class=\"text-content\"><h2 id=\"question\">"+cate["q"+j].q+"</h2></div>");
            }
            if(typeof (cate["q"+j].qimg) != 'undefined') {
                $("."+cate["q"+j].id).append("<br/><img src=\"./qimages/"+i+"/"+cate["q"+j].qimg+"\" class=\"queimg\"/>");
            }
		    $("."+cate["q"+j].id).append("<div class=\"choice\"><table class=\"table table-striped\"><tbody><tr id=\""+cate["q"+j].id+"op1\" onclick=\"checkans(1,"+(cate["q"+j].sol)[8]+",'"+cate["q"+j].id+"')\"><th><label class=\"choice-prefix\">1</label></th><td style=\"background: #f1f1f1;width:100%\"><label class=\"choice-text\">"+cate["q"+j].op1+"</label></td></tr><tr  id=\""+cate["q"+j].id+"op2\" onclick=\"checkans(2,"+(cate["q"+j].sol)[8]+",'"+cate["q"+j].id+"')\"><th><label class=\"choice-prefix\">2</label></th><td><label class=\"choice-text\">"+cate["q"+j].op2+"</label></td></tr><tr id=\""+cate["q"+j].id+"op3\" onclick=\"checkans(3,"+(cate["q"+j].sol)[8]+",'"+cate["q"+j].id+"')\"><th><label class=\"choice-prefix\">3</label></th><td style=\"background: #f1f1f1;width:100%\"><label class=\"choice-text\">"+cate["q"+j].op3+"</label></td></tr><tr id=\""+cate["q"+j].id+"op4\" onclick=\"checkans(4,"+(cate["q"+j].sol)[8]+",'"+cate["q"+j].id+"')\"><th><label class=\"choice-prefix\">4</label></th><td><label class=\"choice-text\">"+cate["q"+j].op4+"</label></td></tr></tbody></table></div>");

			$("."+cate["q"+j].id).append("<div class=\"showans\"><button type=\"submit\" class=\"btn-showans\" id=\"b"+cate["q"+j].id+"\" onclick=\"flip('"+cate["q"+j].id+"')\">Show Answer</button><a href=\"mailto:ecetsolutions@gmail.com?body=Error%20at%20Question%20id%20%3D%20"+cate["q"+j].id+"\"><button class=\"report\">Report question</button></a><div class=\"explain\" id=\"panel"+cate["q"+j].id+"\"  style=\"overflow:auto;\"><p class=\"exp-text\">"+cate["q"+j].sol+"</p></div></div>");	
            if(typeof (cate["q"+j].simg) != 'undefined') {
                $("#panel"+cate["q"+j].id).append("<img src=\"./qimages/"+i+"/solutions"+"/"+cate["q"+j].simg+"\" width=\"100%\" alt=\"\"/> ");
            }
    
		}   
	}
	$(".qstopload").click();
	}
	else {
        //alert("for 2");
		//for(year in data) {
            var year = localStorage.getItem("sub");
			$("#queans").append("<h3 class=\"ecet\">"+st+" Ecet "+year+" CME </h3>");
			for(k in data[year]) {
				for(j=1; j<=Object.keys(data[year][k]).length; j++) {
					$("#queans").append("<div class=\"container\"><div class=\"row\"><div class=\"col-md-12 "+data[year][k]["q"+j].id+"\"></div></div></div>");
					/*$("."+data[year][k]["q"+j].id).append("<button class=\"discuss-btn\" onclick=\"modaldis('"+data[year][k]["q"+j].id+"') hidden \"><img src=\"images/discussion1.png\" width=\"30px\"/></button>"); */
					$("."+data[year][k]["q"+j].id).append("<span class=\"number\">Question "+j+"</span>");
					//console.log(k); 
                    if(typeof (data[year][k]["q"+j].q) != 'undefined') {  
						$("."+data[year][k]["q"+j].id).append("<div class=\"text-content\"><h2 id=\"question\">"+data[year][k]["q"+j].q+"</h2></div>");
                    }
                    if(typeof (data[year][k]["q"+j].qimg) != 'undefined') {
                        $("."+data[year][k]["q"+j].id).append("<br/><img src=\"./qimages/"+year+"/"+data[year][k]["q"+j].qimg+"\" class=\"queimg\"/>");
                    }
					$("."+data[year][k]["q"+j].id).append("<div class=\"choice\"><table class=\"table table-striped\"><tbody><tr id=\""+data[year][k]["q"+j].id+"op1\" onclick=\"checkans(1,"+(data[year][k]["q"+j].sol)[8]+",'"+data[year][k]["q"+j].id+"')\"><th><label class=\"choice-prefix\">1</label></th><td style=\"background: #f1f1f1;width:100%\"><label class=\"choice-text\">"+data[year][k]["q"+j].op1+"</label></td></tr><tr id=\""+data[year][k]["q"+j].id+"op2\" onclick=\"checkans(2,"+(data[year][k]["q"+j].sol)[8]+",'"+data[year][k]["q"+j].id+"')\"><th><label class=\"choice-prefix\">2</label></th><td><label class=\"choice-text\">"+data[year][k]["q"+j].op2+"</label></td></tr><tr id=\""+data[year][k]["q"+j].id+"op3\" onclick=\"checkans(3,"+(data[year][k]["q"+j].sol)[8]+",'"+data[year][k]["q"+j].id+"')\"><th><label class=\"choice-prefix\">3</label></th><td style=\"background: #f1f1f1;width:100%\"><label class=\"choice-text\">"+data[year][k]["q"+j].op3+"</label></td></tr><tr id=\""+data[year][k]["q"+j].id+"op4\" onclick=\"checkans(4,"+(data[year][k]["q"+j].sol)[8]+",'"+data[year][k]["q"+j].id+"')\"><th><label class=\"choice-prefix\">4</label></th><td><label class=\"choice-text\">"+data[year][k]["q"+j].op4+"</label></td></tr></tbody></table></div>");

					$("."+data[year][k]["q"+j].id).append("<div class=\"showans\"><button type=\"submit\" class=\"btn-showans\" id=\"b"+data[year][k]["q"+j].id+"\" onclick=\"flip('"+data[year][k]["q"+j].id+"')\">Show Answer</button><a href=\"mailto:ecetsolutions@gmail.com?body=Error%20at%20Question%20id%20%3D%20"+data[year][k]["q"+j].id+"\"><button class=\"report\">Report question</button></a><div class=\"explain\" id=\"panel"+data[year][k]["q"+j].id+"\" style=\"overflow:auto;\"><p class=\"exp-text\">"+data[year][k]["q"+j].sol+"</p></div></div>");
                    if(typeof (data[year][k]["q"+j].simg) != 'undefined') {
                        $("#panel"+data[year][k]["q"+j].id).append("<img src=\"./qimages/"+year+"/solutions"+"/"+data[year][k]["q"+j].simg+"\" width=\"100%\" alt=\"\"/> ");
                    }
				}		
			}
		//}
	}
	MathJax.typeset();
	//alert("loaded");
	//$(".qstopload").click();


function flip(k) {
	var flip = "#panel"+k; 
    $(flip).slideToggle("slow");
    if($("#b"+k).text() == "Show Answer")
        $("#b"+k).text("Hide Answer");
    else
        $("#b"+k).text("Show Answer");
    $('#'+k+'op1').css("border","none");
    $('#'+k+'op2').css("border","none");
    $('#'+k+'op3').css("border","none");
    $('#'+k+'op4').css("border","none");
}

function flip2(k) {
	//alert("e");
	var flip2 = "#panel2"+k; 
    $(flip2).slideToggle("slow");
}


function modaldis(k) {
	//alert(k);
	$("#panel1").append("<button  class=\"post-btn\" onclick=\"qpost('"+k+"')\">Post</button>");
	$('#myModal1').show();
	var data;
	fetch('https://cors-anywhere.herokuapp.com/https://ecetsolutions.herokuapp.com/cme/discussion', {
            method: 'GET',            
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
	}})
	.then( res => res.json())
	.then( dat => {
		data = dat[k];
		console.log(data);
		if(data)
		{
			$(".answered").append("<div class=\"discussiona\"></div>");
			$(".unanswered").append("<div class=\"discussionu\"></div>");
			for(i in data) {
				if(Object.keys(data[i].solutions).length == 0) {
					$(".discussionu").append("<div class=\"dquestion "+i+"\"><label class=\"dname\">"+data[i].qauthor+"</label><label class=\"ddate\">"+data[i].date+"</label><br><label class=\"dque\">"+data[i].question+"</label><button type=\"submit\" class=\"show-btn\" onclick=\"flip2('"+i+"')\">Answer this Doubt</button></div>");  
					if(data[i].img != "no") {
						$("."+i).append("<br/><img src=\"discussion/"+data[i].img+"\" width=\"100%\">");
					}
					$(".discussionu").append("<div id=\"panel2"+i+"\" style=\"display:none;\"><form class=\"form2\" id=\""+i+"\"><textarea  placeholder=\"answer above Doubt\" rows=\"4\" cols=\"50\" id=\"newa"+i+"\" class=\"input-field2\"></textarea><input type=\"file\" name=\"img\" id=\"img"+i+"\" accept=\"image/*\"></form><button class=\"post-btn2\" onclick=\"spost('"+k+"','"+i+"')\">Submit</button></div>");
					
				}
				else {
					$(".discussiona").append("<div class=\"dquestion "+i+"\"><label class=\"dname\">"+data[i].qauthor+"</label><label class=\"ddate\">"+data[i].date+"</label><br><label class=\"dque\">"+data[i].question+"</label><button type=\"submit\" class=\"show-btn\" onclick=\"flip2('"+i+"')\">Answer this Doubt</button></div>");  
					if(data[i].img != "no") {
						$("."+i).append("<br/><img src=\"discussion/"+data[i].img+"\" width=\"100%\">");
					}
					$(".discussiona").append("<div id=\"panel2"+i+"\" style=\"display:none;\"><form class=\"form2\" id=\""+i+"\"><textarea  placeholder=\"answer above Doubt\" rows=\"4\" cols=\"50\" id=\"newa"+i+"\" class=\"input-field2\"></textarea><input type=\"file\" name=\"img"+i+"\" id=\"img"+i+"\" accept=\"image/*\"></form><button class=\"post-btn2\" onclick=\"spost('"+k+"','"+i+"')\">Submit</button></div>");
					//alert(Object.keys(data[i].solutions).length);
					for(j in data[i].solutions) {
						$(".discussiona").append("<div class=\"danswer "+i+j+"\"><label class=\"dname\">"+data[i].solutions[j].sauthor+"</label><label class=\"ddate\">"+data[i].solutions[j].date+"</label><br><label class=\"dans\">"+data[i].solutions[j].sol+"</label></div>");
						if(data[i].solutions[j].img != "no") {
							$("."+i+j).append("<br/><img src=\"discussion/"+data[i].solutions[j].img+"\" width=\"100%\">");
						}
						
					}
				}
			}
		}
	}); 
}


function isLogged() {
	if(localStorage.getItem("usermail"))
		return true;
	else
		return false;	
}

var res;
function imgUpload(k) {
	//alert(k);
	if(k == 'q') {
        var files = $('#img')[0].files[0];
    }
    else {
        var files = $('#img'+k)[0].files[0];
    }

	var dataText = new FormData();
    dataText.append('file',files);
    console.log(dataText);
	$.ajax({
		type:"POST",
		url:"upload.php",
		data:dataText,
        async:false,
        contentType: false,
		processData: false,
		success:function(result) { 
            //alert(result);
            res = result;
			if(result == "not uploaded")
               res = "no";
            }
	});	
    return res;
}

function qpost(k) {
	//alert(k);
	if(isLogged()) {
        
		var author = localStorage.getItem("usermail");
		var q = $(".form1 input[name=newq]").val();
        //q = q + ".";
		var iname = $(".form1 input[name=img]").val();
		var img;
		if(iname != "") {
			img = (imgUpload('q')).substring(11);
            //alert(img);
		}
		else
			img = "no";
		if(q != "" || img != "no") {
            $(".qloader").click();
			var url = "https://cors-anywhere.herokuapp.com/https://ecetsolutions.herokuapp.com/cme/discussion/qpost/"+k+"/"+q+"/"+author+"/"+img;
			//alert(url);
			fetch(url, {
					method: 'GET',            
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						"Accept": 'application/json',
			}})
			.then( res => res.json() )
			.then( dat => {
                //alert(dat.sent);
                if(dat.sent == "success") {
                    $(".qstopload").click();
                    location.reload();
                }
            });
		}
		else {
			alert("enter your doubt");
		}
	}
	else {
		//alert("please log in");
        $(".close1").click();
        $(".discuss1").click();
	}
}

function spost(k1, k2) {
	//alert(k1+" "+k2);
	if(isLogged()) {
		var author = localStorage.getItem("usermail");   
		var sol = $("#newa"+k2).val();
        //sol = sol + ".";
		//alert("."+k2+" input[name=img]");
		var iname = $("#"+k2+" input[name=img"+k2+"]").val();
        //alert(iname);
		var img;
		if(iname != "") 
			img = (imgUpload(k2)).substring(11);
		else
			img = "no";
		//alert(img);
		if(sol != "" || img != "no") {
            $(".qloader").click();
			var url = "https://cors-anywhere.herokuapp.com/https://ecetsolutions.herokuapp.com/cme/discussion/spost/"+k1+"/"+k2+"/"+sol+"/"+author+"/"+img;
			//alert(url);
			fetch(url, {
					method: 'GET',            
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						"Accept": 'application/json',
			}})
			.then( res => res.json() )
			.then( dat => {
                //alert(dat.sent);
                if(dat.sent == "success") {
                    $(".qstopload").click();
                    location.reload();
                }
            });
		}
		else {
			alert("enter solution");
		}
	}
	else {
		//alert("please log in");
        $(".close1").click();
        $(".discuss1").click();
        
	}
}

function checkans(k1, k2, k3) {
	flip(k3);
    if(k1 == k2) {
		//alert('#'+k3+'op'+k1);
        $('#'+k3+'op'+k1).css("border","2px solid green");
    }
    else {
        $('#'+k3+'op'+k1).css("border","2px solid red");
    }
    $('#'+k3+'op'+k2).css("border","2px solid green");
    
}

window.onunload = () => {
   // Clear the local storage
   window.MyStorage.clear()
}










