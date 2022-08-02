window.addEventListener('load',()=>{
//    const Params=(new URL(Document.location)).searchParams;
//    const dof=Params.get('dof');
//    const adm=Params.get('dt');
const dof=localStorage.getItem('dof');
const dt=localStorage.getItem('dt');
   document.getElementById('result-dof').innerHTML=dof;
   document.getElementById('result-dt').innerHTML=adm;

})