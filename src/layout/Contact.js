const Contact = () => {
    return (
    <div class="flex flex-col max-w-4xl md:h-56 bg-pink-200 md:rounded-lg shadow-lg overflow-hidden md:flex-row md:mx-48 md:my-10">
        <div class="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
            <div class="py-6 px-8 md:py-0">
                <h2 class=" text-2xl font-bold md:text-gray-100">Sign Up For Updates</h2>
                <p class="mt-2  md:text-gray-400">From articles and interactive activities to live meditation sessions from coaches, 
                this hub of curated resources gives you the tools to stay grounded when life is up in the air.</p>
            </div>
        </div>
        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
            <form>
                <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                    <input class="py-3 px-4 bg-gray-50  border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email" />
                    <button class="py-3 px-4 bg-gray-900 text-gray-100 font-semibold uppercase hover:bg-gray-600">subscribe</button>
                </div>
            </form>
        </div>
    </div>
      );
}
 
export default Contact;