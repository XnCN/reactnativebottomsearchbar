const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state};
    case 'open':
      return {...state, isOpen: true};
    case 'close':
      return {...state, isOpen: false};
    case 'data':
      return {...state, data: action.data};
    case 'searchText':
      return {...state, searchText: action.searchText};
    case 'searchResultPressedItem':
      return {
        ...state,
        searchResultPressedItem: action.searchResultPressedItem,
      };
    case 'icon':
      return {...state, icon: action.icon};
    case 'customSearchResultItem':
      return {...state, customSearchResultItem: action.customSearchResultItem};
    case 'placeHolderText':
      return {...state, placeHolderText: action.placeHolderText};
    case 'cancelText':
      return {...state, cancelText: action.cancelText};
    case 'customCss':
      return {...state, customCss: action.customCss};
    default:
      throw new Error('Err..');
  }
};

export default reducer;
