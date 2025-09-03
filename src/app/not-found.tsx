export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-6 text-gray-500 text-base ">
        Sorry, we couldn’t find this page.
      </p>
    </div>
  );
}
