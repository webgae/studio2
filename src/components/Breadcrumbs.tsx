import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  href: string;
  label: ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <Fragment key={item.href}>
            <li>
              {index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground">{item.label}</span>
              )}
            </li>
            {index < items.length - 1 && (
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
