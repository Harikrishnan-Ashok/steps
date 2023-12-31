import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps cardTest">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            <StepMessage step={step}>{messages[step - 1]}</StepMessage>
            <div className="buttons">
              <Button
                bgcolor="#00FF5B"
                onClick={() => alert(messages[step - 1])}
              >
                Learn how{" "}
              </Button>
            </div>
          </p>

          <div className="buttons">
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>previous
            </Button>
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handleNext}>
              next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3> Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ textcolor, bgcolor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
