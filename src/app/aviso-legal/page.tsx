import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso Legal de WEBGAE. Información sobre el propietario, la propiedad intelectual y las condiciones de uso del sitio web.',
  alternates: {
    canonical: '/aviso-legal',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Aviso Legal</h1>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline">
        
        <h2>1. Datos Identificativos</h2>
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: el titular de dominio web es WEBGAE (en adelante WEBGAE), con correo electrónico de contacto: <a href="mailto:ximosa@gmail.com">ximosa@gmail.com</a>.
        </p>

        <h2>2. Usuarios</h2>
        <p>
          El acceso y/o uso de este portal de WEBGAE atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
        </p>

        <h2>3. Uso del Portal</h2>
        <p>
          www.webgae.com proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a WEBGAE o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
        </p>
        <p>
          En dicho registro el USUARIO será responsable de aportar información veraz y lícita. Como consecuencia de este registro, al USUARIO se le puede proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente y confidencial de la misma.
        </p>

        <h2>4. Propiedad Intelectual e Industrial</h2>
        <p>
          WEBGAE por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de WEBGAE o bien de sus licenciantes.
        </p>
        <p>
          Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de WEBGAE.
        </p>

        <h2>5. Exclusión de Garantías y Responsabilidad</h2>
        <p>
          WEBGAE no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
        </p>

        <h2>6. Modificaciones</h2>
        <p>
          WEBGAE se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
        </p>

        <h2>7. Legislación Aplicable y Jurisdicción</h2>
        <p>
          La relación entre WEBGAE y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad correspondiente.
        </p>
      </div>
    </section>
  );
}
