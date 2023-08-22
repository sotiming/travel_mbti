export const questions = [
  {
    number: '01',
    question: '직장 동료가 여행을<br>같이 가자고 제안한다.<br>나의 반응은?',
    choices: [
      { text: '절친이라도 여행 스타일 안 맞으면<br>싸운다던데... 고민하다 거절한다', value: 'i' },
      { text: '오 좋지!! 어디로 갈까!? <br>첫 여행 너무 기대된다!! 흔쾌히 수락한다', value: 'e' }
    ]
  },
  {
    number: '02',
    question: '여행 가기 전날 밤!<br>잠들기 전에 나는?',
    choices: [
      { text: '짐은 다 챙겼고, 내일 컨디션을 위해<br>일찍 자야지~', value: 's' },
      { text: ' 다 챙겼나? 이것도 필요할까?<br>혹시 모르니까...', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '여행 중 친구가 갑자기<br>일정을 포기하고<br>휴식을 취하겠다고 한다면?',
    choices: [
      { text: '어디 아파? 약 사다 줄까?<br>여기 정말 안 다녀와도 되겠어?', value: 't' },
      { text: '어제 많이 힘들었어?<br>여행하는데 불편한 거 있었어? ', value: 'f' }
    ]
  },
  {
    number: '04',
    question: '여행지에서 식사할 때?',
    choices: [
      { text: '여기서 이건 꼭 먹어야 돼!<br>미리 알아온 유명 맛집', value: 'j' },
      { text: '길거리에서 맛있어 보이면<br>그곳이 나의 데스트니 맛집', value: 'p' }
    ]
  },
  {
    number: '05',
    question: '여름휴가로 3박 4일<br>여행을 간다면?',
    choices: [
      { text: '언어 장벽이 없고,<br>시간 부담이 적은 국내여행', value: '' },
      { text: '새로운 문화, 음식을<br>경험해 볼 수 있는 해외여행 ', value: '' }
    ]
  },
  {
    number: '06',
    question: '친구가 여행을 가자고 한다.<br>당장 여행비로 사용할 <br>수 있는 금액은?',
    choices: [
      { text: '50만원 ~ 100만원', value: '' },
      { text: '200만원 이상', value: '' }
    ]
  },
  {
    number: '07',
    question: '내가 선호하는 숙소 타입은?',
    choices: [
      { text: '여럿이 즐길 수 있는<br>게스트하우스 or 캠핑장', value: '' },
      { text: '프라이빗하게 즐길 수 있는<br>호텔 or 단독 펜션', value: '' }
    ]
  },
  {
    number: '08',
    question: '여행 중 이것만큼은<br>돈 아끼지 않는다.<br>가장 중요하게 생각하는 것은?',
    choices: [
      { text: '편안하게 이동하고 쉴수 있는<br>이동수단, 숙소 퀄리티', value: '' },
      { text: '여기까지 왔는데 이건 꼭 해야 해!<br>유명 맛집, 즐길 거리', value: '' }
    ]
  },
  {
    number: '09',
    question: '여행 관광 스타일은?',
    choices: [
      { text: '그때그때 가고 싶은 곳이 생기면<br>현장에서 알아보고, 예매한다', value: '' },
      { text: '미리 온라인으로 알아보고<br>최저가로 예매한다', value: '' }
    ]
  },
  {
    number: '10',
    question: '나에게 여행 충동을<br>일으키는 것은?',
    choices: [
      { text: 'SNS 눈팅 중 여행 갬성<br>사진 게시물을 봤을 때', value: '' },
      { text: '여행 어플에서<br>좋은 상품을 발견했을 때', value: '' }
    ]
  },
]
export const results = [
  {
    title: '꼼꼼한 가격 비교<br>최저가 사냥꾼',
    character: '/images/result_so_1.png',
    results: [
      '활동적이고 모험적인<br>소비 패턴을 가지고 있습니다.',
      '여행을 계획하고 준비하는 데<br>많은 시간을 할애합니다.',
      '신중하게 검색하고 비교하여<br>가장 저렴한 항공권과 숙박 시설을 찾습니다.',
      '열심히 일해 번만큼 열심히는 노는데 지출해요<br>월급이 통장을 스쳐가기 바빠요...(머쓱)'
    ],
    jobs: ['충청남도 서산', '뉴질랜드'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://bit.ly/3Wr0kt6'
  },
  {
    title: '즉흥적인 소확행<br>예비 텅장러',
    character: '/images/result_so_2.png',
    results: [
      '즐겁고 낭만적인<br>소비 패턴을 가지고 있습니다. ',
      '새로운 맛집, 기념품 가게를<br>그냥 지나치지 못합니다.',
      '현지 문화를 경험하고<br>배우는데 많은 돈을 지출하는 편입니다.',
      '계획적인 소비 스타일을 가지고 있지만,<br>한 번 꽂히면 프로지출러로 변신해요.'
    ],
    jobs: ['강원도 강릉', '스페인'],
    lectureImg: '/images/result_lecture2.png',
    lectureUrl: 'https://bit.ly/3SZl1t9'
  },
  {
    title: '아낌없이 베푸는<br>기부천사',
    character: '/images/result_so_3.png',
    results: [
      '감성적이고 가치 지향적인<br>소비 패턴을 가지고 있습니다.',
      '가성비를 중요하게 생각하고, 한 번 구매한 것은<br>본전을 뽑아야 하는 스타일이에요.',
      '편하게 휴식하고, 즐겁게 즐길 수 있는<br>고급 숙박시설과 맛집에 지출이 많은 편이에요.',
      '소중한 사람들에게 돈을 아끼지 않아요.<br>추억을 쌓는 것이 돈보다 더 소중하다고 생각해요.'
    ],
    jobs: ['경상북도 경주', '헝가리'],
    lectureImg: '/images/result_lecture3.png',
    lectureUrl: 'https://bit.ly/3DWlesG'
  },
  {
    title: '빈틈없는 소비<br>살림꾼 그 잡채',
    character: '/images/result_so_4.png',
    results: [
      '책임감 있고 신뢰할 수 있는<br>소비 패턴을 가지고 있습니다. ',
      '여행 계획을 철저히 세우고,<br>예산을 초과하지 않기 위해 노력하는 편이에요.',
      '숙소, 교통, 음식 등<br>모든 것을 미리 계획하고 예약합니다.',
      '실용적인 물건이 아니라면<br>지갑이 쉽게 열지 않는 편이에요.'
    ],
    jobs: ['전라북도 전주', '일본'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://bit.ly/3fvoTo5'
  },
  {
    title: '낭비 없는 소비<br>프로할인러',
    character: '/images/result_so_5.png',
    results: [
      '계획적이고 체계적인<br>소비 패턴을 가지고 있습니다.',
      '할인 혜택을 잘 활용해서 저렴하고<br>편리한 가성비 숙소 예약을 잘해요.',
      '박물관, 미술관, 공연장에 입장하는 데<br>많은 돈을 지출하는 편이에요.',
      '혼자 여행하는 걸 좋아해요.<br>언제든 떠날 수 있는 프로 혼행러!'
    ],
    jobs: ['경상남도 고성', '프랑스'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://bit.ly/3U0O3Kj'
  },
  {
    title: '즉흥소비 끝판왕<br>FLEX 요정',
    character: '/images/result_so_6.png',
    results: [
      '에너지 넘치고 활발한<br>소비 패턴을 가지고 있습니다.',
      '대충 목적지만 정해 놓고,<br>여행에 필요한 물품을 충동구매할 때가 많아요.',
      '여행의 추억을 남기기 위해<br>기념품을 꼭 사는 편이에요.',
      '새로운 문화를 배우고 사람들과<br>교류하는 것을 좋아해요.'
    ],
    jobs: ['강원도 양양', '라오스'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  }
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}
