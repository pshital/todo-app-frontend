import React, { Component } from 'react';


class DisplayTask extends Component {
    render() {
        return (
            <div class="taskcontainer">
                <div class="row">

                    <li className="item">
                        <label> pay bill</label>
                        <button>Done</button>
                        <button>Delete</button>
                    </li>

                </div>
            </div>

        );
    }
}


export default DisplayTask;