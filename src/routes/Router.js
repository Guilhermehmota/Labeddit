import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetailsPage from '../pages/PostDetailsPage/PostDetailsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'


const Router = ({ setButtonText}) => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setButtonText={setButtonText}/>
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage setButtonText={setButtonText}/>
            </Route>
            <Route exact path="/">
                <FeedPage />
            </Route>
            <Route exact path="/detalhe/:id">
                <PostDetailsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router