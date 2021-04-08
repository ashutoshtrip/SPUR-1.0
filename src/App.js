import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import firebase from "firebase/app";
import "firebase/firestore";
import CardCollection from "./components/Card/CardCollection";
import Sidebar from "./components/Drawer/Sidebar";
import "./App.css";
import StoryShare from "./components/Share/Share.js";
import ShareHeader from "./components/Share/ShareHeader";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import CardCollectionEng from "./components/Card/CardCollectionEng";
import CardCollectionExam from "./components/Card/CardCollectionExam";
import CardCollectionMed from "./components/Card/CardCollectionMed";
import CardCollectionGov from "./components/Card/CardCollectionGov";
import About from "./components/Drawer/About"
import UnderCon from "./components/Dummy/UnderCon";
import "./components/Card/Modal/ModalCard.css";
import "./components/Card/card.css";
import "./components/Card/card2.css";
import "./components/Card/CardCollection.css";

import "./components/Drawer/About.css";
import "./components/Drawer/Feedback.css";
import "./components/Drawer/Sidebar.css";
import "./components/Dummy/UnderCon.css";
import "./components/Footer/Footer.css";
import "./components/Header/Header.css";
import "./components/navbar/navbar.css";
import "./components/Share/Share.css";
import "./components/Share/ShareForm.css";
import "./components/Share/ShareHeader.css";









class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: [],
      topStoriesGovt: [],
      topStoriesEng: [],
      topStoriesExam: [],
      topStoriesMed:[],

      
      storiesEngCse: [],
      storiesEngEce: [],

      storiesGovt:[],
      storiesStateGovt: [],
      storiesCentralGovt: [],

      storiesMed: [],
      storiesDoctor: [],
      storiesMedScience: [],

      storiesExamUpsc: [],
      storiesExamNEET: [],
      storiesExamJEE: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("topStories")
      .onSnapshot((snapshot) => {
        const topStories = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });
        this.setState({
          topStories: topStories,
        });
      });
    firebase
      .firestore()
      .collection("topStoriesEng")
      .onSnapshot((snapshot) => {
        const topStoriesEng = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });
        this.setState({
          topStoriesEng: topStoriesEng,
        });
      });
    firebase
      .firestore()
      .collection("topStoriesGovt")
      .onSnapshot((snapshot) => {
        const topStoriesGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });
        this.setState({
          topStoriesGovt: topStoriesGovt,
        });
      });
    firebase
      .firestore()
      .collection("topStoriesExam")
      .onSnapshot((snapshot) => {
        const topStoriesExam = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          topStoriesExam:topStoriesExam,
        });
      });
    firebase
      .firestore()
      .collection("topStoriesMed")
      .onSnapshot((snapshot) => {
        const topStoriesMed = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          topStoriesMed: topStoriesMed,
        });
      });
    
    firebase
      .firestore()
      .collection("storiesEngCse")
      .onSnapshot((snapshot) => {
        const storiesEngCse = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesEngCse: storiesEngCse,
        });
      });
    firebase
      .firestore()
      .collection("storiesEngEce")
      .onSnapshot((snapshot) => {
        const storiesEngEce = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesEngEce: storiesEngEce,
        });
      });

     firebase
       .firestore()
       .collection("storiesGovt")
       .onSnapshot((snapshot) => {
         const storiesGovt = snapshot.docs.map((story) => {
           const data = story.data();
           data["id"] = story.id;
           return data;
         });

         this.setState({
           storiesGovt: storiesGovt,
         });
       });
   
    firebase
      .firestore()
      .collection("storiesStateGovt")
      .onSnapshot((snapshot) => {
        const storiesStateGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesStateGovt: storiesStateGovt,
        });
      });
    firebase
      .firestore()
      .collection("storiesCentralGovt")
      .onSnapshot((snapshot) => {
        const storiesCentralGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesCentralGovt: storiesCentralGovt,
        });
      });
    firebase
      .firestore()
      .collection("storiesMed")
      .onSnapshot((snapshot) => {
        const storiesMed = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesMed: storiesMed,
        });
      });
    firebase
      .firestore()
      .collection("storiesDoctor")
      .onSnapshot((snapshot) => {
        const storiesDoctor = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesDoctor: storiesDoctor,
        });
      });
    
    firebase
      .firestore()
      .collection("storiesMedScience")
      .onSnapshot((snapshot) => {
        const storiesMedScience = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesMedScience: storiesMedScience,
        });
      });
    firebase
      .firestore()
      .collection("storiesExamUpsc")
      .onSnapshot((snapshot) => {
        const storiesExamUpsc = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesExamUpsc: storiesExamUpsc,
        });
      });
    firebase
      .firestore()
      .collection("storiesExamNEET")
      .onSnapshot((snapshot) => {
        const storiesExamNEET = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesExamNEET: storiesExamNEET,
        });
      });
    firebase
      .firestore()
      .collection("storiesExamJEE")
      .onSnapshot((snapshot) => {
        const storiesExamJEE = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesExamJEE: storiesExamJEE,
        });
      });
  }

  render() {
    const { topStories } = this.state;
    const { topStoriesGovt } = this.state;
    const { topStoriesExam } = this.state;
    const { topStoriesEng } = this.state;
    const { topStoriesMed } = this.state;


    
    const { storiesEngCse } = this.state;
    const { storiesEngEce } = this.state;

     const { storiesGovt } = this.state;
    const { storiesStateGovt } = this.state;
    const { storiesCentralGovt } = this.state;

    const { storiesDoctor } = this.state;
    const { storiesMedScience } = this.state;

    const { storiesExamUpsc } = this.state;
    const { storiesExamNEET } = this.state;
    const { storiesExamJEE } = this.state;


    


   

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/eng">
              <Sidebar />
              <CardCollectionEng
                topStoriesEng={topStoriesEng}
                storiesEngCse={storiesEngCse}
                storiesEngEce={storiesEngEce}
              />
              <Footer />
            </Route>

            <Route path="/exam">
              <Sidebar />
              <CardCollectionExam
                topStoriesExam={topStoriesExam}
                storiesExamNEET={storiesExamNEET}
                storiesExamUpsc={storiesExamUpsc}
                storiesExamJEE={storiesExamJEE}
              />
              <Footer />
            </Route>

            <Route path="/med">
              <Sidebar />
              <CardCollectionMed
                topStoriesMed={topStoriesMed}
                storiesDoctor={storiesDoctor}
                storiesMedScience={storiesMedScience}
              />
              <Footer />
            </Route>

            <Route path="/gov">
              <Sidebar />
              <CardCollectionGov
                storiesGovt={storiesGovt}
                storiesStateGovt={storiesStateGovt}
                storiesCentralGovt={storiesCentralGovt}
              />
              <Footer />
            </Route>
            <Route path="/about">
              <Sidebar />
              <About />
              <Footer />
            </Route>
            <Route path="/dummy">
              <Sidebar />
              <UnderCon />
              <Footer />

            </Route>

            <Route path="/">
              <Sidebar />
              <Header />
              <CardCollection
                topStories={topStories}
                topStoriesEng={topStoriesEng}
                topStoriesExam={topStoriesExam}
                topStoriesGovt={topStoriesGovt}
                topStoriesMed={topStoriesMed}
              />
              <ShareHeader />
              <StoryShare />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;