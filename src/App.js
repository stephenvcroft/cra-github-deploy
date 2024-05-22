function App() {
  const pushToGithub = () => {
    let textToCopy = `
git add .
git commit -m "update"
git push`;
    navigator.clipboard.writeText(textToCopy);
    console.log(textToCopy);
  };

  const deployToGithub = () => {
    let textToCopy = `npm run deploy`;
    navigator.clipboard.writeText(textToCopy);
    console.log(textToCopy);
  };

  const pushToFirebase = () => {
    let textToCopy = `
git status
git add .
git commit -m "Commit to next branch"
git push -u origin next`;
    navigator.clipboard.writeText(textToCopy);
    console.log(textToCopy);
  };

  return (
    <div style={{ fontFamily: "verdana" }}>
      <div style={{ float: "left", width: "50%", height: "100%" }}>
        <h3>git add .</h3>
        <h3>git commit -m "update"</h3>
        <h3>git push</h3>
        <button onClick={pushToGithub} style={{ cursor: "pointer" }}>
          COPY
        </button>
        <h4>-- then --</h4>
        <h3>npm run deploy</h3>
        <button onClick={deployToGithub} style={{ cursor: "pointer" }}>
          COPY
        </button>
      </div>
      <div style={{ float: "left", width: "50%", height: "100%" }}>
        <h3>git status</h3>
        <h3>git add .</h3>
        <h3>git commit -m "Commit to next branch"</h3>
        <h3>git push -u origin next</h3>
        <button onClick={pushToFirebase} style={{ cursor: "pointer" }}>
          COPY
        </button>
        <h4>-- then --</h4>
        <h3>click Pull requests</h3>
        <h3>Set main - next</h3>
        <h3>click Create pull request</h3>
        <h3>click Create pull request</h3>
        <h3>Takes time (click Details)</h3>
        <h3>click Merge pull request</h3>
        <h3>click Confirm merge</h3>
        <h3>Delete next branch</h3>
      </div>
    </div>
  );
}

export default App;
