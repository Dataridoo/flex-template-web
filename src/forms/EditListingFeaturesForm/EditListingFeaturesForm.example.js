import EditListingFeaturesForm from './EditListingFeaturesForm';

const NAME = 'amenities';

const initialValueArray = ['frame', 'fork', 'accessories'];
const initialValues = { [NAME]: initialValueArray };

export const Amenities = {
  component: EditListingFeaturesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFeaturesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save amenities',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
