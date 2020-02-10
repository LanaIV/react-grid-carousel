import React, { useState, useCallback } from 'react'
import Carousel from '../../dist/bundle'

const randomImgUrl = 'https://picsum.photos/{x}/{y}?random='

const App = () => {
  const [isHover, setIshover] = useState(false)

  const handleHover = useCallback(() => {
    setIshover(state => !state)
  }, [])

  return (
    <div>
      <h4 className="thin">Single column</h4>
      <Carousel showDots containerStyle={{ maxWidth: '500px' }}>
        {[...Array(4)].map((_, i) => (
          <Carousel.Item key={i}>
            <img
              width="100%"
              src={randomImgUrl.replace('{x}', 400).replace('{y}', 280) + i}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <h4 className="thin">Multiple columns</h4>
      <Carousel showDots cols={5}>
        {[...Array(15)].map((_, i) => (
          <Carousel.Item key={i}>
            <img
              width="100%"
              src={randomImgUrl.replace('{x}', 350).replace('{y}', 170) + i * 2}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <h4 className="thin">Multiple cols + multiple rows</h4>
      <Carousel
        showDots
        cols={3}
        rows={2}
        containerStyle={{ maxWidth: '800px' }}
      >
        {[...Array(18)].map((_, i) => (
          <Carousel.Item key={i}>
            <img
              width="100%"
              src={randomImgUrl.replace('{x}', 250).replace('{y}', 158) + i * 3}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <h4 className="thin">
        Show/hide arrow buttons and dots w/ infinite loop
      </h4>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Carousel
          showDots={isHover}
          hideArrow={!isHover}
          cols={3}
          loop
          containerStyle={{ maxWidth: '1000px', marginBottom: '20px' }}
        >
          {[...Array(9)].map((_, i) => (
            <Carousel.Item key={i}>
              <img
                width="100%"
                src={
                  randomImgUrl.replace('{x}', 250).replace('{y}', 128) + i * 4
                }
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <h4 className="thin">Autoplay</h4>
      <Carousel showDots cols={4} rows={1} loop autoplay={5000}>
        {[...Array(20)].map((_, i) => (
          <Carousel.Item key={i}>
            <img
              width="100%"
              src={randomImgUrl.replace('{x}', 250).replace('{y}', 158) + i * 5}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <h4 className="thin">
        Customized layout for RWD (max-width: 1000px/750px/500px)
      </h4>
      <details>
        <summary>responsiveLayout settings</summary>
        <pre>{`[
  { breakpoint: 1000, cols: 3 },
  { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
  { breakpoint: 499, autoplay: 2000, loop: true }
]`}</pre>
      </details>
      <Carousel
        showDots
        cols={5}
        rows={2}
        mobileBreakpoint={499}
        responsiveLayout={[
          { breakpoint: 1000, cols: 3 },
          { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
          { breakpoint: 499, autoplay: 2000, loop: true }
        ]}
      >
        {[...Array(20)].map((_, i) => (
          <Carousel.Item key={i}>
            <img
              width="100%"
              src={randomImgUrl.replace('{x}', 250).replace('{y}', 158) + i * 6}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="text-secondary small">
        *Photo source:{' '}
        <a
          href="https://picsum.photos/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://picsum.photos/
        </a>
      </div>
    </div>
  )
}

export default App
