import React from "react";

function PagePanel (props) {

    return (
        <>
            <div class={props.formClass}>
                {props.form}
            </div>
            <div class={props.listClass}>
                {props.list}
            </div>
        </>
    );
}

export default PagePanel;
