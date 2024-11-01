type NextAction = {
  type: "next";
};

type PreviousAction = {
  type: "previous";
};

type GoToAction = {
  type: "go-to";
  page: number;
};

type SetTotalPageAction = {
  type: "set-total-page";
  pages: number;
};

export type PageAction =
  | NextAction
  | PreviousAction
  | GoToAction
  | SetTotalPageAction;

export type PageState = {
  totalPages: number;
  actualPage: number;
};
