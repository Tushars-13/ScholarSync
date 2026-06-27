function PrimaryButton({ text, onClick }) {
  return (
    <button
      className="edit-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;