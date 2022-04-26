import * as React from "react";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization";

import collatz_sheet from "../files/capstone/collatz-conjecture.pdf";
import collatz_audio from "../files/capstone/collatz-conjecture.mp3";

import ordinal_garden_sheet from "../files/capstone/ordinal-garden.pdf";
import ordinal_garden_audio from "../files/capstone/ordinal-garden.mp3";

import a_polynomic_jingle_sheet from "../files/capstone/a-polynomic-jingle.pdf";
import a_polynomic_jingle_audio from "../files/capstone/a-polynomic-jingle.mp3";

import sunbeam_sonata_sheet from "../files/capstone/sunbeam-sonata.pdf";
import sunbeam_sonata_audio from "../files/capstone/sunbeam-sonata.mp3";

import twinkle_twinkle_little_star_sheet from "../files/capstone/twinkle-twinkle-little-star.pdf";
import twinkle_twinkle_little_star_audio from "../files/capstone/twinkle-twinkle-little-star.mp3";

import thesis from "../files/capstone/thesis.pdf";

const TheSoundOfNumbers = () => {
	return (
		<main>
			<SearchEngineOptimization title="The Sound of Numbers — Hanu Asfaw" />

			<Layout>
				<p className="mt-10">
					The Sound of Numbers{" "}
					<span className="wave left-1">🎻</span>
				</p>

				<p>
					Welcome to the online <u>Sound of Numbers</u> website.
					Here, you will find audio files to the examples
					referenced in the thesis and links to other applicable
					documents.
				</p>

				<div className="bg-gray-100 py-4 md:py-5 px-4 md:px-9 rounded-lg mb-10">
					<p className="uppercase tracking-widest my-0 text-sm text-gray-400">
						Important Documents
					</p>

					<ol className="mt-2 ml-10 text-gray-600 leading-normal">
						<li>
							<a target="_blank" href={thesis}>Thesis (pdf)</a>
						</li>
						<li>
							<a target="_blank" href={ordinal_garden_sheet}>
								<i>Ordinal Garden</i> Sheet Music (pdf)
							</a>
						</li>
					</ol>
				</div>

				<p className="m-1">
					<a target="_blank" href={twinkle_twinkle_little_star_sheet}>
						Twinkle, Twinkle Little Star (all variations)
					</a>
				</p>
				<audio controls className="mb-10">
					<source
						src={twinkle_twinkle_little_star_audio}
						type="audio/mpeg"
					/>
				</audio>

				<p className="m-1">
					<a target="_blank" href={collatz_sheet}>Collatz Conjecture (n=41)</a>
				</p>
				<audio controls className="mb-10">
					<source src={collatz_audio} type="audio/mpeg" />
				</audio>

				<p className="m-1">
					<a target="_blank" href={sunbeam_sonata_sheet}>Sunbeam Sonata</a>
				</p>
				<audio controls className="mb-10">
					<source src={sunbeam_sonata_audio} type="audio/mpeg" />
				</audio>

				<p className="m-1">
					<a target="_blank" href={a_polynomic_jingle_sheet}>A Polynomic Jingle</a>
				</p>
				<audio controls className="mb-10">
					<source
						src={a_polynomic_jingle_audio}
						type="audio/mpeg"
					/>
				</audio>

				<p className="m-1">
					<a target="_blank" href={ordinal_garden_sheet}>Ordinal Garden</a>
				</p>
				<audio controls className="mb-10">
					<source src={ordinal_garden_audio} type="audio/mpeg" />
				</audio>
			</Layout>
		</main>
	);
};

export default TheSoundOfNumbers;
