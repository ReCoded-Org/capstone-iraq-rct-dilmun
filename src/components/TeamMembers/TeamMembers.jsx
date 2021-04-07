/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TeamMembers() {
    return (

        <div className="bg-white p-8">
        <div className="text-4xl mb-10 text-center my-5 text-darkBlue font-bold  "> Meet the Team </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-14 mx-4">
			<div className="flex flex-col text-center items-center justify-center bg-white p-4 shadow rounded-lg">
				<div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
					<img src="https://static.thenounproject.com/png/363640-200.png"
						 alt=""
						 className="h-full w-full"/>
				</div>

				<h2 className="mt-4 font-bold text-xl">Haval Rezan Majnun</h2>

				<p className="text-xs   mt-3">
					Example
				</p>

				<ul className="flex flex-row mt-4 space-x-2">
					<li>
						<a href="https://github.com/haval95" className="flex hover:bg-blue items-center justify-center h-8 w-8 border rounded-full ">
						<FontAwesomeIcon   icon={['fab', 'github']} />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/" className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full ">
						<FontAwesomeIcon   icon={['fab', 'linkedin-in']} />
						</a>
					</li>
					
				</ul>
			</div>

			<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
					<img src="https://static.thenounproject.com/png/363640-200.png"
						 alt=""
						 className="h-full w-full"/>
				</div>

				<h2 className="mt-4 font-bold text-xl">Ismail Khalil</h2>

				<p className="text-xs   mt-3">
					Example
				</p>

				<ul className="flex flex-row mt-4 space-x-2">
                        <li>
                        <a href="https://github.com/ismailkhalil20" className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full ">
                        <FontAwesomeIcon   icon={['fab', 'github']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full ">
                        <FontAwesomeIcon   icon={['fab', 'linkedin-in']} />
                        </a>
                    </li>
				</ul>
			</div>

			<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
					<img src="https://static.thenounproject.com/png/363640-200.png"
						 alt=""
						 className="h-full w-full"/>
				</div>

				<h2 className="mt-4 text-center font-bold text-xl">Sima Jazaa Mohammmed</h2>

				<p className="text-xs   mt-3">
					Example
				</p>

				<ul className="flex flex-row mt-4 space-x-2">
                <li>
                <a href="https://github.com/Sima-J" className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full ">
                <FontAwesomeIcon   icon={['fab', 'github']} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/" className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full ">
                <FontAwesomeIcon   icon={['fab', 'linkedin-in']} />
                </a>
            </li>
				</ul>
			</div>

			<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
					<img src="https://static.thenounproject.com/png/363640-200.png"
						 alt=""
						 className="h-full w-full"/>
				</div>

				<h2 className="mt-4 font-bold text-xl">Kodo Yousif </h2>

				<p className="text-xs   mt-3">
					Example
				</p>

				<ul className="flex flex-row mt-4 space-x-2">
				<li>
						<a href="https://github.com/kodo-yousif" className="flex hover:bg-blue items-center justify-center h-8 w-8 border rounded-full ">
						<FontAwesomeIcon   icon={['fab', 'github']} />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/" className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full ">
						<FontAwesomeIcon   icon={['fab', 'linkedin-in']} />
						</a>
					</li>
				</ul>
			</div>

		</div>
            
 </div>
    )
}
