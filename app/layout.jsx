
import "./globals.css";

export const metadata = {
  title: "Beauty Boutique | Cosmetics & Skincare",
  description: "Shop beautiful cosmetics, skincare and beauty essentials in South Africa."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
