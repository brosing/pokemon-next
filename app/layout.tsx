import Provider from "./provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
