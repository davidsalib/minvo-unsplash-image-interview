import React from "react";

type SearchBarProps = {
	searchQuery: string;
	handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UnsplashSearchBar({ searchQuery, handleSearchChange }: SearchBarProps) {
	return (
		<form className='mb-8'>
			<div className='flex gap-2 max-w-2xl mx-auto'>
				<input
					type='text'
					placeholder='Search for images...'
					value={searchQuery}
					onChange={handleSearchChange}
					className='flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
				/>
				{/* <button
					type='submit'
					className='px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Search
				</button> */}
			</div>
		</form>
	);
}
