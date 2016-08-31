import expect from 'expect'
import { seedMovies } from '../src/seed'

describe('seed', () => {
  describe('seedMovies', () => {
    it('should have 16 movies', () => {
      expect(seedMovies.length).toEqual(16)
    })

    it('should have a movie with an id, title, and features', () => {
      const movie = seedMovies[0];

      expect(movie.id).toBe(1)
      expect(movie.title).toBe('Movie 1')
      expect(movie.features).toInclude('accessible')
    })
  })
})