import React from 'react'
import { connect } from 'react-redux';
import { search } from '../Store/action.js';
import { appendChild } from "../Utils/utils";
import Window from "./Window"

function Container(props) {
    const initialValue = " ";
    const [inputValue, setInputValue] = React.useState(initialValue);
    const { search, data } = props;

    return (
        <div>
            <input
                type="text"
                defaultValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            >
            </input>
            <button onClick={() => {
                console.log(inputValue)
                search(inputValue)
            }
            }>Search</button>
            <Window data={inputValue == initialValue ? appendChild(localStorage["Wiki_Data"]) : data} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (value) => dispatch(search(value)),
    }
}


const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);