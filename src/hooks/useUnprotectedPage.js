import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import { goToFeedPage } from '../routes/coordinator'

const useUnProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(token){
            goToFeedPage(history)
        }
    }, [history])
}

export default useUnProtectedPage