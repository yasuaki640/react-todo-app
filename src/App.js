import React from "react";
import "./styles.css";

export default function App() {
    return (
        <>
            <div>
                <input placeholder={"input TODO"}/>
                <button>add</button>
            </div>
            <div>
                <p>UNDONE</p>
                <ul>
                    <div>
                        <li>三の倍数だけ</li>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                    <div>
                        <li>三の倍数だけ</li>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                </ul>
            </div>
            <div>
                <p>DONE</p>
                <ul>
                    <div>
                        <li>あほになる</li>
                        <button>return</button>
                    </div>
                    <div>
                        <li>あほになる</li>
                        <button>return</button>
                    </div>
                </ul>
            </div>
        </>
    );
}
