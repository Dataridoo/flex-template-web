import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  {
    key: 'frame',
    label: 'Frame',
  },
  {
    key: 'fork',
    label: 'Fork',
  },
  {
    key: 'drivetrain',
    label: 'Drive Train',
  },
  {
    key: 'components',
    label: 'Components',
  },
  {
    key: 'accessories',
    label: 'Accessories',
  }
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'amenities',
    options: exampleOptions,
    selectedOptions: ['frame', 'fork', 'accessories'],
    twoColumns: true,
  },
  group: 'misc',
};
