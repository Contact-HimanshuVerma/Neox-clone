import React, { useEffect, useState } from "react";
import Modal from "../components/modal";

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  useEffect(() => {
    // Function to set myState to false after 3 seconds
    const setFalseAfter3Seconds = () => {
      setTimeout(() => {
        setLoading(false);
        console.log("myState is now false.");
      }, 3000);
    };

    // Call the setFalseAfter3Seconds function after the component has mounted
    setFalseAfter3Seconds();

    // Clean up the setTimeout timer when the component unmounts
    return () => clearTimeout(setFalseAfter3Seconds);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const images = [
    "/gallery/1.JPG",
    "/gallery/2.JPG",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
  ];
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      {modalOpen && <Modal src={selectedImage} onClose={closeModal} />}

      {loading === true ? (
        <div className="h-screen bg-white">
          <div className="flex flex-col pt-44 items-center h-full">
            <img
              className="animate-spin w-[10%]"
              src="/logoloading.png"
              alt=""
            />
            Loading ....
          </div>
        </div>
      ) : (
        <div className="-m-1 flex flex-wrap md:-m-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-1/2 p-1 md:p-2 cursor-pointer"
              onClick={() => openModal(src)}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={src}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
