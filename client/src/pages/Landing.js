import {Logo} from '../components'
import main from '../assets/images/mainalt.svg'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* INFO */}
        <div className='info'>
          <h1>
            job <span>tracking</span> tool
          </h1>
          <p>You know, I was God once. Yeah. Give a little credit to our public schools. It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you?</p>
          <Link to='/register' className='btn btn-hero'>Login / Register</Link>
        </div>
        <img src={main} alt='job seeker' className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing