---
description: 스하리 반하리 자동화 시작 (매시간 실행 예약 + 6일마다 자동 갱신)
---

Threads 스하리 반하리 자동화를 예약한다. 키트 폴더는 홈 폴더의 `threads-banhari` (Windows: %USERPROFILE%\threads-banhari, Mac/Linux: ~/threads-banhari). 아래 순서대로 하고, 끝나면 존댓말로 짧게 보고한다.

0. 키트 폴더의 config.md에 "@내아이디", "내홈페이지" 같은 예시 값이 그대로 남아 있으면 예약하지 말고, 사용자에게 config.md부터 채워 달라고 안내한 뒤 멈춘다.
1. CronList로 현재 예약을 확인한다. 프롬프트에 "threads-banhari"나 "/banhari"가 들어간 기존 예약은 모두 CronDelete로 지운다(중복 방지).
2. 매시간 실행 예약: CronCreate, cron "7 * * * *", recurring true
   - prompt: `홈 폴더 threads-banhari/PROCEDURE.md 절차대로 Threads 스하리 반하리 1회 실행 (config.md 설정 사용, 오늘 게시글 없으면 게시, 새 댓글 작성자 최대 15명 반하리, 먼저 찾아가기, done.md/posts.md/outreach.md 기록). 결과는 존댓말로 짧게 보고.`
3. 자동 갱신 예약(7일 만료 대비): 지금으로부터 6일 뒤 오전 6시 47분 1회 — CronCreate, cron "47 6 <일> <월> *", recurring false, prompt: `/banhari`
4. 보고: 매시간 예약 ID, 다음 자동 갱신 날짜, "이 Claude Code 창을 닫으면 예약이 사라지니 다시 열면 /banhari 를 입력하세요" 안내.
