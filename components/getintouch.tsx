export default function GetInTouch() {
  return (
    <div className="bg-gray-700">
      <div
        className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">¿Eres un desafortunado cliente de Surmonte?</span>
          <span className="block bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Toma contacto con nosotros</span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a href="#"
             className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            ¿Qué implica?
          </a>
          <a href="#"
             className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100">
            Contactar :)
          </a>
        </div>
      </div>
    </div>
  );
}
