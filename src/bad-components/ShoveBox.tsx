import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface BoxProps {
    position: number;
    setPosition: (position: number) => void;
}

function ShoveBoxButton({ position, setPosition }: BoxProps) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ position }: BoxProps): JSX.Element {
    //const [position, setPosition] = useState<number>(10);
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <MoveableBox
                position={position}
                setPosition={setPosition}
            ></MoveableBox>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
            </div>
        </div>
    );
}
