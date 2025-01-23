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
- Please use Tailwind for styling if you are familiar, otherwise use what you are comfortable with
- Show loading state during image fetch
- Display images in a responsive grid
- Handle empty search queries

### Hints

- You are free to search the internet for anything, but not use ChatGPT or other AI tools
- Use `axios` or `fetch` for API calls
- Consider pagination or infinite scroll for image results

### Bonus Points

- Add image click to view larger version
- Implement responsive mobile design
- Add debounced search to search when user pauses typing

### Getting Started

1. Clone the repository: `git clone https://github.com/davidsalib/minvo-unsplash-image-interview.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the app in a browser: `http://localhost:3000`
