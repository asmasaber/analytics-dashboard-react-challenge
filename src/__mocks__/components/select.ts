export const options = [
  'mocked-option-1',
  'mocked-option-2',
  'mocked-option-3',
  'mocked-option-4',
  'mocked-option-5',
  'mocked-option-6',
  'mocked-option-7',
  'mocked-option-8',
  'mocked-option-9',
  'mocked-option-10',
];

export const onChange = jest.fn();

const Props = {
  label: 'Select an option',
  labelId: 'test-select-label-id',
  id: 'test-select',
  name: 'test-select-name',
  value: 'mocked-option-1',
  options,
  onChange,
};

export default Props;
