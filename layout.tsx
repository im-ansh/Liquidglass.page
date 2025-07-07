export const metadata = {
  title: 'LiquidGlass UI',
  description: 'Apple-style glass UI component library with 3D support',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">{children}</body>
    </html>
  );
}