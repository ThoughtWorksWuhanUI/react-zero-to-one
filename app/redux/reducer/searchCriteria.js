const initialState = {
  when: {startDate: null, endDate: null},
  where: null,
  guest: {adults: 1, children: 0, infants: 0}
};

const SearchCriteria = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT':
      console.log("submit",state);
      return state;
    case 'UPDATE':
      return Object.assign({},state, action.searchCriteria);
    default:
      return state;
  }
};

export default SearchCriteria;
