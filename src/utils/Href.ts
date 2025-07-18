/**
 * Utility class for managing application routes and URLs
 * Provides static methods to generate consistent URLs throughout the application
 */
class Href {
	/**
	 * Returns the home page URL
	 * @returns The home page URL
	 */
	public static readonly homePage = () => '/'

	public static readonly categoryFilter = (categoryKey: string) =>
		Href.homePage() + `?category=${categoryKey}`
}

export default Href
