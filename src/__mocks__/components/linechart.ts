export const onClick = jest.fn();

export const mockedProps = {
  id: 'myChart',
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'label 1',
      data: new Array(12).map(() => Math.round(Math.random() * 300)),
      borderColor: '#fff',
    },
    {
      label: 'label 2',
      data: new Array(12).map(() => Math.round(Math.random() * 500)),
      borderColor: '#f00',
    },
    {
      label: 'label 3',
      data: new Array(12).map(() => Math.round(Math.random() * 1000)),
      borderColor: '#fff',
    },
  ],
  onClick,
};
