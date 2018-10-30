import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const DEFAULT_SUBREDDIT = 'MixedRaceGirls'
const POST_LIMIT = 100

const decode = string =>
  string.replace(/&amp;/g, '&')

const shuffleArray = array => array
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])

const fetchPosts = subReddit =>
  window.fetch(
    'https://www.reddit.com/r/' +
    subReddit +
    '/top.json?sort=top&t=all&limit=' +
    POST_LIMIT
  )
    .then(response => response.ok && response.json())
    .then(results => results.data.children.map(post => post.data))

const useFetchPosts = () => {
  const [posts, setPosts] = useState([])

  const resetPosts = () => {
    setPosts([])
  }

  useEffect(() => {
    if (posts.length) {
      return
    }

    const url = new URL(window.location.href)
    const subReddit = url.searchParams.get('sub') || DEFAULT_SUBREDDIT
    console.log('Fetching posts from Reddit')
    fetchPosts(subReddit).then(results => {
      setPosts(shuffleArray(results).map(post => {
        const title = decode(post.title)
        let url = decode(post.url)
        if (post.preview) {
          const preview = post.preview.images[0]
          const variant = preview.variants.gif || preview
          url = decode(variant.source.url)
        }

        return {
          id: post.id,
          title,
          url
        }
      }))
    })
  })

  return [posts, resetPosts]
}

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const reset = () => setCounter(0)
  const inc = () => setCounter(counter + 1)

  return [counter, inc, reset]
}

const Choices = ({ choices, answer, onChoiceClick }) => (
  <>
    <div className='ui'>
      Which is
      <div className='title'>
        {choices[answer].title}
      </div>
      ?
    </div>
    <div className='choices-wrapper'>
      {choices.map(post => (
        <div
          className='image-wrapper'
          key={post.id}
        >
          <img
            className='background-image'
            alt=''
            src={post.url}
          />
          <img
            onClick={onChoiceClick}
            className='image touchable'
            alt=''
            src={post.url}
          />
        </div>
      ))}
    </div>
  </>
)

const End = ({ onRestartClick }) => (
  <div className='ui'>
    <button
      className='restartButton touchable'
      onClick={onRestartClick}
    >
      Restart
    </button>
  </div>
)

const Start = () => (
  <div className='ui'>
    Loading...
  </div>
)

const App = () => {
  const [posts, resetPosts] = useFetchPosts()
  const [counter, incCounter, resetCounter] = useCounter()
  const [points, incPoints, resetPoints] = useCounter()

  const choices = posts.slice(counter * 2, counter * 2 + 2)
  const answer = Math.round(Math.random())

  const handleChoiceClick = (event) => {
    const isCorrectAnswer = event.target.src === choices[answer].url
    if (isCorrectAnswer) {
      incPoints()
    }
    incCounter()
  }

  const handleRestartClick = (event) => {
    resetCounter()
    resetPoints()
    resetPosts()
  }

  return (
    <div className='app'>
      {
        (choices.length > 1) ? (
          <Choices
            choices={choices}
            answer={answer}
            onChoiceClick={handleChoiceClick}
          />
        ) : (
          counter ? (
            <End onRestartClick={handleRestartClick} />
          ) : (
            <Start />
          )
        )
      }
      <div className='ui'>
        Points: {points} / {counter}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
