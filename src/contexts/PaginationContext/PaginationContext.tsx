import {
  createContext,
  Dispatch,
  PropsWithChildren,
  Reducer,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from "react";
import { PageAction, PageState } from "./index.types";
import { pageReducer } from "./reducer";

type PaginationContextType = {
  actualPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  setTotalPages: (totalPages: number) => void;
  render: boolean;
  setRender: Dispatch<SetStateAction<boolean>>;
};

const PaginationContext = createContext<PaginationContextType>(
  {} as PaginationContextType
);

type PageReducerType = Reducer<PageState, PageAction>;

export function PaginationContextProvider({ children }: PropsWithChildren) {
  const [render, setRender] = useState(true);

  const initialValue = {
    actualPage: 1,
    totalPages: 1,
  };

  const [state, dispatch] = useReducer<PageReducerType>(
    pageReducer,
    initialValue
  );

  function setPage(page: number) {
    dispatch({ type: "go-to", page });
  }

  function previousPage() {
    dispatch({ type: "previous" });
  }

  function nextPage() {
    dispatch({ type: "next" });
  }

  function setTotalPages(totalPages: number) {
    dispatch({ type: "set-total-page", pages: totalPages });
  }

  return (
    <PaginationContext.Provider
      value={{
        actualPage: state.actualPage,
        setPage,
        previousPage,
        nextPage,
        setTotalPages,
        totalPages: state.totalPages,
        setRender,
        render,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePaginationContext() {
  return useContext(PaginationContext);
}
