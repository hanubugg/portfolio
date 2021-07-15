import * as React from "react"

import Layout from "../components/Layout"

const Index = () => {
  return (
    <main>
      <title>Asfaw</title>
      
      <Layout>
        <p className="mt-0">Selam, friend <span className="wave left-1">👋🏾</span></p>

        <p>I am Brehanu Bugg, but please call me Asfaw. (It is my Ethiopian last name.)</p>

		<p>Welcome to my humble corner of the internet!</p>

        <p>I am a high school <span className="underline">actor</span>, <span className="underline">writer</span>, and <span className="underline">computer scientist</span> currently based in Charlottesville, Virginia. I have lived here since I was three years old.</p>

		<div className="bg-gray-100 py-5 px-9 rounded-lg">
			<p className="uppercase tracking-widest my-0 text-sm text-gray-400">Current Status</p>
			<p className="my-0 text-gray-600">Enjoying the summer before my senior year of high school.</p>
		</div>

		<p>At the moment, this website serves to be a central hub for everything concerning me: my socials, portfolio, and a collection of tidbits from around the web that I have written. Please, feel free to skip to one of the sections down below if you want to see what I've been working on.</p>

		<p>If you are looking for it, here is a copy of <a href="/files/resume.pdf">my r&egrave;sum&egrave;</a>.</p>

		<hr />

		<div className="mt-34">
			<p className="uppercase tracking-widest text-sm text-gray-400 mb-2">Computer Science Projects</p>

			<ul>
				<li>
					<a href="https://standwithblm.org" target="_blank">Stand With BLM</a>
					<span> &#8212; A curation of articles, books, organizations, petitions, movies and TV shows for one to learn about the Black exerience. Created during the summer of 2020.</span>
				</li>

				<li>
					Summer Spark
					<span> &#8212; UI/UX engineer for virtual summer hackathon portal. Created during the summer of 2020.</span>
				</li>

				<li>
					<a href="https://notatio.netlify.app" target="_blank">Notatio</a>
					<span> &#8212; Mad Libs style story generator conceived in two days after a long creative block during quarantine. Created during the summer of 2020.</span>
				</li>

				<li>
					<a href="https://www.inmanmajors.com" target="_blank">Inman Majors</a>
					<span> &#8212; Designed and created author website for my friend's dad in Webflow. Created, and still actively maintained, 2019.</span>
				</li>
			</ul>
		</div>

		<div className="mt-34">
			<p className="uppercase tracking-widest text-sm text-gray-400 mb-2">Theatrical Performances</p>

			<ul>
				<li>
					Curious Incident of the Dog in the Night-Time (Spring, 2021)
					<span> &#8212; Played Roger Shears, an abusive homewrecker with an iconic drinking scene. I had to drink 34 ounces of water on stage!</span>
				</li>

				<li>
					Chicago (Spring, 2020)
					<span> &#8212; Ensemble member and Judge during court scene. We got a three-week masterclass in the Fosse dance style by Debra McWaters.</span>
				</li>

				<li>
					Measure for Measure (Summer, 2019)
					<span> &#8212; Played the lead of the Duke of Venice in this Shakespeare classic. This was the teen summer camp at the American Shakespeare Center in Staunton, VA.</span>
				</li>

				<li>
					Beauty and the Beast (Winter, 2019)
					<span> &#8212; Ensemble member. This was my first musical.</span>
				</li>

				<li>
					Twelfth Night (Fall, 2018)
					<span> &#8212; Played the lead of Duke Orsino in this Shakespeare play. We included lots of Elvis songs in this production!</span>
				</li>
			</ul>
		</div>

		<div className="mt-34">
			<p className="uppercase tracking-widest text-sm text-gray-400 mb-2">Writings</p>

			<ul>
				<li>
					<a href="/files/nightlight.pdf">Nightlight</a>
					<span> &#8212; On their last afternoon of summer vacation, Matt and his sister spends the afternoon outdoors. A short story.</span>
				</li>

				<li>
					<a href="/files/waving-no-longer.pdf">Waving No Longer</a>
					<span> &#8212; A 5-part haiku in response to the January 2021 insurrection. A poem.</span>
				</li>
			</ul>
		</div>

		<hr />

		<p>I hope through my projects, performances, and writings that you have gotten to know me better. If you'd like to collaborate, feel free to email me at <a href="mailto:buggbaj@gmail.com" target="_blank">buggbaj (at) gmail (dot) com</a> and I will get back to you as soon as possible. You can find my socials down below.</p>

		<p>Ciao. &#8212;Asfaw</p>

		<hr />

		<div className="flex justify-around">
			<a href="https://www.instagram.com/brehanuasfaw/" target="_blank">Instagram</a>
			<a href="https://www.goodreads.com/user/show/136196847-asfaw" target="_blank">Goodreads</a>
			<a href="mailto:buggbaj@gmail.com" target="_blank">Email</a>
		</div>
      </Layout>
    </main>
  )
}

export default Index