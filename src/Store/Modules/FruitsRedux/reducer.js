
const initialState = [
    {
        name: "Banana",
       
    },
    {
        name: "Maçã",

    },
    {
        name: "Morango",

    }
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;