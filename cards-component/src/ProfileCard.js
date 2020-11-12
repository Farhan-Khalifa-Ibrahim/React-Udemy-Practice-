import React from 'react';

const ProfileCard = (props) => {
    return (
        <div class="ui card" style={{ width: "200px" }}>
            <div class="image">
                <img src={props.photo} />
            </div>
            <div class="content">
                <a class="header">{props.name}</a>
                <div class="meta">
                    <span class="date">Joined in {props.join}</span>
                </div>
                <div class="description">
                    {props.job}
                </div>
            </div>
            <div class="extra content">
                <a>
                    <i class="user icon"></i>
                    {props.friends} Friends
                </a>
            </div>
        </div>
    )
}

export default ProfileCard;