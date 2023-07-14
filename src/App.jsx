import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [guns, setGuns] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar openModal={openModal} cart={cart} />

      <div className="card-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}> close</button>

        {cart.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </Modal>
    </div>
  );
}

export default App;
