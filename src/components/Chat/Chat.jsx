import { useState } from "react";
import "./Chat.scss";

export default function Chat() {
    const [isChatOpen, setIsChatOpen] = useState(true);

    function handleChatClick() {
        setIsChatOpen((open) => !open);
    }

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                    <span>John Doe</span>
                    <p>Latest message...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                    <span>John Doe</span>
                    <p>Message before latest one...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                    <span>John Doe</span>
                    <p>Even before message...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                    <span>John Doe</span>
                    <p>The oldest message I have...</p>
                </div>
            </div>
            {isChatOpen &&
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                            John Doe
                        </div>
                        <span className="close" onClick={handleChatClick}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p>This is not just some random message ...</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>This is not just some other random message ...</p>
                            <span>2 hours ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>This is not just some other random message ...</p>
                            <span>3 hours ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>This is not just some super random message ...</p>
                            <span>4 hours ago</span>
                        </div>
                    </div>
                    <div className="buttom">
                        <textarea name="" id=""></textarea>
                        <button>Send</button>
                    </div>
                </div>
            }

        </div>
    )
}