import { cx } from '@/utilities/classes'
import { formatMinorAmmount } from '@/utilities/currency'
import { ranges, suggestions } from '@/utilities/incomeRanges'
import { useEffect, useMemo, useState } from 'react'

type Props = {
	onSelect: (value: string | number) => void
	range: keyof typeof suggestions
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

function AmountSelectionStep({ range, onSelect }: Props) {
	const options = useMemo(() => suggestions[range], [range])
	const [selected, setSelected] = useState<string | number>(options[1])

	useEffect(() => {
		setSelected(options[1])
	}, [options, range])

	useEffect(() => {
		onSelect(selected)
	}, [onSelect, selected])

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
			{options.map(option => (
				<OptionButton
					key={option}
					label={formatMinorAmmount(option)}
					value={option}
					onClick={setSelected}
					active={selected === option}
				/>
			))}
			<OptionButton
				label={'Custom'}
				value={'custom'}
				onClick={setSelected}
				active={selected === 'custom'}
			/>
		</div>
	)
}

export default AmountSelectionStep
