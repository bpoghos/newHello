import { Component } from "react";
import { FaAdn, FaArrowRight } from 'react-icons/fa6'
import './avatar-component.css'

export default class AvatarComponent extends Component {
    render() {
        return (
            <div className="avatar-component">
                <div className="avatar-image-component">
                    <div className="avatar-image"><FaAdn /></div>
                </div>
                <div className="avatar-component-text">
                    <h1>Let's get you set up</h1>
                    <span>djn  bdjkd dsad sad hbdkas dsba <br></br>jddd asdfsdf fdsfdsf fdfs</span>
                </div>
                <div className="avatar-button-component">
                    <button><FaArrowRight/></button>
                </div>
            </div>
        )
    }
}