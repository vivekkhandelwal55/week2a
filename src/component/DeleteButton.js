import React from "react";
import Tab from "./Tab";

export default function DeleteButton({ tab, onClick }) {

    function handleDeleteIconClassOnTab() {
        if (tab == Tab.Completed) {
            return "delete-button";
        } else {
            return "delete-button hide";
        }
    }

    return (
        <button className={handleDeleteIconClassOnTab()} onClick={() => onClick()}>
            <span>delete all</span>
        </button>
    )
}