import foto from "../foto.jpg"

export default function hero(){
    return(
        <div className="text-center">
    <h1 className="text-black-300 font-bold">CV Online</h1>
      <h2 className="text 3x1">Deden Yudha Pranajaya</h2>
      <Profile />
      <p>"Semua Kilauan Itu Bukanlah Emas"</p>
        </div>
    )
}

function Profile() {
    return (
      <img
        src={foto.src}
        alt="Deden Yudha Pranajaya"
        className="fotoku"
      />
    );
  }