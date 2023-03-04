import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectUserName } from "../features/user/userSlice";
import {
  collection,
  getDocs,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const [newDisneys, setNewDisneys] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      async function getMovies() {
        const moviesCollection = collection(db, "movies");
        const movieSnapshot = await getDocs(moviesCollection);

        movieSnapshot.docs.map((doc) => {
          if (doc.data().type === "recommend") {
            setRecommends((prev) => [...prev, { id: doc.id, ...doc.data() }]);
          }
          if (doc.data().type === "original") {
            setOriginals((prev) => [...prev, { id: doc.id, ...doc.data() }]);
          }
          if (doc.data().type === "new") {
            setNewDisneys((prev) => [...prev, { id: doc.id, ...doc.data() }]);
          }
          if (doc.data().type === "trending") {
            setTrending((prev) => [...prev, { id: doc.id, ...doc.data() }]);
          }
        });
      }
      getMovies();
    }
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends recommends={recommends} />
      <NewDisney newDisneys={newDisneys} />
      <Originals originals={originals} />
      <Trending trending={trending} />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  background: url("/images/images/home-background.png");
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
