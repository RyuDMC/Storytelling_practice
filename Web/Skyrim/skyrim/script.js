const D={ventas48h:3.5,ventasTotal:65,final:31.5,jugadores:68000,record:69900,mods:144000,descargas:13700};
const NS="http://www.w3.org/2000/svg";
function bar(svg,y,w,label,val,color){
  const r=document.createElementNS(NS,"rect");
  r.setAttribute("x",0);r.setAttribute("y",y);r.setAttribute("width",Math.max(w,2));r.setAttribute("height",26);r.setAttribute("rx",3);r.setAttribute("fill",color);svg.appendChild(r);
  const t=document.createElementNS(NS,"text");t.setAttribute("x",0);t.setAttribute("y",y-6);t.textContent=label;svg.appendChild(t);
  const v=document.createElementNS(NS,"text");v.setAttribute("x",Math.min(w+8,330));v.setAttribute("y",y+18);v.textContent=val;svg.appendChild(v);
}
const s1=document.getElementById("ventas");
bar(s1,22,D.ventas48h/D.ventasTotal*320,"Primeras 48 horas","3,5 M","#8fb4c9");
bar(s1,84,320,"Total acumulado","65 M","#c9a24b");
const s2=document.getElementById("retencion");
bar(s2,22,D.final/100*320,"Derrotaron a Alduin","31,5 %","#a8442f");
bar(s2,92,D.jugadores/D.record*320,"Jugadores simultáneos 2025 (récord = 69.900)","68.000","#c9a24b");
const P={
 b1:"<p><strong>31,5 %</strong></p><p>Es el porcentaje de jugadores en Steam que derrotó a Alduin. El resto se quedó en algún punto del camino.</p>",
 b2:"<p><strong>144.000 mods</strong> en Nexus Mods (Special Edition).</p><p><strong>13.700 millones</strong> de descargas en total.</p><p>Una historia que ya no necesita que la termines para seguir viva.</p>"
};
const panel=document.getElementById("panel");
function show(id){
  panel.innerHTML=P[id];
  for(const b of ["b1","b2"])document.getElementById(b).setAttribute("aria-pressed",b===id);
}
document.getElementById("b1").onclick=()=>show("b1");
document.getElementById("b2").onclick=()=>show("b2");
show("b1");
