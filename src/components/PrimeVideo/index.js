import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = () => (
  <div className="main-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      alt="prime video"
      className="image"
    />
    <div className="cont">
      <div className="container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider listType="ACTION" />
      </div>
      <h1 className="heading">Comedy Movies</h1>
      <div className="container">
        <MoviesSlider listType="COMEDY" />
      </div>
    </div>
  </div>
)

export default PrimeVideo
