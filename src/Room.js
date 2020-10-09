import React, { useState } from "react";
import Jitsi from "react-jitsi";

export default function App() {
    const roomName = "sherlock-123e4567-e89b-12d3-a456-426655440000";
    const userFullName = "SherlockHolmes";
    return (
        <>
            <Jitsi
                frameStyle={{ display: 'block', width: '100%', height: '100%' }}
                containerStyle={{ width: "1200px", height: "800px" }}
                domain="meet.jit.si"
                roomName={roomName}
                displayName={userFullName}
            />
        </>
    );
}
