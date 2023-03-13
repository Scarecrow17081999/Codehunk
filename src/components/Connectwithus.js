export default function Connectwithus() {
  return (
    <div>
      <div className="Connectwithus">
        <form>
          <label>Your Name</label>
          <input type={"text"} required />
          <label>Your email</label>
          <input type={"text"} required />
          <label>Subject</label>
          <input type={"text"} required />
          <label>Your message (optional)</label>
          <textarea />
          <input type={"file"} required />
          <input type={"submit"} />
        </form>
      </div>
    </div>
  );
}
