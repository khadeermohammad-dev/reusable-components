import { useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Badge from "../components/Badge";
import Alert from "../components/Alert";
import Modal from "../components/Modal";

import "../App.css";

function ComponentDemo() {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="demo-page">
      <h1>Reusable Component Library</h1>
      <p className="subtitle">
        A simple React component library built using props and composition.
      </p>

      <section className="section">
        <h2>Buttons</h2>
        <div className="row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="section">
        <h2>Cards</h2>
        <Card
          title="React Card"
          image="https://images.pexels.com/photos/27364222/pexels-photo-27364222.jpeg"
          footer="Reusable card footer"
        >
          This card component accepts title, children, and footer using props.
        </Card>
      </section>

      <section className="section">
        <h2>Input</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!email ? "Email is required" : ""}
        />
      </section>

      <section className="section">
        <h2>Badges</h2>
        <div className="row">
          <Badge text="New" color="blue" />
          <Badge text="Success" color="green" />
          <Badge text="Error" color="red" />
        </div>
      </section>

      <section className="section">
        <h2>Alert</h2>
        {showAlert && (
          <Alert
            type="success"
            message="Component library loaded successfully."
            onClose={() => setShowAlert(false)}
          />
        )}
      </section>

      <section className="section">
        <h2>Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

        <Modal
          isOpen={isModalOpen}
          title="Confirmation"
          onClose={() => setIsModalOpen(false)}
        >
          This is a reusable modal component.
        </Modal>
      </section>
    </main>
  );
}

export default ComponentDemo;
