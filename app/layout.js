import NavBar from "@/components/NavBar"

export const metadata = {
  title: 'John Santotome',
  description: 'John Santotome Portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
