import React from "react";

type ImageGalleryProps = {
	images: UnsplashImage[];
	loading: boolean;
	onImageClick: (image: UnsplashImage) => void;
};

export default function UnsplashImageGallery({ images, loading, onImageClick }: ImageGalleryProps) {
	return (
		<>
			{loading ? (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{Array(9)
						.fill(1)
						.map((_, index) => (
							<div key={`img-placeholder-${index}`} className='aspect-square bg-gray-800 rounded-lg animate-pulse' />
						))}{" "}
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{images?.map((image, index) => (
						<img key={index} src={image.urls.full} alt={image.alt_description} loading='lazy' onClick={() => onImageClick(image)} className='cursor-pointer' />
					))}
				</div>
			)}
		</>
	);
}
