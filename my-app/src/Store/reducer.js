import { appendChild } from "../Utils/utils";

function embed(state = "", action) {
    switch (action.type) {
        case "SEARCH":
            localStorage.setItem("Wiki_Data", action.input)
            return appendChild(action.input);
        case "LOADING":
            console.log(1)
            return appendChild(action.content);
        default:
            return state;
    }
}

export {
    embed
}


