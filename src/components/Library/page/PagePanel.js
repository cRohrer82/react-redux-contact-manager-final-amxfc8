import React from "react";
import { ContactsList } from '../contact';
import { AddForm } from '../form/Add';

export const PagePanel = (props) => {

    return (
        <>
            <div
                class={props.formClass}
            >

                <AddForm />

            </div>
            <div
                class={props.listClass}
            >

                <ContactsList />
                
            </div>
        </>
    );
}

export default PagePanel;
