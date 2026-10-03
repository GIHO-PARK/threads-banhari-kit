// 상대 글 페이지에서 실행: 좋아요 + 리포스트(링크 있으면 생략) + 댓글
// 사용법: 맨 위 C 에 댓글 문장을 넣고 javascript_tool로 실행. NOREPOST=true 면 리포스트 생략(업체 계정 등)
const C = '여기에 댓글 문장';
const NOREPOST = false;
await new Promise(r=>setTimeout(r,3500));
const T=(n)=>[...document.querySelectorAll('svg title')].filter(x=>x.textContent===n).map(x=>x.parentElement.closest('[role=button]')).filter(Boolean);
const firstAct=()=>[...document.querySelectorAll('svg title')].find(x=>['좋아요','좋아요 취소'].includes(x.textContent)&&x.parentElement.closest('[role=button]'));
const hasLink=/https?:|open\.kakao|youtu|coupang|\.com|\.kr/.test(document.title);
let out=document.title.slice(0,40)+' | ';
const a=firstAct(); out+='like:'+a.textContent;
if(a.textContent==='좋아요'){a.parentElement.closest('[role=button]').click(); await new Promise(r=>setTimeout(r,1500));}
out+='->'+firstAct().textContent;
if(NOREPOST||hasLink){out+=' repost:skip';} else {
  T('리포스트')[0].click(); await new Promise(r=>setTimeout(r,1500));
  const mi=[...document.querySelectorAll('[role=menuitem]')];
  const del=mi.find(m=>m.innerText.trim().startsWith('삭제'));
  const r=mi.find(m=>m.innerText.trim().startsWith('리포스트'));
  if(del){document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})); out+=' repost:already';}
  else if(r){r.click(); await new Promise(r=>setTimeout(r,2000)); out+=' repost:done';} else out+=' repost:nomenu';
}
const tb=document.querySelector('[contenteditable=true][role=textbox]'); tb.focus(); await new Promise(r=>setTimeout(r,300));
document.execCommand('insertText', false, C); await new Promise(r=>setTimeout(r,800));
const rc0=tb.getBoundingClientRect();
const b=[...document.querySelectorAll('div[role=button],button')].find(b=>{const rc=b.getBoundingClientRect(); return Math.abs((rc.y+rc.height/2)-(rc0.y+rc0.height/2))<30 && rc.x>rc0.right && !(b.getAttribute('aria-label')||'').trim() && !(b.innerText||'').trim();});
if(b) b.click(); await new Promise(r=>setTimeout(r,6000));
out+' comment:'+(b?'clicked':'nobtn')
