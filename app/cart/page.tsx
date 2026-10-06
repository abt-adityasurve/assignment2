import Link from "next/link";

export default function Cart() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Your cart
      </h1>

      <section className="mt-8 flex flex-1 flex-col items-center justify-center rounded-xl border border-grey-200 px-6 py-16 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-grey-900">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Your cart is empty
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          visit the products fisrt and the add to cart
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Continue shopping
        </Link>
      </section>
    </main>
  );
}
