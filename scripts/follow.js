// 프로필 페이지에서 실행: '팔로우'/'맞팔로우' 버튼이 있으면 누름 (이미 팔로잉이면 아무것도 안 함)
await new Promise(r=>setTimeout(r,3000));
const fb=[...document.querySelectorAll('div[role=button],button')].find(b=>['팔로우','맞팔로우 하기','맞팔로우'].includes((b.innerText||'').trim()));
let o='follow:'+(fb?fb.innerText.trim():'none');
if(fb){fb.click(); await new Promise(r=>setTimeout(r,1500)); o+=' clicked';}
o+' | bio: '+document.body.innerText.slice(60,300).replace(/\n/g,' ')
