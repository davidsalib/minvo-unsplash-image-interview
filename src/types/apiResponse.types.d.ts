type ApiResponse<T> = {
	total: number;
	total_pages: number;
	results: T;
};
