 var myRec = new p5.SpeechRec('en-IN');
    function setup()
    {
        // graphics stuff:
        myRec.onResult = showResult;
        myRec.onEnd = end_it;
        // var continuous = true;
        // myRec.onResult = showResult;
        function showResult()
        {
            var r = document.getElementById('text_editor');
            if(myRec.resultValue==true) {
                r.innerHTML += compare(myRec.resultString);
            }else{
                r.innerHTML += myRec.resultString;
            }
        }
    }
    function start_listen() {
        var continuous = true;
        myRec.start(continuous);
        var v = document.getElementById('heading');
        v.innerHTML = "Speak......";
    }
    function end_it() {
        var v = document.getElementById('heading');
        v.innerHTML = "";
    }
    function onstop(){
        var continuous = false;
        myRec.start(continuous);
        var v = document.getElementById('heading');
        v.innerHTML = "";
    }

function compare(str)
{   var str1 = "";
    str = str.toLowerCase();
	var d = {};
	d['colin'] = ':';
	d['calling'] = ':';
	d['bit']='(';
	d['bet']='(';
	d['flash'] = '/';
	d['kit']=')';
	d['get'] = ')';
	d['equal'] ='=';
	d['lay']='<';
	d['gay']='>';
	d['dot']='.';
	d['pot']='.';
	d['dom']='""';
	d['coma']=',';
	d['income']='"';
	d['hash']='#';
// 	d['atrate']='@';
// 	d['ampercent']='&';
// 	d['percent']='%';
	d['dash']='-';
	d['slash']='/';
	d['expo']='^^';
	d['blash']='\'';
    d['tick']='[';
    d['tik']='[';
    d['talk']=']';
    d['tok']=']';
    d['l']='\n';
    d['el']='\n';
var array=str.split();
for(var i = 0; i < array.length; i++)
{
	if( d[array[i]])
	{
		str1 += d[array[i]];
	}
	else{
	    str1 += array[i] + " ";
	}
}
return str1;
}