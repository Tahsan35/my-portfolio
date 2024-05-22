import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
//import Footer from "@/components/Footer";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import clsx from "clsx";

//const inter = Inter({ subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata = {
//   title: {
//     template:
//       "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | CodeBucks",
//     default:
//       "Next.js Portfolio Created with Three.js and Tailwind CSS by CodeBucks",
//   },
//   description:
//     "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <Header></Header>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
