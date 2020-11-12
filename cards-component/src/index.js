import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ProfileCard from './ProfileCard';
const App = () => {
    return (
        <div className="ui three column centered grid container ">
            <div className="column">
                <div className="ui segement">
                    <ProfileCard name="Farhan" join="2013" job="student" friends="21" photo={faker.image.avatar()} />
                </div>
            </div>
            <div className="column">
                <div className="ui segement">
                    <ProfileCard name="Farhan" join="2013" job="student" friends="21" photo={faker.image.avatar()} />
                </div>
            </div>
            <div className="column">
                <div className="ui segement">
                    <ProfileCard name="Farhan" join="2013" job="student" friends="21" photo={faker.image.avatar()} />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));