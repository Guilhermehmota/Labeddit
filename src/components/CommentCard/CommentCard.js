import React from 'react'
import { DivComment, DivComments, DivUser, VoteButton, DivButtons, NumberComments, Button } from './styled'

const CommentCard = (props) => {
    return (

        <DivComments>
            <DivUser>
                <h3>{props.username}</h3>
            </DivUser>
            <DivComment>
                <p>{props.text}</p>
            </DivComment>
            <DivButtons>
            <VoteButton>
                    <Button onClick={props.deslike}>🔽</Button>
                    <p>{props.number}</p>
                    <Button onClick={props.like}>🔼</Button>
            </VoteButton>
            </DivButtons>
        </DivComments>
    )
}

export default CommentCard