import axios from "axios";
import { Component } from "react";
import Movie from "../components/Movie";
import './Home.css';

class Home extends Component {
    state = {
      isLoading: true,
      movies: []
    };
  
    getMovies = async () => {
      const {data:{data : {movies}} } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort=rating");
      this.setState({movies, isLoading:false})
    }
    componentDidMount() {
      this.getMovies();
    }
  
    render () {
      const { isLoading, movies} = this.state;
      const location = this.props.location;
      return <section className="container">
        {isLoading ? 
        <div className="loader">
          <span className="loader_text">loading...</span>
        </div> : 
        <div className="movies">
          {
            movies.map((movie) => {
              return(
                <Movie 
                key={movie.id}
                title={movie.title} 
                id={movie.id}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                location={location}/>
              )
          })
        }
        </div>
      }
      </section>
    }
  }
  export default Home;