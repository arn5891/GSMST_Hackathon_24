import CodeEditorPane from "../components/CodeEditorPane";
import IssuesPane from "../components/IssuesPane";

import { useState, useEffect } from "react";
import IssuesContext from "../context/IssuesContext";

import './fixpage.css'
import { Issue } from "../types/Issue";

export default function AccessibilityFixPage() {

    const [issues, setIssues] = useState<Issue[]>([])
    const [code, setCode] = useState<String>("")

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const url = urlParams.get('url');
        console.log(url)

        fetch("http://localhost:5000/api/query", {
            method: "POST",
            body: JSON.stringify({ url: url }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setIssues(data["issues"])
                setCode(data["code"])
            })
            .catch((err) => console.log("An error occured: ", err))
    }, [])

    return (
        <div className="fix-issues-page">
            <CodeEditorPane code={code} ></CodeEditorPane>
            <span className="separator"></span>
            <IssuesContext.Provider value={issues}>
                <IssuesPane></IssuesPane>
            </IssuesContext.Provider>
        </div>
    )
}