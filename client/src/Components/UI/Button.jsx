/* This example requires Tailwind CSS v2.0+ */
export default function Example(props) {
    return (
      <>
        <button
          type="button"
          className="inline items-center px-2 md:px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={props.onClick}
          >
          {props.children}
        </button>
      </>
    )
  }
  