// @flow
export type TimelineStep = {
  date: string,
  text: string,
  percent: string,
  isActive: boolean,
};

export default [
  {
    title: 'Sale Timeline:',
    steps: [
      {
        date: '25 Feb',
        text: '1 GWON = $1',
        percent: '30%',
        isActive: true,
      },
    ],
  },
];
