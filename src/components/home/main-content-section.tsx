export const MainContentSection = () => {
  return (
    <div className="w-full max-w-[75rem]">
      <div className="flex flex-col gap-y-8 px-4 md:max-w-[49.375rem] md:px-0">
        <div className="flex flex-col gap-y-4">
          <p className="text-neutral-700n text-center text-sm md:text-left">
            About This Gift card
          </p>

          <div className="from-neutral-200n to-neutral-200n/0 bg-gradient-to-r p-4">
            <p className="text-sm leading-5 text-white md:text-base md:leading-6">
              A Google Play gift card is a prepaid credit that can be used to
              make purchases within the Google Play Store. It allows users to
              add credit to their Google Play balance, which can be used to buy
              apps, games, music, books, and other items available on the
              platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-neutral-700n text-center text-sm md:text-left">
            How to Redeem
          </p>

          <div className="from-neutral-200n to-neutral-200n/0 bg-gradient-to-r p-4">
            <p className="text-sm leading-5 text-white md:text-base md:leading-6">
              1. Open Google Play Store
              <br />
              <br />
              On your Android device, open the Google Play Store app. Make sure
              you’re signed in with the Google account you want to redeem the
              gift card to.
              <br />
              <br />
              <br />
              2. Go to Redeem
              <br />
              <br />
              Tap your profile icon (top right corner) → select “Payments &
              subscriptions” → then tap “Redeem code”.
              <br />
              <br />
              <br />
              3. Enter the Code
              <br />
              <br />
              Type in the 16-digit code from your gift card and tap “Redeem”.
              Confirm your choice, and the balance will be added to your account
              instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
