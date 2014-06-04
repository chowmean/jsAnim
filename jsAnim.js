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






