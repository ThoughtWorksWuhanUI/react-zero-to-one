import { updateSearchCriteria, submitSearch } from '../../redux/actions';

export const mapDispatchToProps = (dispatch) => ({
  updateSearchCriteria: (searchCriteria) => {
    dispatch(updateSearchCriteria(searchCriteria));
  },
  submitSearch: () => {
    dispatch(submitSearch());
  }
});
