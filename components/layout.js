import Navbar from "./navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
});

export default function Layout({ children }) {
  return (
    <div className={poppins.className + " font-light"}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
