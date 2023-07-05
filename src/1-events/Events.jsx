const Events = () => {
  return (
    <div>
      <button onClick={handleClick}> Click </button>
      <button onClick={() => alert("Deneme")}>Save</button>
    </div>
  );
  const handleClick = () => {
    alert("Hi");
    console.log(e);
    console.log(e.target);
  };
  const handleChange = () => {
    message = "STATE";
    console.log(message);
  };
};

export default Events;
