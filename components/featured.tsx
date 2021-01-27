export default function Featured() {
  return (
    <section className="py-8 bg-indigo-700 overflow-hidden md:py-12 lg:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-3xl leading-9 font-medium text-white">
              <p>
                &ldquo;Si pudiera retroceder el tiempo no me dejaría llevar por el diseño del edificio, y elegiría no
                hacer la inversión con Surmonte. Sus jefaturas simplemente no responden y el supervisor de postventa
                derechamente engaña.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-200">Judith</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-100" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z"/>
                  </svg>
                  <div className="text-base font-medium text-gray-300">Piso 7</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
