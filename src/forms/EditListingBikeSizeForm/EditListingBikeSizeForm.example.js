import EditListingBikeSizeForm from './EditListingBikeSizeForm';

const NAME = 'bikeSize';

const initialValueArray = ['frame', 'fork', 'accessories'];
const initialValues = { [NAME]: initialValueArray };

export const FineSetUp = {
  component: EditListingBikeSizeForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingBikeSizeForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save bikeSize',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
