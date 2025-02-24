import { IconSelector } from "..";
import './LoadAnimation.css'

function LoadAnimation() {
    return (
        <div className="animationContainer">
            <IconSelector type={"tree"} />
            <IconSelector type={"leaf"} />
            <IconSelector type={"leaf2"} />
            <p className="loadText">Cargando...</p>
        </div>
    )
}

export { LoadAnimation }