// 내 글에 달린 '상대 댓글' 페이지(/@상대/post/댓글ID)에서 실행: 그 댓글 좋아요 + 답글
// 주의: 주소가 내 원글로 바뀌어 있으면(숨김 댓글) 실행하지 말 것
const C = '여기에 답글 문장';
await new Promise(r=>setTimeout(r,3500));
const L=()=>[...document.querySelectorAll('svg title')].filter(x=>['좋아요','좋아요 취소'].includes(x.textContent)&&x.parentElement.closest('[role=button]'));
let a=L().pop(); let out='like:'+a.textContent;
if(a.textContent==='좋아요'){a.parentElement.closest('[role=button]').click(); await new Promise(r=>setTimeout(r,1500));}
out+='->'+L().pop().textContent;
const tb=document.querySelector('[contenteditable=true][role=textbox]'); tb.focus(); await new Promise(r=>setTimeout(r,300));
document.execCommand('insertText', false, C); await new Promise(r=>setTimeout(r,800));
const rc0=tb.getBoundingClientRect();
const b=[...document.querySelectorAll('div[role=button],button')].find(b=>{const rc=b.getBoundingClientRect(); return Math.abs((rc.y+rc.height/2)-(rc0.y+rc0.height/2))<30 && rc.x>rc0.right && !(b.getAttribute('aria-label')||'').trim() && !(b.innerText||'').trim();});
if(b) b.click(); await new Promise(r=>setTimeout(r,6000));
out+' reply:'+(b?'clicked':'nobtn')
