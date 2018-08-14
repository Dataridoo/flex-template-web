import EditListingBikeSizeForm from './EditListingBikeSizeForm';

const NAME = 'fineSetUp';

const initialValueArray = ['frame', 'fork', 'accessories'];
const initialValues = { [NAME]: initialValueArray };

export const FineSetUp = {
  component: EditListingBikeSizeForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingBikeSizeForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save fineSetUp',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
