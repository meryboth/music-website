import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out the most amazing stories!</h1>
            <div className="cards__container">
                <ul className='cards__items'>
                    <CardItem
                    src='https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Explore the hidden waterfall deep inside the Amazon Jungle`}
                    label='Community'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    text={`Travel through the Islands of Bali in search of the most amazing underwater city`}
                    label='Inspiration'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    src='https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Explore the hidden waterfall deep inside the Amazon Jungle`}
                    label='Projects'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1536133455524-79533bd5f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Explore the hidden waterfall deep inside the Amazon Jungle`}
                    label='Inspiration'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
                    text={`Explore the hidden waterfall deep inside the Amazon Jungle`}
                    label='Record'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='https://images.unsplash.com/photo-1542397656-5dfd6adec561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                    text={`Explore the hidden waterfall deep inside the Amazon Jungle`}
                    label='Community'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Travel through the Islands of Bali in search of the most amazing underwater city`}
                    label='Live'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
