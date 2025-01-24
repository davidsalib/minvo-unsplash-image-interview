type Alternative_slugs = {
	en: string;
	es: string;
	ja: string;
	fr: string;
	it: string;
	ko: string;
	de: string;
	pt: string;
};

type Urls = {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
	small_s3: string;
};

type Links = {
	self: string;
	html: string;
	download: string;
	download_location: string;
};

type Topic_submissions = {
	"business-work": {
		status: string;
		approved_on: string;
	};
};

type User = {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name: string;
	twitter_username: null;
	portfolio_url: string;
	bio: string;
	location: string;
	links: {
		self: string;
		html: string;
		photos: string;
		likes: string;
		portfolio: string;
		following: string;
		followers: string;
	};
	profile_image: {
		small: string;
		medium: string;
		large: string;
	};
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	total_promoted_photos: number;
	total_illustrations: number;
	total_promoted_illustrations: number;
	accepted_tos: boolean;
	for_hire: boolean;
	social: {
		instagram_username: string;
		portfolio_url: string;
		twitter_username: null;
		paypal_email: null;
	};
};

type UnsplashImage = {
	id: string;
	slug: string;
	alternative_slugs: Alternative_slugs;
	created_at: string;
	updated_at: string;
	promoted_at: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string;
	alt_description: string;
	breadcrumbs: [];
	urls: Urls;
	links: Links;
	likes: number;
	liked_by_user: boolean;
	current_user_collections: [];
	sponsorship: null;
	topic_submissions: Topic_submissions;
	asset_type: string;
	user: User[];
};
