// import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon'
// import {} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <footer className='flex flex-col md:flex-row justify-center md:justify-around items-center border-t-2 p-5'>
            <div>
                <p className='text-sm md:text-base'> © Donovan Romero Escogido</p>                
            </div>

            <div className='flex gap-10 mt-5'>
                <a href="https://www.facebook.com/donovan.romeroo" className='hover:translate-y-1 duration-75'>
                    <FontAwesomeIcon className='text-xl md:text-2xl hover:text-blue-900' icon={faFacebook}/>
                </a>

                <a href="https://www.linkedin.com/in/donovan-romero" className='hover:translate-y-1 duration-75'>
                    <FontAwesomeIcon className='text-xl md:text-2xl hover:text-blue-700' icon={faLinkedin} />
                </a>

                <a href="https://github.com/nsvonod12" className='hover:translate-y-1 duration-75'>
                    <FontAwesomeIcon className='text-xl md:text-2xl hover:text-purple-800' icon={faGithub} />
                </a>
            </div>
        </footer>
    </>
  )
}

export default Footer