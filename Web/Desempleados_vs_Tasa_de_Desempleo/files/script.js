(function(){
var d=document,r=d.documentElement;r.classList.add('js');
var bar=d.getElementById('pb');
function p(){var h=r.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}
addEventListener('scroll',p,{passive:true});p();
var els=d.querySelectorAll('.rv');
if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});els.forEach(function(e){io.observe(e)})}
var b=d.getElementById('cp'),ta=d.getElementById('ta'),ok=d.getElementById('ok');
var txt=Array.prototype.map.call(d.querySelectorAll('#qs li'),function(l,i){return (i+1)+'. '+l.textContent.trim()}).join('\n');
function fail(){ta.value=txt;ta.hidden=false;ta.focus();ta.select()}
b.hidden=false;
b.addEventListener('click',function(){
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(function(){ta.hidden=true;ok.textContent='Copiadas.'},fail)}else{fail()}
});
})();
