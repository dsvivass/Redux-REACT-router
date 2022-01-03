const invoicesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INVOICES':
            return [...state, ...action.payload ];

        default:
            return state;
    }
};

export default invoicesReducer;
