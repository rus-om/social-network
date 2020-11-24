import React from "react";

export function LoadingSpinner() {
    return <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
    </div>;
}