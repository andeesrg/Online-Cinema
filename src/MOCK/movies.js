const generateMovies = (quantity) => {
	return new Array(quantity).fill(null).map((_, index) => ({
		id: index,
		title: `Movie ${index}`,
		rating: Math.ceil(Math.random(index * 5)),
		poster: `movie${index + 1}.jpg`,
		comments: [
			{
				title: `Comment ${index}`,
				comment: 'lorem ipsum',
			},
		],
	}));
};

export const MOVIES = generateMovies(18);
