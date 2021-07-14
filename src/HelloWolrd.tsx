export default function HelloWorld() {
  const name = "Danie";

  return (
    <div>
      <h1>
        Hello,
        {name === "Danie" ? "danilo" : name} !!!
      </h1>
    </div>
  );
}
