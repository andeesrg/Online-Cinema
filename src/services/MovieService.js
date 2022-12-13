import { Database } from './Database';

class MovieService {
    constructor() {
        this.database = new Database()
    }

    getMovies() {
        return this.database.read('movies')
    }

    create(body) {
        return this.database.create('movies', body)
    }
}

export const movieService = new MovieService();