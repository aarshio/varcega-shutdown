// pages/index.tsx  (Next.js 13+/app router users: place in app/page.tsx)

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Varcega — Service Discontinued</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-red-600">
            Service Discontinued
          </h1>

          <p className="mb-3 text-gray-700">Hello Varcega community,</p>

          <p className="mb-3 text-gray-700">
            I’ve permanently shut down the site after realizing that my public display of
            market&nbsp;data violated vendor licensing agreements. Keeping Varcega online,
            even as a free tool would risk further non-compliance, so this is the only
            responsible path forward.
          </p>

          <p className="mb-3 text-gray-700">
            All user data and account records have been&nbsp;
            <strong>securely deleted</strong>. No personal information has been retained or
            shared with anyone.
          </p>

          <p className="mb-3 text-gray-700">
            I’m genuinely sorry for the disruption and grateful for the feedback and
            encouragement you’ve given me over the past months.
          </p>

          <p className="mb-3 text-gray-700">
            If you have any questions, please reach me at&nbsp;
            <a
              href="mailto:support@varcega.com"
              className="font-medium text-blue-600 underline hover:text-blue-700"
            >
              support@varcega.com
            </a>.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            — Aarsh, creator of Varcega
          </p>
        </div>
      </main>
    </>
  );
}