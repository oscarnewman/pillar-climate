import AmountSelectionStep from '@/components/AmountSelectionStep'
import IncomeSelectionStep from '@/components/IncomeSelectionStep'
import Stack from '@/components/ui/Stack'
import { suggestions } from '@/utilities/incomeRanges'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiArrowRight, HiDuplicate } from 'react-icons/hi'

type Props = {}

function Start(props: Props) {
	const [income, setIncome] = useState<keyof typeof suggestions>(null)

	return (
		<div className="pb-16">
			<main className="bg-repeat py-8 w-full">
				<div className="max-w-4xl mx-auto px-6">
					<Stack space={16}>
						<Stack row className="justify-between">
							<Link href="/to/climate">
								<a className="flex items-center text-gray-400 font-bold text-lg">
									<Image
										src="/LogoBoxBig.png"
										layout="fixed"
										width={192 / 2}
										height={108 / 2}
										className="rounded shadow-xl overflow-hidden"
										quality={100}
									/>
									<span className="ml-2">gives to</span>
									<p className="ml-1 text-gray-800">🌳 Climate Change</p>
								</a>
							</Link>
							<nav className="flex items-center">
								<button className="bg-gray-100 px-4 py-1 text-gray-500 font-bold text-sm rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition active:bg-gray-300">
									Sign in
								</button>
							</nav>
						</Stack>
						<Stack space={10}>
							<div className="max-w-full px-4 py-2 text-red-100 bg-red-600 border-red-100 border-8 rounded-xl flex items-center">
								<HiDuplicate className="mr-2 text-2xl text-red-900" />
								<p>
									<strong className="text-white">Double your impact.</strong>{' '}
									{"We're"} matching donations from new givers this month.
								</p>
							</div>
						</Stack>
					</Stack>
				</div>
				<style jsx>{`
					main {
						background-image: linear-gradient(
								rgba(255, 255, 255, 0) 80%,
								rgba(255, 255, 255, 1)
							),
							url('/grid.svg');
					}
				`}</style>
			</main>
			<div className="max-w-4xl px-6 mx-auto">
				<AnimatePresence>
					<Stack space={16}>
						<Stack space={6}>
							<Stack space={1} className="text-center">
								<h1 className="text-xl font-semibold text-gray-800">
									What is your annual income?
								</h1>
								<p className="text-gray-600">
									This helps us build a reccomended monthly portfolio for you
								</p>
							</Stack>
							<IncomeSelectionStep onSelect={setIncome} />
						</Stack>
						{income && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Stack space={16}>
									<Stack space={6}>
										<Stack space={1} className="text-center">
											<h1 className="text-xl font-semibold text-gray-800">
												Suggested Monthly Amounts
											</h1>
											<p className="text-gray-600">
												These are averages that people in your income bracket
												give monthly
											</p>
										</Stack>
										<AmountSelectionStep
											range={income}
											onSelect={console.log}
										/>
									</Stack>
									<Link href="/to/climate/start">
										<a className="bg-yellow-500 px-6 py-3 text-lg font-bold rounded-lg ring-8 ring-yellow-100 text-white focus:outline-none flex justify-between items-center hover:bg-yellow-600 active:bg-yellow-700 transition self-stretch">
											Build Your Giving Plan
											<HiArrowRight className="ml-4" size={24} />
										</a>
									</Link>
								</Stack>
							</motion.div>
						)}
					</Stack>
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Start
