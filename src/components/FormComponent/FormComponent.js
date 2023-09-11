import { Component } from "react";
import Shared from "../Shared/Shared";
import './form-component.css'

export default class FormComponent extends Component {
    render() {
        return (
            <div className="form-component">
                <div className="form-box">
                    <div className="input-box">
                        <span>Name: </span>
                        <div><Shared /></div>
                    </div>
                    <div className="input-box">
                        <span>Date of birth: </span>
                        <div><Shared /></div>
                    </div><div className="input-box">
                        <span>Email: </span>
                        <div><Shared /></div>
                    </div><div className="input-box">
                        <span>Mobile: </span>
                        <div><Shared /></div>
                    </div><div className="input-box">
                        <span>Custom ID: </span>
                        <div><Shared /></div>
                    </div>
                </div>
            </div>
        )
    }
}