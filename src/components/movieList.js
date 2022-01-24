export function getDivision(title) {
	let games = [];
    movieList.forEach(elem => {
		if (elem.division === title) {
			games.push (elem);
		}
	});
    return games;
}
