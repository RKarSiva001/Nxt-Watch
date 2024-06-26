import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    isDarkTheme: false,
    dataOfIdEach: '',
    savedVideos: [],
    isBanner: true,
  }

  addToSavedVideos = videoDetails => {
    // console.log(videoDetails)
    const {savedVideos} = this.state
    const getVideo = savedVideos.find(each => each.id === videoDetails.id)
    if (getVideo === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    } else {
      const updateVideo = savedVideos.filter(each => each.id !== getVideo.id)
      this.setState({savedVideos: updateVideo})
    }

    // console.log(`savedVideos: ${savedVideos}`)
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  DataOfId = id => {
    // console.log(`DataOfId: ${id}`)
    this.setState({dataOfIdEach: id})
  }

  render() {
    const {
      isDarkTheme,
      dataOfIdEach,
      storageSaved,
      savedVideos,
      isBanner,
    } = this.state
    // console.log(dataOfIdEach)
    return (
      <ThemeContext.Provider
        value={{
          storageSaved,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          DataOfId: this.DataOfId,
          dataOfIdEach,
          savedVideos,
          isBanner,
          savedToThisVideo: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
