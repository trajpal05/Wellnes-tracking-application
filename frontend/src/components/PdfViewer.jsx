import React, { useState } from 'react';
import PDF from 'react-pdf-js';

const PdfViewer = ({ file }) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const onDocumentComplete = (pages) => {
    setPages(pages);
  };

  const handlePrevious = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setPage(prevPage => Math.min(prevPage + 1, pages));
  };

  const renderPagination = (page, pages) => {
    return (
      <nav>
        <ul className="pager">
          {page > 1 && <li className="previous" onClick={handlePrevious}><a href="#">&lt; Previous</a></li>}
          {page < pages && <li className="next" onClick={handleNext}><a href="#">Next &gt;</a></li>}
        </ul>
      </nav>
    );
  };

  return (
    <div>
      <PDF
        file={file}
        onDocumentComplete={onDocumentComplete}
        page={page}
      />
      {pages && renderPagination(page, pages)}
    </div>
  );
};

export default PdfViewer;
