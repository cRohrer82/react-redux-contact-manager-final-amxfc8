import React from "react";
import ContactsList from '../contact/ContactsList';
import PersonForm from '../form/PersonForm';

function PagePanel (props) {

    return (
        <>
            <div class={props.formClass}>
                <PersonForm />
            </div>
            <div class={props.listClass}>
                <ContactsList />
            </div>
        </>
    );
}

export default PagePanel;
