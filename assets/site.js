(() => {
  'use strict';
  const t = {
    ru:{prepared:"Проверьте почтовое приложение: письмо подготовлено, но ещё не отправлено. Если приложение не открылось, скопируйте запрос.",copied:"Текст запроса скопирован.",error:"Не удалось подготовить письмо. Скопируйте текст и отправьте самостоятельно.",invalid:"Проверьте обязательные поля и адрес электронной почты.",copyError:"Выделите подготовленный текст и скопируйте его."},
    en:{prepared:"Check your email application: the message is prepared but not sent. If it did not open, copy the inquiry.",copied:"Inquiry copied to clipboard.",error:"Unable to prepare an email. Copy the request and send it manually.",invalid:"Please check required fields and the email address.",copyError:"Select and copy the prepared inquiry text."}
  };
  const menu = document.querySelector('#site-nav');
  const toggle = document.querySelector('#menu-toggle');
  if(menu && toggle) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded',String(open));
      menu.classList.toggle('open',open);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('keydown',e => {
      if(e.key === 'Escape') {menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
    });
  }
  const form = document.querySelector('#quote-form');
  if (!form) return;
  const lang=form.dataset.locale==='en'?'en':'ru';
  const messages=t[lang];
  const status=document.querySelector('#form-status');
  const setStatus=(message,bad=false)=>{status.textContent=message;status.classList.toggle('error',bad);};
  const required=Array.from(form.querySelectorAll('[required]'));
  const readRequest=() => {
    const fields = Array.from(form.querySelectorAll('.form-field')).map(label => {
      const title = label.querySelector('span').textContent.replace('*','').trim();
      const control=label.querySelector('input,select,textarea');
      return title+': '+(control.selectedOptions?.[0]?.textContent&&control.value?control.selectedOptions[0].textContent:control.value.trim());
    });
    return ['PAROMIR RFQ',...fields].join('\n');
  };
  const validate=()=>{
    required.forEach(f=>{f.setAttribute('aria-invalid',String(!f.checkValidity()));});
    if(!form.checkValidity()){setStatus(messages.invalid,true);form.querySelector(':invalid')?.focus();return false;}return true;
  };
  form.addEventListener('input',event=>{if(event.target.matches('input,textarea,select'))event.target.removeAttribute('aria-invalid');});
  form.addEventListener('change',event=>{if(event.target.matches('select,input'))event.target.removeAttribute('aria-invalid');});
  form.addEventListener('submit',e=>{
    e.preventDefault();if(!validate())return;
    const data=readRequest();
    const subject=encodeURIComponent('PAROMIR - Request for quotation');
    const body=encodeURIComponent(data);
    setStatus(messages.prepared);
    window.location.assign('mailto:export@paromir.com?subject='+subject+'&body='+body);
  });
  document.querySelector('#copy-inquiry')?.addEventListener('click',async()=>{
    if(!validate())return;
    const data=readRequest();
    try{await navigator.clipboard.writeText(data);setStatus(messages.copied);}
    catch(e){
      try{const area=document.createElement('textarea');area.value=data;area.style.width='100%';area.rows=8;area.setAttribute('aria-label','Inquiry text');status.after(area);area.focus();area.select();setStatus(messages.copyError,true);}
      catch(_){setStatus(messages.error,true);}
    }
  });
  const params=new URLSearchParams(location.search);
  const product=params.get('product');
  if(product&&/^[a-z-]{1,30}$/.test(product)){
    const select=form.querySelector('select[name="material"]');
    if(select&&Array.from(select.options).some(o=>o.value===product))select.value=product;
  }
})();