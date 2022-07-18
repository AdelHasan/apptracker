import {Logo} from '../components'
import main from '../assets/images/mainalt.svg'
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
          <p>
            Job seeking is a complex, multifaceted endeavor. Seekr is here as a tool to reduce some of that complexity. Sign up to view and manage all of your applications in one place, view stats on your applications, and make that next step in your career from a more informed, organized place.
          </p>
          <Link to='/register' className='btn btn-hero'>Login / Register</Link>
        </div>
        <img src={main} alt='job seeker' className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing