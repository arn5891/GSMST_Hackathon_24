export default function CodeEditorPane(props: { code: String }) {
    const sample_code = `
    <!DOCTYPE HTML>
    <html>
        <head></head>
        <body>
            <h1>Header</h1>
                <p>Body</p>
        </body>
        <footer>This is a footer</footer>
    </html>
    `

    return (
        <div className="code-editor">
            <code>{sample_code}</code>
        </div>
    )
}