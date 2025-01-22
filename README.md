# Unsplash Image Search Project

## Candidate Task

Your goal is to complete the Unsplash Image Search application by implementing the following:

1. In `src/hooks/useUnsplashSearch.ts`:

   - Define the `UnsplashImage` interface
   - Implement the search functionality using the Unsplash API
   - Manage loading and error states
   - Return images, loading status, and any potential errors

2. In `src/App.tsx`:
   - Complete the search submission handler
   - Render images in the gallery container
   - Handle loading and error states

### Requirements

- Use TypeScript
- Show loading state during image fetch
- Display images in a responsive grid
- Handle empty search queries

### Hints

- Use `axios` or `tanQuery` for API calls
- Consider pagination or infinite scroll for image results

### Bonus Points

- Add image click to view larger version
- Implement responsive design
- Add debounced search to search when user pauses typing
