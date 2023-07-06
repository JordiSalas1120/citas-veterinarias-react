

const Error = ({mensaje}) => {
  return (
    <>
        <div className="text-center bg-red-800 p-2 rounded-md">
            <p className="text-white uppercase ">{mensaje}</p>
        </div>
    </>
  )
}

export default Error
