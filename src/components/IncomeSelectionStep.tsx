import { cx } from '@/utilities/classes'
import { ranges, suggestions } from '@/utilities/incomeRanges'
import { useEffect, useState } from 'react'

type Props = {
	onSelect: (value: keyof typeof suggestions) => void
}

function OptionButton({ label, value, onClick, active }) {
	return (
		<button
			className={cx(
				'sm:p-6 px-4 py-2 border border-gray-200 shadow-sm flex-1',
				'rounded transition-colors w-full font-medium',
				'focus:outline-none hover:bg-gray-50 active:bg-gray-100',
				{
					'bg-gradient-to-br from-pink-500 to-red-500 text-white': active,
					'text-gray-800': !active,
				}
			)}
			onClick={() => onClick(value)}
		>
			{label}
		</button>
	)
}

function IncomeSelectionStep({ onSelect }: Props) {
	const [selected, setSelected] = useState(null)

	useEffect(() => {
		onSelect(selected)
	}, [onSelect, selected])

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
			{ranges.map(range => (
				<OptionButton
					key={range.value}
					{...range}
					onClick={setSelected}
					active={selected === range.value}
				/>
			))}
		</div>
	)
}

export default IncomeSelectionStep
