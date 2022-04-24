import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

// Components
import CustomLink from "./components/CustomLink";

import Home from './components/Home'

// Modules
const Search = React.lazy(() => import('search/search'))
const Products = React.lazy(() => import('products/products'))

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
                    <Route exact path="/" element={<Home/>} />

                    <Route exact path="/search" element={
                        <React.Suspense fallback={<span className="spinner-border-sm"/>}>
                            <Search/>
                        </React.Suspense>
                    }
                    />

                    <Route exact path="/products" element={
                        <React.Suspense fallback={<span className="spinner-border-sm"/>}>
                            <Products/>
                        </React.Suspense>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;
