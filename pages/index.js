import {useEffect} from 'react';
import MovieListing from '../components/MovieListing'
import { NextSeo } from 'next-seo'
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movie/movieSlice';
import Popup from "../components/Popup"
import { useState } from 'react';
import Header from '../components/Header';
import Head from 'next/head';


const Home = () => {
	const dispatch = useDispatch();
	const movieText = "Star"
	const showText = "Friends"
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText));
		dispatch(fetchAsyncShows(showText));
	}, [dispatch]);

	return (
		<div className='relative justify-center'>
			<h1 className="place-content-center text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Home
              </h1>
			<MovieListing className=''/>
		</div>
	)
}



const index = () => {
	// const [buttonPopup, setButtonPopup] = useState(false);
	// const [timedPopup, setTimedPopup] = useState(false)
	

	// useEffect(() => {
	// 	setTimeout(() => {
	// 	setTimedPopup(true);
	// }, 3000);
	// }, [])
	return (
		<div>
			<Head>
  				<title>Cinema</title>
  				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>
			<Header/>
			{/* <button onClick= {() => setButtonPopup(true)}>Open Popup</button>
			<Popup trigger={buttonPopup} setTrigger={setButtonPopup}><h3>My Popup</h3></Popup>
			<Popup trigger={timedPopup} setTrigger={setTimedPopup}></Popup> */}
			<Home/>
		</div>
	);
};

export default index;