import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    // console.log(movie); -> just to see if it works.
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    // this.setState({ movies: movies }); ->  it overrides the movies in state_if prop and value are the same, we can write only one of them.
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0)
      return (
        <p className="text-xl text-slate-400">
          There are no movies in the database.
        </p>
      );

    return (
      <React.Fragment>
        <p className="mb-10 text-xl text-slate-400">
          Showing {count} movies in the database.
        </p>
        <table className="w-full table-auto border-collapse text-xl">
          <thead>
            <tr>
              <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Title
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Genre
              </th>
              <th className="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Stock
              </th>
              <th className="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Rate
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {this.state.movies.map((movie) => {
              //* we set key for the element which repeating!
              return (
                <tr key={movie._id}>
                  <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {movie.title}
                  </td>
                  <td className="border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {movie.genre.name}
                  </td>
                  <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {movie.numberInStock}
                  </td>
                  <td className="border-b border-slate-100 p-4 pl-6 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {movie.dailyRentalRate}
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="rounded bg-red-600 px-3 py-1 text-white active:bg-red-700 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
