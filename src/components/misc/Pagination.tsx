import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  lastPage: number;
  buildHref: (page: number) => string;
};

export default function Pagination({ currentPage, lastPage, buildHref }: PaginationProps) {
  if (lastPage <= 1) return null;

  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

  return (
    <nav aria-label="Paginación">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={page}>
            <Link className="page-link" href={buildHref(page)}>
              {page}
            </Link>
          </li>
        ))}
        {currentPage < lastPage && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              href={buildHref(currentPage + 1)}
              aria-label="Siguiente"
            >
              <i className="bi bi-chevron-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
