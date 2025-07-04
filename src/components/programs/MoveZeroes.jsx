import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function MoveZeroes() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const moveZeroes = () => {
    let nums = input.split(",").map(Number);
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[pos], nums[i]] = [nums[i], nums[pos]];
        pos++;
      }
    }

    setOutput(nums);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="E.g. 0,1,0,3,12" />
      <button onClick={moveZeroes}>Move Zeroes</button>
      <div>{output.join(", ")}</div>
    </div>
  );
}

export default MoveZeroes;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function moveZeroes(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[pos], arr[i]] = [arr[i], arr[pos]];
      pos++;              // Swap arr[i] (current element) with arr[pos] using array destructuring
    }
  }

  return arr;
}

// Simulate user input
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
`.trim();

export default function MoveZeroes(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
