import { useContext } from "react";
import IssuesContext from "../context/IssuesContext";

export default function IssuesPane() {
    const issues = useContext(IssuesContext)
    return (

        <div className="issues-pane">
            {
                issues.map((issue) => {
                    const lineArray = issue.line_number.toString().split(",")
                    const linenum = lineArray[0]
                    const charnum = lineArray[1]
                    return (
                        <>
                            <div className="issue-element">
                                <div>
                                    Issue: {issue.description}
                                </div>
                                <br />
                                <div>
                                    Found in line {linenum}, character {charnum}
                                </div>
                            </div>

                            <div className="issue-separator"></div>

                        </>
                    )
                })
            }

        </div>
    )
}