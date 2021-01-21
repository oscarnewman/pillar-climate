import Stack from '@/components/ui/Stack'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiDuplicate } from 'react-icons/hi'

type Props = {}

function Climate(props: Props) {
	return (
		<main className="bg-repeat py-8 w-full">
			<div className="max-w-4xl mx-auto px-6">
				<Stack space={16}>
					<Stack row className="justify-between">
						<div className="flex items-center text-gray-400 font-bold text-lg">
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
						</div>
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
						<Stack space={6} className="max-w-xl">
							<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
								Turn guilt into giving.
								<br />
								<span className="text-gray-400">
									{"We've already done the hard part for you."}
								</span>
							</h1>
							<p className="text-lg md:text-xl text-gray-600">
								{"We're"} <em>really</em> worried about climate change. So we
								partnered with experts to track the best nonprofits, updated
								every month. Sleep easier by making a difference.
							</p>
						</Stack>
						<Link href="/to/climate/start">
							<a className="bg-yellow-500 px-6 py-3 text-lg font-bold rounded-lg ring-8 ring-yellow-100 text-white focus:outline-none flex justify-between items-center hover:bg-yellow-600 active:bg-yellow-700 transition self-stretch sm:self-start">
								Start Giving <HiArrowRight className="ml-4" size={24} />
							</a>
						</Link>
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
	)
}

export default Climate
