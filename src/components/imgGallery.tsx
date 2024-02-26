import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Ruta corregida

interface GalleryImage {
    original: string;
    thumbnail?: string;
    description?: string;
    // Agrega cualquier otra propiedad que necesites
}

interface ImgGalleryProps {
    images: GalleryImage[];
    title?: string;
}

const ImgGallery: React.FC<ImgGalleryProps> = ({ images, title }) => {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <ImageGallery items={images} />
        </div>
    );
}

export default ImgGallery;