import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

// Components
import CustomLink from "./components/CustomLink";

const Search = React.lazy(() => import('search'))

function App() {
    return (
        <div className="mt-5">
            <Container className="container-md">
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <CustomLink to="/">Home</CustomLink>
                    </Col>
                    <Col xs lg="2">
                        <CustomLink to="/search">Search</CustomLink>
                    </Col>
                    <Col xs lg="2">
                        <CustomLink to="/products">Products</CustomLink>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 d-flex justify-content-center">
                <Routes>
                    <Route exact path="/"
                           element={<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
                               ut!</h1>}/>
                    <Route path="/search" element={
                            <React.Suspense fallback={<span className="spinner-border-sm"/>}>
                                <Search/>
                            </React.Suspense>
                        }
                    />

                    <Route exact path="/products" element={<h1>products here</h1>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;
