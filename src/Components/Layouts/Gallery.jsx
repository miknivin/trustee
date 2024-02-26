import React, { useState } from "react";
import { imageUrls } from "./Utils/imageUrls";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Logic to determine current page's images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageUrls.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section data-section id="galleryRef">
      <div className="max-w-screen-xl mx-auto ">
        <div className="text-center block relative z-20 mx-auto py-4">
          <h1 className="text-5xl font-poppins font-bold my-8">Gallery</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-2">
          {/* Map through the current images */}
          {currentImages.map((url, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={url}
                alt={`galleryImage ${indexOfFirstImage + index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="my-8">
          <div className="join">
            {/* prev button */}
            <button
              className="join-item btn bg-slate-500"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1} // Disable the button if on the first page
            >
              «
            </button>

            {/* Pagination buttons */}
            {Array.from({
              length: Math.ceil(imageUrls.length / imagesPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={`join-item btn text-slate-200 ${currentPage === index + 1 ? "bg-blue-700" : "bg-slate-700"}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            {/* next button */}
            <button
              className="join-item btn bg-slate-500"
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(imageUrls.length / imagesPerPage)
              } // Disable the button if on the last page
            >
              »
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
