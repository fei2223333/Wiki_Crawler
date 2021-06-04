import React from "react"

function appendChild(data) {
    const wrapper = React.createElement(
        "div",
        {
            className: "wrapper",
            dangerouslySetInnerHTML: { __html: data }
        }
    );
    return wrapper;
}

export {
    appendChild
}