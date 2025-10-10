import Link from 'next/link';
import { BookMarked } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <BookMarked className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-foreground hidden sm:block">
              BloggerNext
            </h1>
          </Link>
          <div className="w-full max-w-sm ml-auto">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
