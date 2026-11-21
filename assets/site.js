(() => {
 const toggle=document.getElementById('menu-toggle'), nav=document.getElementById('main-nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});}
 const form=document.getElementById('inquiry-form');if(!form)return;
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const rows=Array.from(form.querySelectorAll('label')).map(l=>l.querySelector('span').textContent+': '+l.querySelector('input').value.trim());
  const txt=[form.dataset.title,...rows].join('\n');
  const status=document.getElementById('form-status');
  try{await navigator.clipboard.writeText(txt);status.textContent=form.dataset.success;}
  catch{status.textContent=form.dataset.error;const t=document.createElement('textarea');t.value=txt;t.rows=8;t.style.width='100%';t.readOnly=true;status.after(t);t.select();}
 });
})();
