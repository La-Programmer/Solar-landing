import useMediaQuery from 'use-mediaquery';
import Footer from './Footer'
import Header from './Header';
import './Services.css'
import Product from './Product'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function Services() {
  const tops = [(<Header />), (<Sidebar />)];
    const matches = useMediaQuery('(max-width: 768px)');
    let top  
    if (matches === true) {
         top = tops[1];
    } else {
         top = tops[0];
    }
  return (
    <div className='services'>
        {top}
        <div className='header__div' id='top'>
            <Link to='/'>
              <img className='logo' src={require('./images/logo.jpeg')} alt=''/>
            </Link>

            <h1 className='services__header'>
                Lanrewaju Global Electrical Services
            </h1>
            <p>INNOVATIVE SERVICES FOR RENEWABLE ENERGY</p>
        </div>
        <div className="intro__paragraph">
          <p>
            Our Services will satisfy market demand of electricity for business growth within the country because Electricity has become an indispensable resource in the convenience survival of human being. Its availability, stability and efficiency cannot be over emphasized.  
            <strong>Our services include but are not limited to.</strong>
          </p>

        </div>
        <div className='container'>
                <Product title='SOLAR SYSTEMS INSTALLATION' about='Do you have unreliable power supply in your area of residence or work? It can be frustrating when you are in the middle of something important and then the power supply fails at such a crucial moment. In our company we pride ourselves with the empowerment of our customers both figuratively and electrically. We are capable of providing you with the solar option. Where you are no longer dependent on the national grid. In another area you can become your own boss. In the area of power. Let us make it happen' image='https://media.istockphoto.com/photos/two-technicians-install-solar-panels-on-a-residential-building-picture-id1330011902?b=1&k=20&m=1330011902&s=170667a&w=0&h=dA5JdVteSGa0CW0TmElNNtS3stdEKPpfrG0T5Q8wY-M='/>
                
                <Product bg='grey' title='URBAN AND RURAL ELECTRIFICATION' about="We provide world class services no matter the scale of the project. We design and execute for projects ranging from a rural an urban area. Our technicians and engineers are capable of planning and implementation on any scale. Our goal is to ensure that power stability becomes the order of the day. Reach out to us to learn more" image={require('./images/electrification.jpg')}/>
                
                <Product title='GENERAL ELECTRICAL INSTALLATION' about="Would you like to erect a new building, and you are looking for contractors to oversee the electrical systems planning and installation? Look no further, our world class engineers and technicians are always raring to go. We will efficiently and consistently deliver you results. Our mentality is plan and execute. we look forward to executing for you." image='https://media.istockphoto.com/photos/electrician-engineer-uses-a-multimeter-to-test-the-electrical-and-picture-id1345962789?b=1&k=20&m=1345962789&s=170667a&w=0&h=zDGHjQnJ7Wu5TaMK4b4hoj9rb_uSMV8XConI1F_FiuE='/>

                <div className="exit__paragraph">
                  <p>
                    <strong>Our safety and social policies are expression of our commitment to the community at large.</strong> The company’s safety and health standards are designed to create a safe, health work environment, even in the most challenging projects and harsh economy.

                    The company has in its stock innovative solutions that can reduce the cost of  Solar installation for Mini grid, Industries and Large communities etc

                    When the company has fully grown, we would be launching our First Innovative Generator by which in electricity power consumption our FUELESS GENERATOR will serve as an alternative. 

                    All of our projects begin with an inspection of your home or business. Our comprehensive assessment will provide you with a variety of products and options to fit every budget
                  </p>
                </div>
                <Footer/>
        </div>
    </div>
  )
}

export default Services