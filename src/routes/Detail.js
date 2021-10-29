import { Component } from "react";
import Movie from "../components/Movie";
import './Detail.css';

class Detail extends Component {
    componentDidMount(){
      const { location, history} = this.props;
      if(location.state === undefined){
        history.push('/');
      }
    }
  
    render () {
      const { state:{title, year,summary, poster, genres}} = this.props.location;
      console.log(this.props)

      return <section className="container">
        <div className="movies">
          <Movie 
          title={title} 
          year={year}
          summary={summary}
          poster={poster}
          genres={genres}
          />
        </div>
      </section>
    }
  }
  export default Detail;