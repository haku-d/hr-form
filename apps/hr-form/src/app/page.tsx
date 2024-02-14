/* eslint-disable @next/next/no-img-element */
import {
  ArrowRightIcon,
  CheckIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

export default async function Index() {
  return (
    <div className="relative text-gray-700">
      <header className="container mx-auto px-8 py-4">
        <div>
          <img className="h-10" src="/img/logo.png" alt="Logo" />
        </div>
      </header>
      <main className="container mx-auto px-8">
        <div className="flex flex-col -mt-20 h-screen items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl">
              Interested in applying to join the X team?
            </h1>
            <h1 className="text-2xl">Let&apos;s get started.</h1>
            <div className="flex flex-col justify-center">
              <div className="relative">
                <Button>Start</Button>
                <span className="absolute px-4 py-2 text-sm">
                  press <b>Enter ↵</b>
                </span>
              </div>
              <p className="mt-2 text-base">Take 4 minutes</p>
            </div>
          </div>
        </div>
      </main>
      <section id="q1" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative">
            <h1 className="relative flex items-center text-2xl">
              <span className="block h-6 w-6 mr-2" aria-hidden="true">
                <ArrowRightIcon />
              </span>
              In what country do you reside?
            </h1>
          </div>
          <div className="pl-8 mt-4">
            {/* Radio group */}
            <div className="flex flex-col space-y-2 max-w-md">
              {/* Radio item */}
              <div className="group is-selected rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>Canada</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
              <div className="rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>US</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
              <div className="rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>Others</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
      <section id="q2" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative pl-8">
            <span
              className="absolute -left-2 top-1 h-6 w-6 mr-2"
              aria-hidden="true"
            >
              <ArrowRightIcon />
            </span>
            <h1 className="relative flex items-center text-2xl">
              Do you already have the legal right to work in Canada or the US?
            </h1>
            <h4 className="text-lg">
              (e.g. you have citizenship, a green card, a work permit, etc.)
            </h4>
          </div>
          <div className="pl-8 mt-4">
            {/* Radio group */}
            <div className="flex flex-col space-y-2 max-w-md">
              {/* Radio item */}
              <div className="group is-selected rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>Yes</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
              <div className="rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>No</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
      <section id="q3" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative pl-8">
            <span
              className="absolute -left-2 top-1 h-6 w-6 mr-2"
              aria-hidden="true"
            >
              <ArrowRightIcon />
            </span>
            <h1 className="relative flex items-center text-2xl">
              What job are you applying for?
            </h1>
          </div>
          <div className="pl-8 mt-4">
            {/* Radio group */}
            <div className="flex flex-col space-y-2 max-w-md">
              {/* Radio item */}
              <div className="group is-selected rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>Front End Engineer</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
              <div className="rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>Platform Engineer</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
              <div className="rounded cursor-pointer bg-gray-200 hover:bg-gray-300 hover:ring-1 hover:ring-gray-400 py-2 px-4 w-auto">
                <div className="flex items-center">
                  <div className="grow mr-2">
                    <span>Business Operations Lead</span>
                  </div>
                  <div className="ml-0 size-5 hidden group-[.is-selected]:block">
                    <CheckIcon />
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
      <section id="q4" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative pl-8">
            <span
              className="absolute -left-2 top-1 h-6 w-6 mr-2"
              aria-hidden="true"
            >
              <ArrowRightIcon />
            </span>
            <h1 className="relative flex items-center text-2xl">
              Let&apos;s get some contact information for you.
            </h1>
            <h1 className="text-2xl mt-4">
              Just FYI, you can use the arrow buttons at the bottom of this
              window in order to navigate to prior answers at any time.
            </h1>
            <h4 className="text-lg mt-4">
              [Please make sure the email you put down is the one you&apos;ll be
              emailing us from. Our automated systems will use this email to
              know that you&apos;re you and won&apos;t recognize correspondence
              from other email addresses.]
            </h4>
          </div>
          <div className="pl-8 mt-4 space-y-4">
            <div className="field grid grid-cols-2 space-y-2">
              <label className="">First name</label>
              <input
                type="text"
                className="col-start-1 px-4 py-2 rounded shadow ring-1"
                placeholder="Alice"
              />
            </div>
            <div className="field grid grid-cols-2 space-y-2">
              <label className="">Last name</label>
              <input
                type="text"
                className="col-start-1 px-4 py-2 rounded shadow ring-1"
                placeholder="Key"
              />
            </div>
            <div className="field grid grid-cols-2 space-y-2">
              <label className="">Email</label>
              <input
                type="email"
                className="col-start-1 px-4 py-2 rounded shadow ring-1"
                placeholder="name@example.com"
              />
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
      <section id="q5" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative pl-8">
            <span
              className="absolute -left-2 top-1 h-6 w-6 mr-2"
              aria-hidden="true"
            >
              <ArrowRightIcon />
            </span>
            <h1 className="relative flex items-center text-2xl">
              Please upload your resume below in PDF format.This question is
              required.
            </h1>
          </div>
          <div className="pl-8 mt-4 space-y-4">
            <div className="flex flex-col items-center justify-center cursor-pointer rounded border-dashed border border-blue-600 h-80 bg-gray-200">
              <div className="block size-16">
                <CloudArrowUpIcon />
              </div>
              <p>
                <b>Choose file</b> or <b>drag here</b>
              </p>
              <span className="text-sm">Size limit: 10MB</span>
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
      <section id="q6" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative pl-8">
            <span
              className="absolute -left-2 top-1 h-6 w-6 mr-2"
              aria-hidden="true"
            >
              <ArrowRightIcon />
            </span>
            <h1 className="relative flex items-center text-2xl">
              Please share a public link to your LinkedIn profile.
            </h1>
          </div>
          <div className="pl-8 mt-4 space-y-4">
            <div className="field grid grid-cols-2 space-y-2">
              <input
                type="text"
                className="col-start-1 px-4 py-2 rounded shadow ring-1"
                placeholder="https://"
              />
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
      <section id="q7" className="container mx-auto px-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col -mt-20 h-screen justify-center">
          <div className="relative pl-8">
            <span
              className="absolute -left-2 top-1 h-6 w-6 mr-2"
              aria-hidden="true"
            >
              <ArrowRightIcon />
            </span>
            <h1 className="relative flex items-center text-2xl">
              Please say a few words about why you&apos;d like to join X.This
              question is required.
            </h1>
            <h4 className="text-lg">
              This is your opportunity to share whatever you&apos;d like.
            </h4>
          </div>
          <div className="pl-8 mt-4 space-y-4">
            <div className="field grid grid-cols-2 space-y-2">
              <textarea
                className="col-span-2 px-4 py-2 rounded shadow ring-1"
                placeholder="Type your answer here"
              />
            </div>
            <Button className="mt-2">OK</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
