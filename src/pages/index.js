import React, { useState } from "react";
import Backdrop from "@/components/Backdrop/Backdrop";
import Undangan from "@/pages/Undangan";

function App() {
  const [undanganTerbuka, setUndanganTerbuka] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Tambahkan state isPlaying di sini

  const handleBukaUndangan = () => {
    setUndanganTerbuka(true);
  };

  const handleTutupUndangan = () => {
    setUndanganTerbuka(false);
  };

  return (
    <div>
      {!undanganTerbuka ? (
        <Backdrop onClick={handleBukaUndangan} />
      ) : (
        <Undangan
          onClose={handleTutupUndangan}
          setIsPlaying={setIsPlaying} // Pass prop setIsPlaying
          isPlaying={isPlaying} // Pass prop isPlaying
        />
      )}
    </div>
  );
}

export default App;
