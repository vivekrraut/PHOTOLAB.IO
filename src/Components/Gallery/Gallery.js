import React from "react";
import { useQuery } from "react-query";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { FaDownload } from "react-icons/fa";
import classes from "./Gallery.module.css";

const Gallery = () => {
  const { data: imageUrls = [], isLoading } = useQuery(
    "imageUrls",
    async () => {
      const storage = getStorage();
      const folderRef = ref(storage, "images");
      const res = await listAll(folderRef);
      const promises = res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { id: itemRef.name, url };
      });
      return Promise.all(promises);
    }
  );

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    link.target = "_self";
    link.click();
  };

  return (
    <div>
      <div className={classes.grid}>
        {isLoading ? (
          <p>Loading images...</p>
        ) : (
          imageUrls.map((image) => (
            <div key={image.id} className={classes.imageContainer}>
              <img src={image.url} alt="Images" className={classes.image} />
              <div
                className={classes.downloadButton}
                onClick={() => handleDownload(image.url)}
              >
                <FaDownload className={classes.downloadIcon} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
