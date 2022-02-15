import React from 'react'
import Button from '../components/Button'

const Home: React.FC = () => {
  return (
    <div>
      <h3>Home page</h3>
      <div className="mt-4">
        <Button text="Search for places" />
      </div>
    </div>
  )
}

export default Home