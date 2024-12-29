import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogList from './BlogListView/BlogList';
import BlogPost from './BlogPostView/BlogPost';
import {Container} from '@mui/material';
import CustomNavbar from "./components/CustomNavbar";
import "./App.css"
import CustomFooter from "./components/CustomFooter";
import ErrorPage from "./components/ErrorPage";
import ProfilePage from "./components/ProfilePage";
// import LecturePage from "./Lectures/LecturePage";

const LectureFilter = (post) => post.id >= 1000 && post.id < 3000;
const BaekjoonFilter = (post) => post.id >= 3000 && post.id < 5000;
const USACOFilter = (post) => post.id >= 5000 && post.id < 10000;


function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Router>
                <CustomNavbar/>

                <Container style={{flex: '1', paddingTop: '70px'}}>

                    <Routes>
                        <Route path="/" element={<BlogList/>}/>
                        <Route path="/about" element={<ProfilePage/>}/>
                        {/*<Route path="/lecture" element={<LecturePage/>}/>*/}
                        <Route
                            path="/lecture"
                            element={<BlogList defaultFilterFn={LectureFilter} />}
                        />
                        <Route
                            path="/baekjoon"
                            element={<BlogList defaultFilterFn={BaekjoonFilter} />}
                        />
                        <Route
                            path="/usaco"
                            element={<BlogList defaultFilterFn={USACOFilter} />}
                        />
                        <Route path="/post/:slug" element={<BlogPost/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </Container>

                <CustomFooter/>
            </Router>
        </div>
    );
}

export default App;
