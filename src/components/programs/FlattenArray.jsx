import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function FlattenArray() {
  const [input, setInput] = useState("[1,[2,[3,4],5],6]");
  const [output, setOutput] = useState([]);

  const flatten = arr => arr.reduce(
    (acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);

  const handle = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(flatten(parsed));
    } catch {
      setOutput(["Invalid array"]);
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handle}>Flatten</button>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
}

export default FlattenArray;
`.trim();

// Default JavaScript code
const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

// With built in method
const arr = [1, [2, [3, [4, 5]]]];
const flattened = arr.flat(Infinity); // Infinity for deeply nested arrays
console.log(flattened); // Output: [1, 2, 3, 4, 5]


//Manual flattening using reduce
function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]


// Manual flattening using recursion
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i])); // recursive call
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(flatten([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]

`.trim();

export default function FlattenArray(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}