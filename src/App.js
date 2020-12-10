import React from "react";
import "./styles.css";

export default function App() {
    return (
        <>
            <div className={"input-area"}>
                <input placeholder={"input TODO"}/>
                <button>add</button>
            </div>
            <div className={"incomplete-area"}>
                <p className={"title"}>UNDONE</p>
                <ul>
                    <div className={"list-row"}>
                        <li>三の倍数だけ</li>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                    <div className={"list-row"}>
                        <li>三の倍数だけ</li>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                </ul>
            </div>
            <div className={"complete-area"}>
                <p className={"title"}>DONE</p>
                <ul>
                    <div className={"list-row"}>
                        <li>あほになる</li>
                        <button>return</button>
                    </div>
                    <div className={"list-row"}>
                        <li>あほになる</li>
                        <button>return</button>
                    </div>
                </ul>
            </div>
        </>
    );
}
