import React, { Component } from 'react'
import axios from "axios"

export default class Test2 extends Component {
  state= {
    loading: true,
    movies: []
  }
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    //console.log(movies.data.data.movies)
    //console.log(movies);
    this.setState({movies, loading: false})
    console.log(this.state.movies);
  }

  componentDidMount(){
    this.getMovies()
  }
  setLoading = () => {
    this.setState(current => ({ loading: !current }));
  }
  render() {
    const {loading, movies} = this.state;
    return (
      <div>
        {loading ? "true" : "false"}
        <button onClick={this.setLoading}>Loading btn</button>
        {loading ? "" : movies.map(i=><p>{i.title}</p>)}
      </div>
    )
  }
}
