import { useContext } from "react";
import IssuesContext from "../context/IssuesContext";

export default function IssuesPane() {
    const issues = useContext(IssuesContext)
    return (

        <div>
            {
                issues.map((issue) => {
                    return (
                        <>
                            <div >
                                <div>
                                    {issue.description}
                                </div>
                                <br />
                                <div>
                                    {issue.line_number.toString()}
                                </div>
                            </div>
                            <br />
                            <br />
                        </>
                    )
                })
            }

        </div>
    )
}