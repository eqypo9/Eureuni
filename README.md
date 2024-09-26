# Eureuni

<aside>
💡 으른들의 목표 설정 리그 서비스 ✏️ 📄 

</aside>

**시연 영상 링크**

## 🖼️ 배경
<img width="610" alt="background" src="https://github.com/GDSC-New-Year-Hackathon/.github/assets/70849467/c6d6e0e4-df29-4e9f-8840-e8e937282339">

**내 새해 결심은 왜 작심삼일서 끝날까?** 

신년 계획 실천에는 다분히 어려움을 느끼는 경우도 많았습니다. 

위의 설문조사에서는 전체 응답자 10명 중 8명(76.5%)이 새해 계획은 의지가 굳건하지 않고는 좀처럼 쉽지 않다는 데에 높은 공감을 나타냈습니다.

따라서 `Eureuni`는 저희 새해 혹은 특정 시점에 `새로운 목표`를 설정하고자 하는 사람들을 위해 기획되었습니다.

다짐을 시각적으로 표현함으로써 사용자의 동기 부여를 강화하고, 커뮤니티를 통한 상호 인증과 경쟁을 통해 사용자들이 목표를 지속적으로 추구하도록 유도합니다.

## 🛠️ 활용 기술


## ✨ 메인 기능


1️⃣ **다짐 설정**

- 개인 별 목표하는 다짐 설정
    - 해당 분야, 구체적인 설명, 그리고 달성해야 할 기간을 입력
    - 매일 운동하기, 식물에 물주기 등
    - 명확한 목표를 가지고 동기를 부여
    - 직관적으로 목표 설정
- 챌린지 형식을 이용해 지속적인 참가 동기 부여

2️⃣ **일기 작성**

- 다짐 인증 방법
    - 사진 첨부 + 간단한 일기 쓰기
    - 인증에 대한 검증
        - 기존에 업로드 되었던 사진은 아닌지 확인함
    - 딥러닝 모델은 일기의 내용을 분석하여 관련된 일러스트레이션을 생성
        - 일러스트는 사용자의 일기와 함께 저장
        - 나중에 볼 때 그날의 기분과 성취를 다시 떠올릴 수 있도록 함


3️⃣ **경쟁 시스템**

- 같은 목표나 분야를 가진 사람들과 선의의 경쟁
- 게임을 통하여 동기부여와 함께 재미 요소를 제공
- 경쟁은 각자 성취도에 따라 점수를 부여하여 랭킹 시스템 진행
    - 1달 단위 시즌제 랭킹 시스템
    - 경쟁 시스템은 사용자가 자신의 성취를 다른 사람과 공유
    - 경쟁을 통해 높은 점수를 달성한 사용자에게는 시즌 종료 후 보상 지급
    - 사용자에게 추가적인 동기부여

## ✔️차별성

**그림 일기 자동 생성** 

- 사용자로부터 키워드 입력 받아 이미지 생성
- 이는 다짐 인증의 역할 뿐 아니라, 본인의 얼굴을 그대로 올리고 싶지 않은 사람들의 경우
- 이는 다짐 인증의 역할 뿐 아니라, 본인의얼굴을 그대로 올리고 싶지 않은 사람의 경우 비식별화 효과
- AWS SageMaker를 통하여 이미지 생성
- 생성된 이미지를

**오목 게임 구현**

- 브루트포스 알고리즘 활용
- 모든 좌표에 대해 (가로), (세로), (왼쪽대각선), (오른쪽대각선) 총 4가지 경우에서 같은 색인 바둑알의 개수가 5개 완성 시 승리

## 💡아키텍쳐
<img width="622" alt="architecture" src="https://github.com/GDSC-New-Year-Hackathon/.github/assets/70849467/51a295fc-ebb8-4e0c-9c01-eb2587ea6ee7">


## 🌈 기대효과 및 결론

**사용자의 목표 달성률 향상**

시각적인 피드백과 
커뮤니티의 지지가 사용자의 동기를 부여하고 목표 달성을 촉진

**정서적 지원**


공유와 상호 인증을 통해 
사용자들이 서로를 지지하고 
격려함으로써 긍정적인 
정서적 환경을 조성

**일상의 변화와 개선**

꾸준한 목표 추구와 성취는 
사용자의 일상에 긍정적인 변화

## 🌐 확장성

1. **무기력증 극복을 위한 특화된 기능 추가**
    - 무기력증을 겪고 있는 사람들을 위해, 매우 작고 쉽게 시작할 수 있는 다짐을 설정할 수 있는 기능을 제공
    - 서비스는 사용자의 작은 성취들을 인식하고, 그들이 이룬 작은 단계마다 격려와 보상을 제공
    - 무기력증에 효과적인 활동과 목표 설정 방법을 개발
2. **게임 요소의 확장**
    - 사용자의 참여를 증진시키기 위해 더 많은 게임 요소를 도입
    - 게임의 종류의 확장 (오목 / 땅따먹기 / 리그)
3. **다양한 사용자 그룹을 위한 맞춤형 기능**
    - 서비스를 다양한 사용자 그룹에 맞게 조정
    - 다양한 연령대와 생활 패턴을 가진 사용자들을 위한 맞춤형 목표와 다짐을 제공
4. **기술적 혁신과 통합**
    - 최신 AI 기술, 빅 데이터 분석, 머신 러닝을 활용하여 서비스의 개인화를 강화
    - 사용자의 선호와 행동 패턴을 분석하여 맞춤형 목표와 도전 과제를 제안

## 🔗 Link

> **Back-end**
> 

[GitHub - GDSC-New-Year-Hackathon/Back-end](https://github.com/GDSC-New-Year-Hackathon/Back-end)

> **Front-end**
> 

[GitHub - GDSC-New-Year-Hackathon/Front-end](https://github.com/GDSC-New-Year-Hackathon/Front-end)

> **Machine-Learning**
> 

[GDSC-New-Year-Hackathon/MachineLearning](https://github.com/GDSC-New-Year-Hackathon/MachineLearning)

---

### 📖 참고

[[더그래픽]매년 실패하지만, 다시 세우는 단골 새해 다짐은? - 머니투데이](https://news.mt.co.kr/mtview.php?no=2023011214130638638)
