import React from "react";

const PublishArticles = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Publish News</h2>
      <div id="publishArticles">
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1">
            <li aria-current="page">
              <div className="text-sm font-medium text-gray-700">Publish News</div>
            </li>
          </ol>
        </nav>
      </div>

      <form className="grid grid-cols-1 gap-4">
        {/* News Title Section */}
        <div className="flex flex-col bg-gray-100 rounded-md p-4">
          <label htmlFor="newsTitle" className="text-sm font-medium pb-2">
            News Title
          </label>
          <input
            type="text"
            id="newsTitle"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter News Title Here..."
          />
        </div>

        {/* Author and Image Upload Section */}
        <div className="flex space-x-4">
          <div className="flex flex-col bg-gray-100 rounded-md p-4 flex-grow">
            <label htmlFor="author" className="text-sm font-medium pb-2">
              Author
            </label>
            <input
              type="text"
              id="author"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter Author Name Here..."
            />
          </div>

          <div className="flex flex-col bg-gray-100 rounded-md p-4">
            <label htmlFor="newsImage" className="text-sm font-medium pb-2">
              Insert Image
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                id="newsImage"
                className="hidden"
              />
              <label
                htmlFor="newsImage"
                className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{ backgroundColor: "#00003C" }}
              >
                Upload Image
              </label>
            </div>
          </div>
        </div>

        {/* News Details Section */}
        <div className="flex flex-col bg-gray-100 rounded-md p-4">
          <label htmlFor="newsDetails" className="text-sm font-medium pb-2">
            News Details
          </label>
          <textarea
            id="newsDetails"
            rows={6}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter News Details"
          ></textarea>
        </div>

        {/* Publish Button Section */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            style={{ backgroundColor: "#00003C" }}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}

export default PublishArticles;
