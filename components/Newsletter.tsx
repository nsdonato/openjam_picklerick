'use client';
import { Button } from '@/components/Button';

export function Newsletter() {
  const handleSubmit = (e: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    alert(data.email);
  };

  return (
    <section className="" id="newsletter" aria-label="Newsletter">
      <div className="relative -mx-4 h-screen w-full grid justify-center items-center content-center overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
          <div>
            <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
              Mantente al día
            </p>
            <p className="mt-4 text-lg tracking-tight text-blue-900">
              Manténgase al día de todas las conferencias y sea el primero en
              enterarte cuando salgan a la venta las entradas.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-semibold tracking-tight text-blue-900">
              Suscríbase a nuestro boletín{' '}
              <span aria-hidden="true">&darr;</span>
            </h3>
            <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <Button type="submit">
                <span className="sr-only sm:not-sr-only">Inscríbete hoy</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
