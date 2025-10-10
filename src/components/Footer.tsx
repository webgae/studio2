export default function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} WEBGAE. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with Next.js and the Blogger API.
        </p>
      </div>
    </footer>
  );
}
