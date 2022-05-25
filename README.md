# 매드업 프론트엔드 기업 과제 5A팀
### 개발자

* 곽태훈, 민지원, 박휘건, 장재혁

### 기술스택

* React, Recoil, Scss

### 개발 기간

* 2022/5/24 ~ 2022/5/26 

## OverView
원티드 프리온보딩 코스 5-A조 매드업 과제 프로젝트입니다.
 주어진 figma 디자인을 기반으로 클론 코딩을 하였습니다.

## 실행 화면과 기능

### 대시보드

#### 차트
![image](https://user-images.githubusercontent.com/64529155/170353845-8248a1c4-7672-4f9b-a2a0-54e3a866b2b1.png)

카테고리 드랍다운을 이용하여 그래프 두 개를 화면에 동시에 표시할 수 있습니다.
단위에 맞게 y축에 표시하였습니다.

![image](https://user-images.githubusercontent.com/64529155/170353950-5d54b7e3-c415-4fcd-aff3-8881918e6e96.png)

오른쪽 드랍다운은 옵셔널이기 때문에 선탁 안 함을 선택시 화면에는 하나의 그래프와 하나의 툴팁만 표시됩니다.

![image](https://user-images.githubusercontent.com/64529155/170350731-e5163b14-8522-4374-9635-13156c8fa5f2.png)

주간 일별 선택가능합니다.

![image](https://user-images.githubusercontent.com/64529155/170354048-a3fa6dbc-54bf-48c2-a56d-cae6c5b5902c.png)

아래쪽 차트는 선택한 날짜의 광고 현황의 합계가 표시됩니다. 

![image](https://user-images.githubusercontent.com/64529155/170354195-d8924712-2294-4ac7-ae6c-dda8efaaf9b8.png)

### 로딩 화면 구현

의도적으로 딜레이를 줘서 로딩 화면이 보이게끔 하였습니다.
로딩 에니메이션은 react spinner라이브러리를 사용하였습니다.

![image](https://user-images.githubusercontent.com/64529155/170370040-55b664ff-23b5-4fc6-8bbf-bc16c25f68df.png)


### 광고 현황

## Directory

## Dependencies
Days
Next’s
Recoil
Victory

## 느낀점

### 박휘건
chartjs는 이용해 본 적 있으나 victory는 요번에 처음 공부하고 사용했는데 개별성이 강해서 각각의 상호작용을 위한 작업들이 굉장히 어려웠습니다. 특히 그래프를 두 개 이용할 때 데이터를 평준화 시켜주는 작업에 상당히 많은 시간을 할애하게 되었고 규모가 커질 수록 상태관리 구조의 중요성을 깨닫고 중간에 몇 번이고 상태관리 flow를 변경하게 되어 시간을 많이 소비하였습니다. 차트쪽에서 animation이나 커스텀 스타일링이 많이 아쉬웠고 css용어가 아니라 스타일링에 부족함을 느껴 아쉬웠습니다. 
