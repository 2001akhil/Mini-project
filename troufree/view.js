function handleSubmit(){
    const dof=document.getElementById('dof').value;
    const adm=document.getElementById('dt').value;
    localStorage.setItem('dof',dof);
    localStorage.setItem('dt',adm);
    return;
}