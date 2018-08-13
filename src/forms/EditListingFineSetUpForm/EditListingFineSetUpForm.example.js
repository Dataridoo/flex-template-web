import EditListingFineSetUpForm from './EditListingFineSetUpForm';

const NAME = 'fineSetUp';

const initialValueArray = ['frame', 'fork', 'accessories'];
const initialValues = { [NAME]: initialValueArray };

export const FineSetUp = {
  component: EditListingFineSetUpForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFineSetUpForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save fineSetUp',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
