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
                    text={`The last tunes for the new album are out! Check them out and share with friends`}
                    label='Community'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    text={`Music is the lifeblood of our culture.`}
                    label='Inspiration'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    src='https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Records are the best way to share your music.`}
                    label='Projects'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1536133455524-79533bd5f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Look for inpiration and music in the community.`}
                    label='Inspiration'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
                    text={`The best way to share your music is with others.`}
                    label='Record'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='https://images.unsplash.com/photo-1542397656-5dfd6adec561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                    text={`Explore the music industry and discover new artists. Find yourself a new favorite.`}
                    label='Community'
                    path='/services'
                    />
                    <CardItem
                    src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    text={`Travel with your music and discover new cultures.`}
                    label='Live'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
