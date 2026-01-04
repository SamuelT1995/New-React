const AccordionItem = ({ num, text, title, onOpen, currOpen }) => {
  const isOpen = num === currOpen;

  const handleClick = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
