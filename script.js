const roles=["Software Engineer","Data Analyst"];
let i=0,j=0,deleting=false;
const el=document.getElementById("typing");
function type(){
 const word=roles[i];
 el.textContent=word.substring(0,j);
 if(!deleting){j++; if(j>word.length){deleting=true;setTimeout(type,1200);return;}}
 else{j--; if(j<0){deleting=false;i=(i+1)%roles.length;j=0;}}
 setTimeout(type,deleting?60:120);
}
type();
