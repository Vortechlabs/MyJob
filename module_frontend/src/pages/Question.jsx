
import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

export function Question() {
  return (
    <div className="mx-auto px-5 py-10 sm:px-10 md:px-12 lg:px-10  max-w-7xl">
    <Accordion>

      <Accordion.Panel>
        <Accordion.Title>What is MyJob?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          MyJob is a comprehensive job portal platform designed to connect job seekers with employment opportunities across Indonesia.
          It serves as a centralized hub for individuals looking to apply for various positions in diverse industries, making the job search process more efficient and accessible.
          With a user-friendly interface, MyJob allows users to easily browse job listings, submit applications, and find the perfect job match.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Join us today and take the first step towards your dream career &nbsp;
            <Link
              to={'/Register'}
              className="text-indigo-600 hover:underline dark:text-indigo-500"
            >
              sign up now&nbsp;
            </Link>
            on MyJob!
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Is MyJob free to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, MyJob is completely free for job seekers. You can browse job listings, submit applications, and create a profile without any cost.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Join us today and take the first step towards your dream career &nbsp;
            <a href="" className="text-indigo-600 hover:underline dark:text-indigo-500">
              sign up now&nbsp;
            </a>
            on MyJob!
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>What types of jobs are available on MyJob?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 ">
          MyJob features a wide range of job listings across various industries, including but not limited to technology, finance, healthcare, education, and hospitality.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          MyJob features a wide range of job listings across various industries, including but not limited to technology, finance, healthcare, education, and hospitality.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these categories:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="" className="text-indigo-600 hover:underline dark:text-indigo-500">
              Technology
              </a>
            </li>
            <li>
              <a
                href=""
                rel="nofollow"
                className="text-indigo-600 hover:underline dark:text-indigo-500"
              >
                finance
              </a>
            </li>
            <li>
              <a
                href=""
                rel="nofollow"
                className="text-indigo-600 hover:underline dark:text-indigo-500"
              >
                healthcare
              </a>
            </li>
            <li>
              <a
                href=""
                rel="nofollow"
                className="text-indigo-600 hover:underline dark:text-indigo-500"
              >
                education
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Is MyJob free to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, MyJob is completely free for job seekers. You can browse job listings, submit applications, and create a profile without any cost.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Join us today and take the first step towards your dream career &nbsp;
            <a href="" className="text-indigo-600 hover:underline dark:text-indigo-500">
              sign up now&nbsp;
            </a>
            on MyJob!
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Is MyJob free to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, MyJob is completely free for job seekers. You can browse job listings, submit applications, and create a profile without any cost.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Join us today and take the first step towards your dream career &nbsp;
            <a href="" className="text-indigo-600 hover:underline dark:text-indigo-500">
              sign up now&nbsp;
            </a>
            on MyJob!
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Is MyJob free to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, MyJob is completely free for job seekers. You can browse job listings, submit applications, and create a profile without any cost.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Join us today and take the first step towards your dream career &nbsp;
            <a href="" className="text-indigo-600 hover:underline dark:text-indigo-500">
              sign up now&nbsp;
            </a>
            on MyJob!
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Is MyJob free to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, MyJob is completely free for job seekers. You can browse job listings, submit applications, and create a profile without any cost.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Join us today and take the first step towards your dream career &nbsp;
            <a href="" className="text-indigo-600 hover:underline dark:text-indigo-500">
              sign up now&nbsp;
            </a>
            on MyJob!
          </p>
        </Accordion.Content>
      </Accordion.Panel>

    </Accordion>
    </div>
  );
}
