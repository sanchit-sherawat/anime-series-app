import CodeTile from "./CodeTile";

const Stored = () => {
    const exampleCode = `
    const add = (a, b) => a + b;
    console.log(add(2, 3)); // 5
    `;

    return <>
        <div>
            <CodeTile
                title="Add Function"
                description="This is a simple function to add two numbers."
                codeSnippet={exampleCode}
            />
        </div>
    </>

}
export default Stored;