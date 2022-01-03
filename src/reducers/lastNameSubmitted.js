const lastNameSubmittedReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export default lastNameSubmittedReducer;
