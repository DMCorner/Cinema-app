import { FaMoon,FaSun } from 'react-icons/fa';
import useDarkMode from './useDarkMode';
import { useRouter } from 'next/router'
import { StrictMode } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movie/movieSlice';

const Header = () => {
  return (
    <div className='top-navigation fixed z-50'>
      <DanFace /> 
      <Title />
      {/* <ThemeIcon /> */}
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <StrictMode>
    <body onClick={handleMode}>
      {darkTheme ? (
        <div className='top-navigation-icon w-14 group hover:cursor-pointer'>
        <FaMoon size='24' />     
        <div className="top-navigation-tooltip group-hover:scale-100">
        {"Dark Mode"}
        </div>
        </div>
      ) : (
        <div className='top-navigation-icon w-14 group hover:cursor-pointer'>
        <FaSun size='24' />
        <div className="top-navigation-tooltip group-hover:scale-100 ">
        {"Light Mode"}
        </div>
        </div>
      )}
    </body>
    </StrictMode>
  );
};

//The above is the source of the hydration errors. Code runs fine but with warnings. No luck fixing so far.

const DanFace = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    console.log(term)
  }
  return (
        <div className="header">
        <div className="logo">
          <Link href="/">Movie App</Link>
          </div>
      <div className="user-image">
        <form onSubmit={submitHandler}> 
          <input 
          type="text" 
          value={term} 
          placeholder="Search Movies or Shows" 
          onChange={(e) => setTerm(e.target.value)}/>
          <button type="submit">Test</button>
        </form>
      </div>
    </div>
  )
}


const Title = () => {
  const router = useRouter()
  if (router.pathname === "/") {
    return (
    <h5 className='title-text '>Home</h5>
  )}
  if (router.pathname === "/Previous-Work") {
    return (
    <h5 className='title-text '>Previous Work</h5>
  )}
  if (router.pathname === "/CV") {
    return (
    <h5 className='title-text '>CV</h5>
  )}
  if (router.pathname === "/Contact-Me") {
    return (
    <h5 className='title-text '>Contact Me</h5>
  )}
}

export default Header;