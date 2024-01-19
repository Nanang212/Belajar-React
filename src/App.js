import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Thank Yourself!"])

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine, {
      particles: {
        number: {
          value: 5, // Sesuaikan jumlah partikel sesuai kebutuhan
        },
        move: {
          duration: 500, // Sesuaikan durasi animasi sesuai kebutuhan (dalam milidetik)
        },
      },
      // Opsi optimasi atau pengaturan tambahan lainnya
      responsive: [
        {
          breakpoint: 768,
          options: {
            particles: {
              number: {
                value: 30, // Sesuaikan jumlah partikel untuk layar kecil
              },
            },
          },
        },
        // Tambahkan breakpoint lainnya jika diperlukan
      ],
    });
  };

  const timeLeft = () => {
    const newYearDate = new Date("January 20, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() =>
              setNewYearMessage([
                "Selamat Ulang Tahun Liyaaa, Welcome to 22 tahun ✨😋",
              ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
