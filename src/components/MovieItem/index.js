import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {listItems} = props
  const {thumbnailUrl, videoUrl} = listItems
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumb-img" />
        }
      >
        {close => (
          <>
            <div className="inner-cont">
              <button
                type="button"
                data-testid="closeButton"
                className="btn"
                onClick={() => close()}
              >
                {' '}
                <IoMdClose className="icon" />
              </button>

              <div className="video-cont">
                <ReactPlayer
                  url={videoUrl}
                  height="400px"
                  width="85%"
                  controls
                />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
