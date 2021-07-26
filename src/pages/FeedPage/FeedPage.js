import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard/PostCard'
import { BigInput, Button, DivForm, DivSendButton, Input, Main } from './styled'
import useForm from '../../hooks/useForm'
import { goToPostDetailsPage } from '../../routes/coordinator'
import { useHistory, } from 'react-router'

const initialForm = {
    text: "",
    title: "",
}

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm(initialForm);
    const [posts, setPosts] = useState([])

    const Vote = (number, id, actualDirection) => {
        const body = {
            direction: number
        }
        axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                let postsVote = [...posts]
                postsVote.forEach((post) => {
                    if (actualDirection === number) {
                        if (post.id === id) {
                            post.userVoteDirection = 0
                            if (number === 1) {
                                post.votesCount -= 1
                            } else if (number === -1)
                                post.votesCount += 1
                        }
                    } else {
                        if (post.id === id) {
                            post.userVoteDirection = number
                            if (number === 1) {
                                post.votesCount += 1
                            } else if (number === -1)
                                post.votesCount -= 1
                        }
                    }
                })
                setPosts(postsVote)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPosts()
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        createPost(form)
        clear();
    };

    const postDetails = (id) => {
        goToPostDetailsPage(history, id)
    }

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setPosts(res.data.posts)
                console.log(res.data)
            })
            .catch((err) => alert(err.response.data.message))
    }

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setPosts([...posts, res])
                getPosts()
            })
            .catch((err) => console.log(err))

    }

    const postList = posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                username={post.username}
                title={post.title}
                text={post.text}
                postDetails={() => postDetails(post.id)}
                like={() => Vote(+1, post.id, post.userVoteDirection)}
                deslike={() => Vote(-1, post.id, post.userVoteDirection)}
                number={post.votesCount}
                comments={post.commentsCount}
            >
            </PostCard>
        )
    })
    return (
        <Main>
            <DivForm onSubmit={handleClick}>
                <Input
                    required
                    placeholder="título do post"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    type="text"
                />
                <Input
                    required
                    placeholder="conteúdo"
                    name="text"
                    value={form.text}
                    onChange={onChange}
                    type="text"
                />
                <DivSendButton>
                    <Button> Criar post </Button>
                </DivSendButton>
            </DivForm>
            <h1>Posts</h1>
            {postList[0] ? postList : <p>Carregando...</p>}
        </Main>
    )
}

export default FeedPage