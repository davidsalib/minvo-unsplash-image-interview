import React, { Suspense, useState } from "react";
import UnsplashImageModal from "../components/unsplashSearch/UnsplashImageModal";
import UnsplashSearchBar from "../components/unsplashSearch/UnsplashSearchBar";
import UnsplashTitle from "../components/unsplashSearch/UnsplashTitle";
import { useUnsplashSearch } from "../hooks/useUnsplashSearch";
import useSelectedImage from "../hooks/useSelectedImage";

const UnsplashImageGallery = React.lazy(() => import("../components/unsplashSearch/UnsplashImageGallery"));

export default function UnsplashSearchPage() {
	// State to manage the search input
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Hooks
	//	- useSelectedImage: Custom hook to manage the selected image
	const { handleCloseModal, handleImageClick, selectedImage } = useSelectedImage();
	//	- useUnsplashSearch: Custom hook to fetch images from Unsplash API
	const { images, loading, error } = useUnsplashSearch(searchQuery);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white py-8 px-4'>
			<div className='max-w-4xl mx-auto'>
				{/* Title */}
				<UnsplashTitle />

				{/* Search Bar */}
				<UnsplashSearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

				{/* Error Message */}
				{error && <div className='text-red-500 text-center'>{error}</div>}

				{/* Image Gallery Container */}
				<Suspense fallback={<div className='text-center text-2xl'>Loading...</div>}>
					<UnsplashImageGallery images={images} loading={loading} onImageClick={handleImageClick} />
				</Suspense>

				{/* Image Modal */}
				<UnsplashImageModal onClose={handleCloseModal} image={selectedImage} />
			</div>
		</div>
	);
}
