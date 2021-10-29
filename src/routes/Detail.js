import { Component } from "react";
import Movie from "../components/Movie";
import './Detail.css';

class Detail extends Component {
    componentDidMount(){
      const { location, history} = this.props;
      console.log(location)
      if(location.state === undefined){
        history.push('/');
      }
    }
  
    render () {
      const location = this.props.location;
      if(location.state){
        const {state : {title, year,summary, poster, genres}} = location;
        return (
        <section className="container">
          <div className="detail">
            <Movie 
            title={title} 
            year={year}
            summary={summary}
            poster={poster}
            genres={genres}
            location={this.props.location}
            />
          </div>
        </section>
        );
      } else {
        return null;
      }
      
    }
  }
  export default Detail;