import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function FindIndex() {
  const [input, setInput] = useState("[1,2,3,4,5]");
  const [target, setTarget] = useState("");
  const [index, setIndex] = useState(null);

  const find = () => {
    try {
      const arr = JSON.parse(input);
      setIndex(arr.indexOf(Number(target)));
    } catch {
      setIndex("Invalid array");
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Array" />
      <br /> <br />
      <input value={target} onChange={e => setTarget(e.target.value)} placeholder="Element" />
      <button onClick={find}>Find Index</button>
      <div>{index}</div>
    </div>
  );
}

export default FindIndex;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // not found
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const target = 30;
const index = findIndex(numbers, target);
console.log("Index of " + target + " is: " + index); // Output: 2
`.trim();

export default function FindIndex(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}