import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
const client = createClient({
  space: "dukgwbai4wce",
  accessToken: "MjjtXf6d_jrXeIWgRFucOHFcNepOT_GPJ3T6ftNMqao",
});
const GalleryPage = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    Promise.all([
      client.getEntries({ content_type: "galleryImage" }),
      client.getEntries({ content_type: "youtubeVideo" }),
    ])
      .then(([galleryResponse, videoResponse]) => {
        console.log("Gallery success", galleryResponse);
        console.log("Video success", videoResponse);

        // Handle galleryImage data
        const galleryImageData = galleryResponse.items.map(
          (item) => item.fields,
        );

        // Handle youtubeVideo data
        const videoData = videoResponse.items.map((item) => item.fields);

        // Update state with both types of data
        setImages({
          galleryImages: galleryImageData,
          youtubeVideos: videoData,
        });
      })
      .catch((error) => {
        console.error("Error fetching entries:", error);
      });
  }, []);
  return (
    <section data-section id="galleryRef">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center block relative z-20 mx-auto py-4">
          <h1 className="text-5xl font-poppins font-bold my-8">Gallery</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
