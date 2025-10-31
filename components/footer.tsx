export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-4">Crafted with passion and creativity</p>
        <p className="text-sm text-muted-foreground">© {currentYear} Sarveshwar S. All rights reserved.</p>
      </div>
    </footer>
  )
}
