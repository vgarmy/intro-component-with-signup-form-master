import { useState, useEffect } from 'react';
import './App.css'
import background from './assets/bg-intro-desktop.png'
import mobilbackground from './assets/bg-intro-mobile.png'

function App() {
  const [bgImage, setBgImage] = useState(window.innerWidth < 768 ? mobilbackground : background);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? mobilbackground : background);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [placeholders, setPlaceholders] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    password: "Password"
  });
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleEmailValidation = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailPattern.test(value)) {
      setShowEmailPopup(true);
    } else {
      setShowEmailPopup(false);
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    if (e.target.name === 'email') {
      handleEmailValidation(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let updatedFormValues = { ...formValues };
    let updatedPlaceholders = { ...placeholders };

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First Name cannot be empty";
      updatedPlaceholders.firstName = '';
    }
    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last Name cannot be empty";
      updatedPlaceholders.lastName = '';
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email cannot be empty";
      updatedPlaceholders.email = '';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formValues.email)) {
        newErrors.email = "Looks like this is not an email";
        updatedPlaceholders.email = formValues.email;
        updatedFormValues.email = '';
      }
    }
    if (!formValues.password.trim()) {
      newErrors.password = "Password cannot be empty";
      updatedPlaceholders.password = '';
    }

    setFormValues(updatedFormValues);
    setPlaceholders(updatedPlaceholders);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div
      className="w-full md:h-screen bg-[var(--Red)] flex items-center justify-center relative"
      role="main"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full md:w-[1440px] h-full md:h-auto flex flex-col md:flex-row overflow-hidden items-center">
        <div className="w-full md:w-[50%] flex flex-col text-white">
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold leading-10 md:leading-16 pl-0 pt-[100px] md:pt-0 md:pl-[170px] mb-[2.5rem]">
            Learn to code by watching others
          </h1>
          <p className='font-medium text-center md:text-left leading-6 pl-0 md:pl-[170px]'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col px-[25px] md:px-[72px] py-[72px]">
          <div className='bg-[var(--Blue)] rounded-lg py-[1.5rem] px-[50px] text-center text-white mb-5 shadow-[0_8px_0_rgba(0,0,0,0.2)]'>
            Try it free 7 days then $20/mo. thereafter
          </div>
          <div className='bg-white rounded-lg py-[3rem] px-[2rem] text-black shadow-[0_8px_0_rgba(0,0,0,0.2)]'>
            <form className="flex flex-col gap-6 font-bold" onSubmit={handleSubmit} noValidate>
              <div style={{ position: 'relative' }}>
                <input
                  name="firstName"
                  type="text"
                  placeholder={placeholders.firstName}
                  className={`border ${errors.firstName ? 'border-[var(--Red)]' : 'border-gray-300'} rounded-md py-4 px-8 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)] w-full`}
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <div className="absolute right-3 top-[calc(50%-12px)] -translate-y-1/2 bg-[var(--Red)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    !
                  </div>
                )}
                {errors.firstName && <p className="text-[var(--Red)] text-xs font-normal text-right mt-2 mr-2 italic">{errors.firstName}</p>}
              </div>

              <div style={{ position: 'relative' }}>
                <input
                  name="lastName"
                  type="text"
                  placeholder={placeholders.lastName}
                  className={`border ${errors.lastName ? 'border-[var(--Red)]' : 'border-gray-300'} rounded-md py-4 px-8 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)] w-full`}
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <div className="absolute right-3 top-[calc(50%-12px)] -translate-y-1/2 bg-[var(--Red)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    !
                  </div>
                )}
                {errors.lastName && <p className="text-[var(--Red)] text-xs font-normal text-right mt-2 mr-2 italic">{errors.lastName}</p>}
              </div>

              <div style={{ position: 'relative' }}>
                <input
                  name="email"
                  type="text"
                  placeholder={placeholders.email}
                  className={`border ${errors.email ? 'border-[var(--Red)]' : 'border-gray-300'} rounded-md py-4 px-8 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)] w-full ${errors.email === "Looks like this is not an email" ? 'placeholder-[var(--Red)]' : ''
                    }`}
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="absolute right-3 top-[calc(50%-12px)] -translate-y-1/2 bg-[var(--Red)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold leading-none">
                    !
                  </div>
                )}
                {errors.email && <p className="text-[var(--Red)] text-xs font-normal text-right mt-2 mr-2 italic">{errors.email}</p>}
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  name="password"
                  type="password"
                  placeholder={placeholders.password}
                  className={`border ${errors.password ? 'border-[var(--Red)]' : 'border-gray-300'} rounded-md py-4 px-8 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)] w-full`}
                  value={formValues.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="absolute right-3 top-[calc(50%-12px)] -translate-y-1/2 bg-[var(--Red)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    !
                  </div>
                )}
                {errors.password && <p className="text-[var(--Red)] text-xs font-normal text-right mt-2 mr-2 italic">{errors.password}</p>}
              </div>

              <button className="bg-[var(--Green)] cursor-pointer font-normal text-white py-[1rem] rounded-md hover:bg-opacity-80 uppercase border border-[var(--Green)] border-b-2">
                Claim your free trial
              </button>
            </form>
            <p className="text-center text-[var(--Grayish-Blue)] mt-2 text-xs">
              By clicking the button, you are agreeing to our <span className='font-bold text-[var(--Red)]'>Terms and Services</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
