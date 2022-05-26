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

## 실행 방법
```
git clone https://github.com/preOnboarding-5-team/madup-team-5a.git
cd madup-team-5a
yarn install
yarn dev
```

## 구조
``` bash
src
├─assets
│  ├─images
│  │      Lever_BI 1.png
│  │
│  └─svgs
│      │  add.svg
│      │  Ellipse 74.svg
│      │  expand_more.svg
│      │  icon_dropdown_arrow.svg
│      │  icon_menu01_on.svg
│      │  icon_menu02_off.svg
│      │  img_guide.svg
│      │  img_profile_small.svg
│      │  index.ts
│      │  Polygon 1.svg
│      │  Polygon 2.svg
│      │
│      ├─adManage
│      │      icon_arrow_down.svg
│      │
│      └─globalNav
│              icon_notification.svg
│              icon_setting.svg
│              mypage_profile.svg
│
├─components
│  ├─GlobalNav
│  │      index.tsx
│  │      style.module.scss
│  │
│  ├─Layout
│  │      index.tsx
│  │      style.module.scss
│  │
│  ├─SideNav
│  │      index.tsx
│  │      style.module.scss
│  │
│  └─_common
│      ├─DropButton
│      │      ColorIndicator.tsx
│      │      index.tsx
│      │      style.module.scss
│      │
│      ├─Loading
│      │      index.tsx
│      │      styles.module.scss
│      │
│      └─ShowMoreIcon
│              index.tsx
│              style.module.scss
│
├─data
│      wanted_FE-media-channel-data-set.json
│      wanted_FE_ad-list-data-set.json
│      wanted_FE_trend-data-set.json
│
├─hooks
│      useOpenDropdown.ts
│
├─pages
│  │  _app.tsx
│  │  
│  ├─api
│  │      hello.ts
│  │
│  ├─dashboard
│  │  │  index.tsx
│  │  │  style.module.scss
│  │  │
│  │  ├─_components
│  │  │  ├─AdStatus
│  │  │  │  │  index.tsx
│  │  │  │  │  StatusCards.tsx
│  │  │  │  │  style.module.scss
│  │  │  │  │  TermButton.tsx
│  │  │  │  │
│  │  │  │  └─StatusChart
│  │  │  │          dropDownCategories.ts
│  │  │  │          index.tsx
│  │  │  │          statusChartOption.ts
│  │  │  │          style.module.scss
│  │  │  │
│  │  │  ├─DatePicker
│  │  │  │      CalenderInput.tsx
│  │  │  │      index.tsx
│  │  │  │      style.module.scss
│  │  │  │      utils.ts
│  │  │  │
│  │  │  └─MediaStatus
│  │  │          index.tsx
│  │  │          MediaChart.tsx
│  │  │          MediaGrid.tsx
│  │  │          style.module.scss
│  │  │
│  │  ├─_constants
│  │  │      index.ts
│  │  │
│  │  ├─_hooks
│  │  │      useCalendarBounds.ts
│  │  │      useMediaData.ts
│  │  │
│  │  ├─_states
│  │  │      compareDatesAtom.ts
│  │  │      datesAtom.ts
│  │  │      dayOrWeeklyAtom.ts
│  │  │      mainIdxAtom.ts
│  │  │      mediaChannelsAtom.ts
│  │  │      mediaChartAttributesAtom.ts
│  │  │      mediaGridAttributesAtom.ts
│  │  │      subIdxAtom.ts
│  │  │      weelkyAtom.ts
│  │  │
│  │  └─_utils
│  │          comparedDates.ts
│  │          convertCardData.ts
│  │          convertStatusData.ts
│  │          getLineColor.ts
│  │          getMax.ts
│  │          getTick.ts
│  │          targetDates.ts
│  │
│  └─manage
│      │  index.tsx
│      │  style.module.scss
│      │
│      ├─_components
│      │  ├─AdManageList
│      │  │      AdManageCard.tsx
│      │  │      index.tsx
│      │  │      style.module.scss
│      │  │
│      │  └─CreateAd
│      │          index.tsx
│      │          styles.module.scss
│      │
│      ├─_states
│      │      adManageState.ts
│      │      dataListAtom.ts
│      │
│      └─_utils
│              data.ts
│
├─public
│      favicon.ico
│      vercel.svg
│
├─services
│      formatDate.ts
│      formatNumber.ts
│      packMediaData.ts
│
├─states
│      colorMap.ts
│      serviceType.ts
│
├─styles
│  │  globals.scss
│  │  Home.module.scss
│  │
│  ├─base
│  │      _fonts.scss
│  │      _more.scss
│  │      _reset.scss
│  │
│  ├─constants
│  │      _colors.scss
│  │      _dimensions.scss
│  │      _levels.scss
│  │
│  └─mixins
│          _animation.scss
│          _flexbox.scss
│          _font.scss
│          _position.scss
│          _visual.scss
│
└─types
        global.d.ts
        manage.d.ts
        media.d.ts
        trend.d.ts
```

## 실행 화면과 기능

### 대시보드

#### 차트
![image](https://user-images.githubusercontent.com/64529155/170353845-8248a1c4-7672-4f9b-a2a0-54e3a866b2b1.png)

* 카테고리 드랍다운을 이용하여 그래프 두 개를 화면에 동시에 표시할 수 있습니다.
단위에 맞게 y축에 표시하였습니다.
* 단위는 기본 만 단위로 지정해주었고 툴팁표시는 보다 정확한 정보표시를 위해 정보를 변경하지 않았습니다.
* roas같은 경우는 %가 기본 단위이기 때문에 반영해주었습니다.

![image](https://user-images.githubusercontent.com/64529155/170353950-5d54b7e3-c415-4fcd-aff3-8881918e6e96.png)

* 오른쪽 드랍다운은 옵셔널이기 때문에 선택 안함을 선택시 화면에는 하나의 그래프와 하나의 툴팁만 표시됩니다.

![image](https://user-images.githubusercontent.com/64529155/170350731-e5163b14-8522-4374-9635-13156c8fa5f2.png)

* 주간 일별 선택가능합니다.
* 일별 선택의 경우 지정한 날짜 전부 데이터를 표시해주고
* 주간의 경우 데이트 피커로 선택한 날짜의 첫 번쨰 날을 기준으로 7일간의 데이터를 표시해 줍니다.

![image](https://user-images.githubusercontent.com/64529155/170354048-a3fa6dbc-54bf-48c2-a56d-cae6c5b5902c.png)

* 아래쪽 차트는 선택한 날짜의 광고 현황의 합계가 표시됩니다. 
* 마찬가지로 마우스를 올렸을 때 각 회사 별로 툴팁이 제공되고 데이트 피커를 통해 지정한 날짜를 기반으로 데이터를 불러옵니다. 

![image](https://user-images.githubusercontent.com/64529155/170354195-d8924712-2294-4ac7-ae6c-dda8efaaf9b8.png)

### 로딩 화면 구현

* 의도적으로 딜레이를 줘서 로딩 화면이 보이게끔 하였습니다.
* 로딩 에니메이션은 react spinner라이브러리를 사용하였습니다.

![image](https://user-images.githubusercontent.com/64529155/170370427-dee8b5c3-e827-478b-9fae-48cbcf82d155.png)

### 광고 현황


### 광고 관리

![image](https://user-images.githubusercontent.com/89800985/170384206-5a1205fc-a55d-4446-bb18-e23eb3f9af1d.png)

- 광고관리페이지로 이동 시 최초에 보여지는 전체 광고 화면입니다.
- 광고카드를 클릭 시 선택된 광고를 표시합니다.
- 기본 회계 단위는 23,000원 일경우 23천원으로, 255,000원 일경우 25만 5천원으로 표기했습니다. 또한, 숫자의 세번째 자리마다 ','를 적용했습니다.
- 광고의 타이틀이 웹광고 일경우 웹광고, 앱광고일 경우 앱광고로 지정했습니다.

![image](https://user-images.githubusercontent.com/89800985/170384376-55c84d93-3f3a-437d-9d40-f49f1d3b4431.png)

- 필터 드랍다운 시 '전체 광고', '진행중', '완료' 3가지 목록을 필터링하여 볼 수 있습니다.

![image](https://user-images.githubusercontent.com/89800985/170384769-ed39595e-7938-4f80-932f-d16325bcd99b.png)

- 종료된 광고는 생성일 우측에 종료일을 표시했습니다.


## Directory

## Dependencies
Days
Next’s
Recoil
Victory

## 느낀점

### 박휘건
chartjs는 이용해 본 적 있으나 victory는 요번에 처음 공부하고 사용했는데 개별성이 강해서 각각의 상호작용을 위한 작업들이 굉장히 어려웠습니다. 특히 그래프를 두 개 이용할 때 데이터를 평준화 시켜주는 작업에 상당히 많은 시간을 할애하게 되었고 규모가 커질 수록 상태관리 구조의 중요성을 깨닫고 중간에 몇 번이고 상태관리 flow를 변경하게 되어 시간을 많이 소비하였습니다. 차트쪽에서 animation이나 커스텀 스타일링이 많이 아쉬웠고 css용어가 아니라 스타일링에 부족함을 느껴 아쉬웠습니다.

### 장재혁
figma를 사용한 것은 처음이라 익숙해지는 데 시간이 걸렸습니다. 만들어진 화면을 눈으로 미리 볼 수 있어 유용했지만 Code의 css가 전부 absolute로 되어있어 이를 수정해 사용하는 것이 까다로웠습니다.

victory를 이용해 그래프를 만드는 것도 꽤 어려웠습니다. 기본적인 사용은 간단했지만, 커스텀 스타일링이 의도한 대로 잘 되지 않아 많은 시행착오를 겪어 아쉬움이 남습니다.

스스로 충분하지 못한 상태에서 부족함을 많이 느꼈습니다. 감사합니다.

### 곽태훈

이번 프로젝트를 통해 Figma를 처음 접해봤는데, 협업 시 굉장히 소통이 유연하고 이해를 돕는 툴이라는 것이 와닿았습니다. 
이같은 디자인 협업 툴에 대해서도 활용법과 이해가 필요하겠다는 것을 느꼈습니다. 
특히 어려웠던 점은, 주어진 조건 때문에 데이터를 그대로 받아서 적용하지 않고, '가공작업'을 거친 후에 적용해야 하는 것이었습니다. 
이때, 숫자의 까다로운 단위들을 해결하는 방법에 대해 너무 오랜 시간을 소진했습니다. 
저의 역량 부족으로 역할을 해내지 못해 작업을 완성하지 못한 것에 대해 아쉬움이 많이 남습니다.
