export default function textarea() {
    return (
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700"/>
        <div className="mt-1 w-full">
          <textarea
            rows='5'
            cols="40"
            name="description"
            id="description"
            placeholder="Book Description"
            className="border-gray-300 shadow-sm block px-3 py-2 border mb-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            resize='off'
          />
        </div>
      </div>
    )
  }
  