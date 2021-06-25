import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { SRLWrapper } from 'simple-react-lightbox';

import './style.css';

const srlOptions = {
	settings: {
		disableWheelControls: true,
	},
	buttons: {
		showAutoplayButton: false,
		showDownloadButton: false,
		showNextButton: true,
		showPrevButton: true,
	},
	thumbnails: {
		showThumbnails: false,
	},
};

function Grid({ unsplashImages, getUnsplashImages }) {
	const srlCallbacks = {
		onSlideChange: object => {
			if (!object.slides.next) {
				getUnsplashImages();
			}
		},
	};

	return (
		<div className="grid-container">
			<center>
				<div className="grid">
					<SRLWrapper options={srlOptions} callbacks={srlCallbacks}>
						<ResponsiveMasonry columnsCountBreakPoints={{ 420: 1, 830: 2, 1240: 3 }}>
							<Masonry>
								{unsplashImages?.map(
									unsplashImage => (
										<a href={unsplashImage.urls.full} key={unsplashImage.id}>
											<img src={unsplashImage.urls.small} alt="" className="grid-image" />
										</a>
									)
								)}
							</Masonry>
						</ResponsiveMasonry>
					</SRLWrapper>
				</div>
			</center>
		</div>
	);
}

export default Grid;
