import Chat from "../../components/Chat/Chat";
import ListForProfile from "../../components/ListForProfile/ListForProfile";
import "./Profile.scss";

export default function Profile() {
    return (
        <div className="profile">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar:
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Profile Picture" />
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>E-mail: <b>jdoe@gmail.com</b></span>

                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <ListForProfile />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <ListForProfile />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}