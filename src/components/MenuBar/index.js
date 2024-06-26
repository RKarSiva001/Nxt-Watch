import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoGameController} from 'react-icons/io5'
import {CgPlayListAdd} from 'react-icons/cg'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LeftSideNavBar,
  FaceBookImage,
  TwitterImage,
  LinkdinImage,
  FaceBookTwitterLinkBg,
  DivColorLeftSide,
} from './styledComponents'

import './index.css'

const MenuBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <LeftSideNavBar const Colors={isDarkTheme}>
            <DivColorLeftSide const textColor={isDarkTheme}>
              <div>
                <Link
                  className={isDarkTheme ? 'linkToWhite' : 'linkToDark'}
                  to="/"
                >
                  <AiFillHome /> Home
                </Link>
              </div>
              <br />
              <div>
                <Link
                  className={isDarkTheme ? 'linkToWhite' : 'linkToDark'}
                  to="/trending"
                >
                  <HiFire /> Trending
                </Link>
              </div>
              <br />
              <div>
                <Link
                  className={isDarkTheme ? 'linkToWhite' : 'linkToDark'}
                  to="/gaming"
                >
                  <IoGameController /> Gaming
                </Link>
              </div>
              <br />
              <div>
                <Link
                  className={isDarkTheme ? 'linkToWhite' : 'linkToDark'}
                  to="/saved-videos"
                >
                  <CgPlayListAdd /> Saved videos
                </Link>
              </div>
            </DivColorLeftSide>
            <div>
              <p>CONTACT US</p>
              <FaceBookTwitterLinkBg>
                <div>
                  <FaceBookImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                    alt="facebook logo"
                  />
                </div>
                <div>
                  <TwitterImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="twitter logo"
                  />
                </div>
                <div>
                  <LinkdinImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
              </FaceBookTwitterLinkBg>
              <p>Enjoy! Now to see your channels and recommendations!</p>
            </div>
          </LeftSideNavBar>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuBar
