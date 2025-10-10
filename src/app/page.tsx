import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Experto en Desarrollo WordPress
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Construyo, optimizo y mantengo sitios web de alto rendimiento con WordPress para llevar tu presencia online al siguiente nivel.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/services">Ver Servicios</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9YpLcwtYwG-cyJpzcZFHHpNTcN3qaws-aPRXcsmtcBgP41wnzHq-QFX_MLUDDu7JY7v5YN3ELyaX1g_T4SKLCXnQXPnAp80G2OAJJ_zVg4FQTd_Kjlss8ZUdgrLxX5qLUl67W0eGMTAY1YHRgfgncKtkDf2T2-5pTCSQzgr7M3Y6wR4UpE_NNrXga8SCX/s16000-rw/EXPERTO_WP.png"
                alt="Experto WordPress"
                width={2432}
                height={1442}
                className="w-full rounded-md shadow-2xl ring-1 ring-foreground/10"
              />
            </div>
          </div>
        </div>
      </div>
       <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
