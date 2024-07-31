import Child from "./Child";

function App() {
  const getAddress = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child name="Rinku Singh" getAddress={getAddress} />
    </div>
  );
}

export default App;
