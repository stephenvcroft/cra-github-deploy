import { useState } from "react";
function App() {
  const [pushButton, setPushButton] = useState("black");
  const [deployButton, setDeployButton] = useState("black");

  const copyPush = () => {
    let textToCopy = `
git add .
git commit -m "update"
git push`;
    navigator.clipboard.writeText(textToCopy);
    setPushButton("green");
    console.log(textToCopy);
  };

  const copyDeploy = () => {
    let textToCopy = `npm run deploy`;
    navigator.clipboard.writeText(textToCopy);
    setDeployButton("green");
    console.log(textToCopy);
  };

  return (
    <div style={{ fontFamily: "verdana" }}>
      <h2 rows="4">git add .</h2>
      <h2>git commit -m "update"</h2>
      <h2>git push</h2>
      <button
        onClick={copyPush}
        style={{ color: `${pushButton}`, cursor: "pointer" }}
      >
        COPY
      </button>
      <h2>---</h2>
      <br />
      <h2>npm run deploy</h2>
      <button
        onClick={copyDeploy}
        style={{ color: `${deployButton}`, cursor: "pointer" }}
      >
        COPY
      </button>
    </div>
  );
}

export default App;
