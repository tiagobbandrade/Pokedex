import { usePaginationContext } from "../../contexts/PaginationContext/PaginationContext";

export function Pagination() {
  const { actualPage, totalPages, nextPage, previousPage, setPage, render } =
    usePaginationContext();

  const isFirstPage = actualPage === 1;
  const isLastPage = actualPage === totalPages;

  if (!render) return null;

  const renderPageNumbers = () => {
    const pages = [];

    if (actualPage > 2) {
      pages.push(
        <button
          key={1}
          onClick={() => setPage(1)}
          className="w-6 text-sm text-white"
          aria-label="Página 1"
        >
          1
        </button>
      );

      if (actualPage > 3) {
        pages.push(
          <span key="start-ellipsis" className="text-white">
            ...
          </span>
        );
      }
    }

    for (
      let i = Math.max(1, actualPage - 1);
      i <= Math.min(totalPages, actualPage + 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`text-sm w-6 ${
            i === actualPage ? "text-[#33CC99]" : "text-white"
          }`}
          aria-label={`Página ${i}`}
        >
          {i}
        </button>
      );
    }

    if (actualPage < totalPages - 1) {
      if (actualPage < totalPages - 2) {
        pages.push(
          <span key="end-ellipsis" className="text-white">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => setPage(totalPages)}
          className="w-6 text-sm text-white"
          aria-label={`Última página: ${totalPages}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-6 mt-6">
      <button
        onClick={previousPage}
        className="text-[#33343C] text-sm"
        disabled={isFirstPage}
        aria-label="Página anterior"
      >
        Página anterior
      </button>

      <div className="flex items-center gap-2">{renderPageNumbers()}</div>

      <button
        onClick={nextPage}
        className="text-[#33343C] text-sm"
        disabled={isLastPage}
        aria-label="Próxima página"
      >
        Próxima página
      </button>
    </div>
  );
}
