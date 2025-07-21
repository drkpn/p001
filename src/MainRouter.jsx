import React, { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

class MainRouter extends Component {
    render() {
        return (
            <HashRouter basename='/p001'>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/app" element={<App />} />
                    <Route path="/myapp" element={<Myapp />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default MainRouter;
