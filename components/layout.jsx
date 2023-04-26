import Navbar from "./navbar";
import { Poppins } from "next/font/google";
import Contact from "./contact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
});

export default function Layout({ children }) {
  return (
    <div className={poppins.className + " font-light"}>
      <Navbar />
      <main>
        {children}
        <Contact />
      </main>
    </div>
  );
}
