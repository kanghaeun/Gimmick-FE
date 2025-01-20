const initialMockData = [
  {
    id: 1,
    timerName: '조림',
    icon: '🥘',
    timerColor: '#F6DBB7',
    totalMinutes: '1',
    totalSeconds: '00',
    detailTimerData: [
      {
        fireData: '강불',
        id: 1,
        memoData: '',
        minutes: '00',
        seconds: '30',
      },
      {
        fireData: '약불',
        id: 2,
        memoData: '',
        minutes: '00',
        seconds: '30',
      },
    ],
  },
  {
    id: 2,
    timerName: '고구마 삶기',
    icon: '🍠',
    timerColor: '#FBDF60',
    totalMinutes: '20',
    totalSeconds: '00',
    detailTimerData: [
      {
        fireData: '강불',
        id: 3,
        memoData: '',
        minutes: '5',
        seconds: '0',
      },
      {
        fireData: '약불',
        id: 4,
        memoData: '',
        minutes: '15',
        seconds: '0',
      },
    ],
  },
  {
    id: 3,
    timerName: '파스타 (알덴테)',
    icon: '🍝',
    timerColor: '#BAE2FF',
    totalMinutes: '5',
    totalSeconds: '30',
    detailTimerData: [
      {
        fireData: '중불',
        id: 5,
        memoData: '',
        minutes: 5,
        seconds: 30,
      },
    ],
  },
];

export default initialMockData;
