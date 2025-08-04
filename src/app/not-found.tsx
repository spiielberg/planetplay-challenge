const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col gap-y-4 p-4 md:gap-y-8">
        <h1 className="font-rubik text-center text-4xl font-extrabold">
          Page Not Found
        </h1>

        <p className="text-neutral-600n text-center">
          The page you are looking for does not exist or has been removed.
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage
