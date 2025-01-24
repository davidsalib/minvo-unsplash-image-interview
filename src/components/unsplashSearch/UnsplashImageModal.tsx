import React from "react";

type UnsplashImageModalProps = {
	image: UnsplashImage | null;
	onClose: () => void;
};

export default function UnsplashImageModal({ image, onClose }: UnsplashImageModalProps) {
	if (!image) return null;

	const { urls, alt_description } = image;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50' onClick={onClose}>
			<div className='relative  h-5/6'>
				<img src={urls.full} alt={alt_description || "Unsplash image"} className='w-full h-full rounded-lg' />
				<button
					onClick={onClose}
					className='absolute top-2 right-2 px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					X
				</button>
			</div>
		</div>
	);
}
