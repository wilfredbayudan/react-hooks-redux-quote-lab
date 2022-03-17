// Action Creators
// TODO: Create action creators as defined in tests
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
}

export function removeQuote(quoteId) {
  return {
    type: "quotes/remove",
    payload: quoteId,
  };
}

export function upvoteQuote(quoteId) {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  };
}

export function downvoteQuote(quoteId) {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  };
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      // const newQuote = {
      //   ...action.payload,
      //   id: uuid(),
      //   votes: 0,
      // };
      return [...state, action.payload];

    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);

    case "quotes/upvote":
      return state.map((quote) => {
        if (quote.id !== action.payload) return quote;
        return {
          ...quote,
          votes: quote.votes + 1,
        };
      });

    case "quotes/downvote":
      return state.map((quote) => {
        if (quote.id !== action.payload) return quote;
        return {
          ...quote,
          votes: quote.votes > 0 ? quote.votes - 1 : 0,
        };
      });

    default:
      return state;
  }
}
