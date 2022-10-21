import React from 'react'
import { Range } from 'react-range'


export default function Dashboard() {
  const [values, setValues] = React.useState([0])

  const test = (e) => {
	setValues();
	console.log(e)
  }

  return (
    <div className='w-full flex justify-center'>
		<label className='text-left'>วัตถุดิบหลัก</label>
		<Range
          step={5}
          min={0}
          max={75}
          values={values}
					onChange={(event) => test(event)}
					renderTrack={({ props, children }) => (
						<div
							{...props}
							className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md"
						>
							{children}
						</div>
					)}
					renderThumb={({ props }) => (
						<div
							{...props}
							className="w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						/>
					)}
				/>
        <label className='text-right'>วัตถุดิบหลัก</label>
    </div>
  )
}
