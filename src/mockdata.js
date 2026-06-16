// Using Picsum to generate reliable placeholder images
const generateMovies = (categorySeed) => {
  return Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: `Movie Title ${i + 1}`,
    image: `https://picsum.photos/seed/${categorySeed}${i}/300/450`
  }));
};

export const categories = [
  { title: "Trending Now", movies: generateMovies("trend") },
  { title: "Top Rated", movies: generateMovies("tp") },
  { title: "Action Movies", movies: generateMovies("action") },
  { title: "Comedy Movies", movies: generateMovies("comedy") },
];