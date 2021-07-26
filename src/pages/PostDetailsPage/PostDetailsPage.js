import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { DivForm, Main, Input, DivSendButton, Button, DivComment, DivVotes, DivVoteButtons, VoteButton } from './styled'
import CommentCard from '../../components/CommentCard/CommentCard'
import useForm from '../../hooks/useForm'

const initialForm = {
    text: ""
}
const PostDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    const [form, onChange, clear] = useForm(initialForm);
    const [postDetails, setPostDetails] = useState({})
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        getPostDetail()
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        createComment(form)
        clear();
    };

    const getPostDetail = () => {
        axios.get(`${BASE_URL}/posts/${params.id}`, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                const listOfComments = res.data.post.comments.filter((comment) => {
                    return typeof comment.text === "string"
                })
                setPostDetails(res.data.post)
                setPostComments(listOfComments)
            })
            .catch((err) => alert(err.response.data.message))
    }

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
                let postsVote = { ...postDetails }
                postsVote.userVoteDirection = 0
                if (actualDirection === number) {
                    postsVote.userVoteDirection = 0
                    if (number === 1) {
                        postsVote.votesCount -= 1
                    } else if (number === -1)
                        postsVote.votesCount += 1
                } else {
                    postsVote.userVoteDirection = number
                    if (number === 1) {
                        postsVote.votesCount += 1
                    } else if (number === -1)
                        postsVote.votesCount -= 1
                }
                setPostDetails(postsVote)
            })
            .catch((err) => console.log(err))
    }

    const commentVote = (number, id, actualDirection) => {
        const body = {
            direction: number
        }
        axios.put(`${BASE_URL}/posts/${params.id}/comment/${id}/vote`, body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
        .then((res) => {
            let infoComments = [...postDetails.comments]
            infoComments.forEach((comment) => {
                if (actualDirection === number) {
                    if(comment.id === id) {
                        comment.userVoteDirection = 0
                        if (number === 1) {
                            comment.votesCount -=1
                        } else if (number === -1)
                        comment.votesCount +=1
                    }
                } else {
                    if(comment.id === id) {
                        comment.userVoteDirection = number
                        if (number === 1) {
                            comment.votesCount +=1
                        } else if (number === -1)
                        comment.votesCount -=1
                    }
                }
            })
            setPostDetails({...postDetails, comments: infoComments})
        })
        .catch((err) => console.log(err))
    }

    const createComment = () => {
        axios.post(`${BASE_URL}/posts/${params.id}/comment`, form, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
        .then((res) => {
            setPostComments([...postComments, res])
            getPostDetail()
        })
        .catch((err) => console.log(err))
    }

    const commentsList = postComments.map((comment) => {
        return (
            <CommentCard
                key={comment.id}
                username={comment.username}
                text={comment.text}
                like={() => commentVote(+1, comment.id, comment.userVoteDirection)}
                deslike={() => commentVote(-1, comment.id, comment.userVoteDirection)}
                number={comment.votesCount}
            >
            </CommentCard>
        )
    })
    return (
        <Main>
            <DivComment>
                <h3>Título: {postDetails.title}</h3>
                <h4>Usuário: {postDetails.username}</h4>
                <p>{postDetails.text}</p>
                <DivVotes>
                    <DivVoteButtons>
                        <VoteButton onClick={() => Vote(-1, postDetails.id, postDetails.userVoteDirection)}>🔽</VoteButton>
                        <p>{postDetails.votesCount}</p>
                        <VoteButton onClick={() => Vote(+1, postDetails.id, postDetails.userVoteDirection)}>🔼</VoteButton>
                    </DivVoteButtons>
                    <p>{postDetails.commentsCount} comentários</p>
                </DivVotes>
            </DivComment>

            <DivForm onSubmit={handleClick}>
                <Input
                    placeholder="deixe um comentário neste post"
                    type="text"
                    name="text"
                    value={form.text}
                    onChange={onChange}
                />
                <DivSendButton>
                    <Button> enviar comentário </Button>
                </DivSendButton>
            </DivForm>
            <h2>Comentários</h2>
            {commentsList.length === 0 ? <p>Não existem comentários a respeito deste post</p> :
            commentsList}
        </Main>
    )
}

export default PostDetailsPage