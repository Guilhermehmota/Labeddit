import React from 'react'
import { Button, DivButtons, DivPosts, DivText, DivTitle, VoteButton, DivVoteButton} from './styled'

const PostCard = (props) => {
    return (
        <DivPosts>
            <DivTitle>
                <h3>{props.title}</h3>
                <p>{props.username}</p>
            </DivTitle>
            <DivText>
            <p>{props.text}</p>
            </DivText>
            <DivButtons>
                <DivVoteButton>
                    <VoteButton onClick={props.deslike}>🔽</VoteButton>
                    <p>{props.number}</p>
                    <VoteButton onClick={props.like}>🔼</VoteButton>
                </DivVoteButton>
                <p>{props.comments} comentários</p>
                <Button onClick={props.postDetails}>Ver comentários</Button>
            </DivButtons>
        </DivPosts>
    )
}

export default PostCard