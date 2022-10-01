import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Contacts({ contacts, currentUser, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelectedUser, setCurrentSelectedUser] = useState(undefined);
    useEffect(() => {
        if (currentUser) {
            setCurrentUserName(currentUser.username);
            setCurrentUserImage(currentUser.AvatarImage);
        }
    }, [currentUser])
    const changeCurrentChat = (index, contact) => {
        setCurrentSelectedUser(index);
        changeChat(contact)
    }
    return (
        <>
            {
                currentUserImage && currentUserName && (
                    <Container>
                        <div className="brand">
                            <img src="https://raw.githubusercontent.com/koolkishan/chat-app-react-nodejs/51e46d4ac8ecff43b9e4c7c581fe3a33711c5fd9/public/src/assets/logo.svg" alt="Logo" />
                            <h3>snappy</h3>
                        </div>
                        <div className="contacts">
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <div className={`contact ${currentSelectedUser === index ? "selected" : ""}`} key={index} onClick={() => changeCurrentChat(index, contact)}>
                                            <div className='avatar'>
                                                <img src={`data:image/svg+xml;base64,${contact.AvatarImage}`} alt="avatar" />
                                            </div>
                                            <div className='username'>
                                                <h3>{contact.username}</h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="current-user">
                            <div className="avatar">
                                <img src={`data:image/svg+xml;base64,${currentUser.AvatarImage}`} alt="avatar" />
                            </div>
                            <div className='username'>
                                <h1>{currentUser.username}</h1>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}
const Container = styled.div`
display:grid;
grid-template-rows: 10% 75% 15%;
overflow:hidden;
background-color:#080420;
.brand{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    img{
        height:2rem;
    }
    h3{
        color:white;
        text-transform:uppercase;
    }
}
.contacts{
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:auto;
    gap:0.8rem;
    &::webkit-scrollbar{
        width:0.2rem;
        &-thumb{
            background-color:#ffffff39;
        }
    }
    .contact{
        width:90%;
        display:flex;
        align-items:center;
        background-color:#ffffff39;
        min-height:5rem;
        cursor:pointer;
        border-radius:0.2rem;
        padding:0.4rem;
        gap:1rem;
        transition: 0.5s ease-in-out;
        .avatar{
            img{
                height:4rem;
                margin:0 20px 0 20px;
            }
        }
        .username{
            h3{
                color:white;
                text-transform:uppercase;
            }
        }
    }
    .selected {
        background-color:#9186f3;
    }
}
.current-user{
    background-color:#0d0d30;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    img{
        height:4rem;
        max-inline-size:100%;
    }
    .username{
        color:white;
        text-transform:uppercase;
    }
}
@media screen and (min-width:720px) and (max-width:1080px){
    gap:0.5rem;
    .username{
        font-size:1rem;
    }
    grid-template-columns:35% 65%;
}
`

export default Contacts