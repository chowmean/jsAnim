/** =================================================================jsAnim==========================================================================


JavaScript Library for Animation Purposes.

#author: Gaurav Yadav
#nickname:chowmean
#Github:Github.com/chowmean/jsAnim
#linkedin:linkedin.com/chowmean
#facebook:fb.com/chowmean
#mail:gaurav.dev.iiitm@gmail.com

#startdate: 5-5-2014

The library is under development if you find any bug please report at gaurav.dev.iiitm@gmail.com

Modules: 
	*move
	*movetransition
	*coinflip

**/


function waitSeconds(iMilliSeconds) {
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}

var move=function(a,b,c)
{
l=document.getElementById(a);
console.log(l);
var pos=l.style.left;
var postop=l.style.top;
if(!l.style.position)
l.style.position='relative';
if(pos=="")
	{
	l.style.left='0px';
	
	}
if(postop=="")
	{
	
	l.style.top='0px';
	}
if(b=='right')
l.style.left=parseInt(l.style.left) + parseInt(c) + 'px';
if(b=='left')
l.style.left=parseInt(l.style.left) - parseInt(c) + 'px';
if(b=='bottom')
l.style.top=parseInt(l.style.top) + parseInt(c) + 'px';
if(b=='top')
l.style.top=parseInt(l.style.top) - parseInt(c) + 'px';
}



var moveTransition=function(a,b,c,d)
{
l=document.getElementById(a);
console.log(l);
var pos=l.style.left;
var postop=l.style.top;
if(!l.style.position)
l.style.position='relative';
if(pos=="")
	{
	l.style.left='0px';
	}
if(postop=="")
	{
	l.style.top='0px';
	}
	
	
	var t=0;
	var interval=10;
	c=c/(d/interval);
	

	{
	while(t<d)
		{t=t+interval;
		if(b=='right')
			{setTimeout(function(){l.style.left = parseInt(l.style.left) + parseInt(c) + 'px'},t);}
		if(b=='left')
			{setTimeout(function(){l.style.left = parseInt(l.style.left) - parseInt(c) + 'px'},t);}
		if(b=='top')
			{setTimeout(function(){l.style.top = parseInt(l.style.top) - parseInt(c) + 'px'},t);}
		if(b=='bottom')
			{setTimeout(function(){l.style.top = parseInt(l.style.top) + parseInt(c) + 'px'},t);}
	
		}
	
	}	

}




var flip= function(a,b,c,repeat=1)
{
l=document.getElementById(a);
var pos=l.style.left;
var postop=l.style.top;
if(!l.style.position)
l.style.position='relative';
if(pos=="")
	{
	l.style.left='0px';
	}
if(postop=="")
	{
	l.style.top='0px';
	}
w=l.style.width;
wlimit=(parseInt(pos)+parseInt(w))/2;wlimit=wlimit/2;
h=l.style.height;
hlimit=(parseInt(postop)+parseInt(h))/2;


var t=0;
var interval=10;
wlimit=wlimit/(c/interval);
hlimit=hlimit/(c/interval);
	
	

	{
	while(t<c/2)
		{t=t+interval;
		if(b=='vertical')
			{setTimeout(function(){l.style.top = parseInt(l.style.top) + parseInt(hlimit) + 'px';l.style.height = parseInt(l.style.height) - 2*parseInt(hlimit) + 'px';},t);}
		
		if(b=='horizontal')
			{setTimeout(function(){l.style.left = parseInt(l.style.left) + parseInt(wlimit) + 'px';l.style.width = parseInt(l.style.width) - 2*parseInt(wlimit) + 'px';},t);}
		
		}
	
	while(t<c)
		{t=t+interval;
		if(b=='vertical')
			{setTimeout(function(){l.style.top = parseInt(l.style.top) - parseInt(hlimit) + 'px';l.style.height = parseInt(l.style.height) + 2*parseInt(hlimit) + 'px';},t);}
		
		if(b=='horizontal')
			{setTimeout(function(){l.style.left = parseInt(l.style.left) - parseInt(wlimit) + 'px';l.style.width = parseInt(l.style.width) + 2*parseInt(wlimit) + 'px';},t);}
		}
	}	



if (repeat<=0) {;}
else {repeat=repeat-1;console.log(repeat);

//=============i was here ==================//


} 
}



var sendTo=function(a,b,c,d)
{
l=document.getElementById(a);
console.log(l);
var pos=l.style.left;
var postop=l.style.top;
if(!l.style.position)
l.style.position='relative';
if(pos=="")
	{
	l.style.left='0px';
	}
if(postop=="")
	{
	l.style.top='0px';
	}
	
	
	var t=0;
	ll=parseInt(pos)-parseInt(b);
	tt=parseInt(postop)-parseInt(c);
	var intervalleft=10;
	
	console.log(tt);
	
	left=ll/(d/intervalleft);
	topp=tt/(d/intervalleft);
	
	console.log(left);
	console.log(topp);
	{
	while(t<d)
		{t=t+intervalleft;;
	
			{setTimeout(function(){l.style.left = parseInt(l.style.left) - parseInt(left) + 'px';
			l.style.top = parseInt(l.style.top) -parseInt(topp) + 'px';
			},t);}
		
	
		}
	
	}	

}


var visible=function(a,b)
{
l=document.getElementById(a);
		{
		if(b=="show")
			{l.style.opacity = 1 ;
			}

		if(b=='hide')
			{l.style.opacity = 0;
			}
		}
	
}




