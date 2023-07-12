import React from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from  './Trending'
import database from "../firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";



const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    const fetchData = async () => {
      const movieCollectionRef = collection(database, 'movies');
      const snapshot = await onSnapshot(movieCollectionRef, querySnapshot => {
        const recommends = [];
        const newDisneys = [];
        const originals = [];
        const trending = [];

        querySnapshot.forEach(doc => {
          const movieData = { id: doc.id, ...doc.data() };

          switch (movieData.type) {
            case 'recommend':
              recommends.push(movieData);
              break;
            case 'new':
              newDisneys.push(movieData);
              break;
            case 'original':
              originals.push(movieData);
              break;
            case 'trending':
              trending.push(movieData);
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    };

    fetchData();
  }, [userName]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
