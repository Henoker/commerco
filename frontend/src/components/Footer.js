import React from 'react'
import { Link } from'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 sm:py-12 m-6 p-6 rounded-xl">
	  <div className="container mx-auto px-4 flex flex-col gap-y-10">
		<div className="flex md:flex-row md:flex-wrap md:justify-between flex-col gap-x-4 gap-y-8">
			<div className="flex flex-col gap-y-3">
				<h2 className="text-2xl">Features</h2>
				<div className="flex flex-col gap-y-1.5">
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<h2 className="text-2xl">Resources</h2>
				<div className="flex flex-col gap-y-1.5">
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<h2 className="text-2xl">About</h2>
				<div className="flex flex-col gap-y-1.5">
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<h2 className="text-2xl">Contact</h2>
				<div className="flex flex-col gap-y-1.5">
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<h2 className="text-2xl">legal</h2>
				<div className="flex flex-col gap-y-1.5">
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
					<Link className="text-base">
						Link 1
                    </Link>
				</div>
			</div>
		</div>
	  </div>
</footer>
  )
}

export default Footer