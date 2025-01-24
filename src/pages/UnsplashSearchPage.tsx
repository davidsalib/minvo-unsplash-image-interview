import React, { useState } from "react";
import { useUnsplashSearch } from "../hooks/useUnsplashSearch";

type Props = {};

export default function UnsplashSearchPage({}: Props) {
	// State to manage the search input
	const [searchQuery, setSearchQuery] = useState<string>("");

	// TODO: Implement search functionality using useUnsplashSearch hook
	const { images, loading, error } = useUnsplashSearch(searchQuery);

	console.log("images ->", images);
	console.log("loading ->", loading);
	console.log("error ->", error);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white py-8 px-4'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Unsplash Image Search</h1>

				{/* Search Bar */}
				<form onSubmit={handleSearchSubmit} className='mb-8'>
					<div className='flex gap-2 max-w-2xl mx-auto'>
						<input
							type='text'
							placeholder='Search for images...'
							value={searchQuery}
							onChange={handleSearchChange}
							className='flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
						/>
						<button
							type='submit'
							className='px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'
						>
							Search
						</button>
					</div>
				</form>

				{loading ? (
					<div>Loading...</div>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{images?.map((image, index) => (
							<img key={index} src={image.urls.full} alt={image.alt_description} loading='lazy' />
						))}
					</div>
				)}
				{/* Image Gallery Container */}
			</div>
		</div>
	);
}
