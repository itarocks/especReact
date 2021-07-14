export default function HelloWorld() {
  const name = "Daniela";

  return (
    <div>
      <h1>
        Hello,
        {name === "Daniela" ? "danilo" : name} !!!
      </h1>
    </div>
  );
}
