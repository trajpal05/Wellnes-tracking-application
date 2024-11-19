import { useState } from "react";
import PdfViewer from "../components/PdfViewer";
import Modal from "../components/Modal";

const ContentCard = ({ content }) => {

  const [showModal, setShowModal] = useState(false);

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const closeUploadModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {
        content.mode === 'Video' && content.videoId ? (
          // Embed video player
          <video controls className="w-full">
            <source src={content.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : content.mode === 'Article' && content.videoId ? (
          // Display image if not a video
          <div>
            <img className="w-full" src={'/src/assets/fitness.png'} alt={content.title} />
            <button onClick={handleUploadClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-5"
            >View Article</button>
            <Modal show={showModal} onClose={closeUploadModal}>
              <PdfViewer file={content.videoUrl} />
            </Modal>
          </div>


        ) : content.mode === 'Plan' && content.videoId ? <img className="w-full" src={'src/assets/workoutplan.png'} alt={content.title} /> : (
          // Default case to display image
          <img className="w-full" src={'src/assets/live2.png'} alt={content.title} width={400} height="250px"/>
        )
      }
      <div className="flex flex-col items-center pb-10 p-5">
        <div className="font-bold text-xl mb-2">{content.title}</div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Instructor:</span></div>
            <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{content.instructor}</span></div>
          </div>
          <div className="flex justify-between">
            <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Type:</span></div>
            <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{content.type}</span></div>

          </div>
          <div className="flex justify-between">
            <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Mode:</span></div>
            <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{content.mode}</span></div>

          </div>
          <div className="flex justify-between">
            <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Date:</span></div>
            <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{content.date}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
