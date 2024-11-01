import { PageState, PageAction } from "./index.types";

export function pageReducer(state: PageState, action: PageAction): PageState {
  const { actualPage, totalPages } = state;

  switch (action.type) {
    case "next":
      if (actualPage + 1 > totalPages) return state;
      return {
        ...state,
        actualPage: actualPage + 1,
      };

    case "previous":
      if (actualPage === 1) return state;
      return {
        ...state,
        actualPage: actualPage - 1,
      };

    case "set-total-page":
      return {
        ...state,
        totalPages: action.pages,
      };

    case "go-to":
      if (action.page < 1 || action.page > totalPages) return state;
      return {
        ...state,
        actualPage: action.page,
      };

    default:
      return state;
  }
}
