export default function Input(props) {
    return (
      <div className="w-3/4 mt-4 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm ">
        <label
          htmlFor={props.name || 'name'}
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          {props.label}
        </label>
        <input
          type={props.type || 'text'}
          name={props.name}
          onChange={props.onChange}
          id={props.id}
          className="block w-full border-0 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={props.placeholder}
        />
      </div>
    )
  }