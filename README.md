# Threads 스하리 반하리 자동화 키트 (Claude Code용)

Claude Code가 매시간 내 Threads 계정으로
1. 하루 2번(오전·오후) 상품 소개 글을 올리고,
2. 내 글에 댓글 단 사람에게 반하리(팔로우·좋아요·리포스트·댓글·답글)를 하고,
3. 스하리 태그 글을 찾아 먼저 찾아가기(시간당 10명)를 합니다.

광고·타로·웨딩·도박 같은 계정은 자동으로 거르고, 한 일은 전부 기록 파일에 남깁니다.

## 🚀 제일 쉬운 설치: Claude에게 통째로 맡기기
1. 이 페이지 **Code → Download ZIP** → 압축 풀기
2. Claude Code를 열고 그 폴더를 알려주며 **"이 폴더 설치해줘"** 라고 말하기
   - Claude Code가 처음이면 이 문장을 그대로 붙여 넣으세요:
     > 다운로드 폴더에 있는 threads-banhari-kit-main 폴더(안에 같은 이름 폴더가 또 있으면 그 안쪽)의 CLAUDE.md를 읽고 그대로 설치해줘
3. Claude가 `CLAUDE.md`를 읽고 질문(내 아이디·가게 이름·홈페이지 등) → 설정 → 시험 실행 → 자동 예약까지 진행합니다.

📖 자세한 내용은 **[사용설명서.md](사용설명서.md)** 를 보세요.

## 준비물
- Claude Code (데스크톱 앱 또는 터미널) + Claude 유료 플랜 (매시간 돌아가서 사용량이 꽤 듭니다. 상위 요금제 추천)
- Chrome + **Claude in Chrome 확장 프로그램** (Claude Code와 연결된 상태)
- Chrome에서 내 Threads 계정에 로그인

## 설치 (5분)
1. 이 폴더 이름을 `threads-banhari`로 바꿔 홈 폴더에 둡니다.
   - Windows: `C:\Users\내이름\threads-banhari`
   - Mac: `/Users/내이름/threads-banhari`
2. `commands/banhari.md` 파일을 `~/.claude/commands/` 폴더에 복사합니다. (Windows: `C:\Users\내이름\.claude\commands\`)
3. **`config.md`를 열어 내 계정·가게 이름·홈페이지·오픈톡방 주소로 바꿉니다.** (제외 기준·시간·인원도 여기서 조절)
4. Claude Code를 열고 `/banhari` 를 입력하면 매시간 자동 실행이 예약됩니다.

## 알아둘 점
- **Claude Code 창이 열려 있고 컴퓨터가 켜져 있어야**(잠자기 모드 끄기) 돌아갑니다. 창을 닫았다 다시 열면 `/banhari`를 다시 입력하세요.
- 예약은 7일이면 만료되는데, `/banhari`가 6일마다 스스로 다시 걸어줍니다.
- 처음 몇 번은 결과 보고를 보면서 댓글 말투·제외 기준을 config.md / PROCEDURE.md에서 다듬는 걸 추천합니다.
- 자동 활동이 너무 많으면 Threads가 계정 활동을 제한할 수 있습니다. 처음엔 인원을 적게 시작하세요. "검색 결과가 없습니다"가 갑자기 뜨거나 경고가 나오면 자동으로 멈추고 알려줍니다. 인원을 줄이려면 config.md 숫자를 낮추세요.
- 게시글 가격은 홈페이지에서 직접 확인한 값만 쓰고, 지어낸 후기는 쓰지 않도록 되어 있습니다.

## 파일 구성
| 파일 | 내용 |
|---|---|
| 사용설명서.md | 자세한 설치·사용·문제 해결·FAQ |
| CLAUDE.md | Claude가 읽는 자동 설치 안내 (폴더를 Claude에게 주면 이대로 진행) |
| config.md | **내 정보·설정** (여기만 고치면 됨) |
| PROCEDURE.md | Claude가 매시간 따르는 절차 + 실제로 겪은 문제 해결 팁 |
| posts.md / done.md / outreach.md | 게시글·반하리·먼저 찾아가기 기록 (처음엔 비어 있음) |
| scripts/ | 좋아요·리포스트·댓글·팔로우용 브라우저 스크립트 |
| commands/banhari.md | `/banhari` 명령 (예약 걸기) |
