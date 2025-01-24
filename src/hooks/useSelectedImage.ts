import { useState } from "react";

export default function useSelectedImage() {
	// State to manage the selected image
	const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

	// Handle image click
	const handleImageClick = (image: UnsplashImage) => {
		setSelectedImage(image);
	};

	const handleCloseModal = () => {
		setSelectedImage(null);
	};

	return {
		selectedImage,
		handleImageClick,
		handleCloseModal,
	};
}
