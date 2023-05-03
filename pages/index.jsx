import Highlight from "@/components/Hightlight";

const CodeAsContent = `
const MyComponent = () => {
  const Images = ["sea", "tree", "job", "lake"];
  return (
    <div className="container section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-2 md:p-4 lg:p-10 xl:p-20">
        {Images.map((image) => {
          return (
            <div key={image} className="rounded-2xl shadow-lg hover:shadow-2xl">
              <img
                src={"/static/images/" + image + ".jpg"}
                alt=""
                className="rounded-t-2xl shadow-md"
              />
              <div className="p-5 grid grid-cols-1 gap-3">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Tempor proident consequat duis aliqua
                </h1>
                <h3 className="font-semibold text-gray-600">
                  Id velit irure magna consectetur irure.
                </h3>
                <p className="text-gray-400">
                  Laborum eiusmod ea eiusmod duis aute in dolor. Adipisicing
                  incididunt consequat dolore et laborum elit nostrud quis
                  laboris consequat.
                </p>
                <button className="px-4 py-1 rounded-md bg-blue-600 text-white">
                  Learn more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
`;

const Home = () => {
  const Images = ["sea", "tree", "job", "lake"];
  return (
    <div className="container section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-2 md:p-4 lg:p-10 xl:p-20">
        {Images.map((image) => {
          return (
            <div key={image} className="rounded-2xl shadow-lg hover:shadow-2xl">
              <img
                src={"/static/images/" + image + ".jpg"}
                alt=""
                className="rounded-t-2xl shadow-md"
              />
              <div className="p-5 grid grid-cols-1 gap-3">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Tempor proident consequat duis aliqua
                </h1>
                <h3 className="font-semibold text-gray-600">
                  Id velit irure magna consectetur irure.
                </h3>
                <p className="text-gray-400">
                  Laborum eiusmod ea eiusmod duis aute in dolor. Adipisicing
                  incididunt consequat dolore et laborum elit nostrud quis
                  laboris consequat.
                </p>
                <button className="px-4 py-1 rounded-md bg-blue-600 text-white">
                  Learn more
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-center font-bold my-20 text-3xl">Code for above component</h1>
        <Highlight content={CodeAsContent}/>
      </div>
    </div>
  );
};

export default Home;
