import { useEffect, useState } from "react";

const About = () => {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setGallery(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  if(loading){
    return <h1 className="text-3xl font-bold mb-5 text-center">Laoding Gallery</h1>
  }

  return (
    <section className="max-w-[1200px] m-auto p-2">
      <h1 className="text-3xl font-bold mb-5">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {gallery.slice(0,8).map((gall) => (
          <div key={gall.id} className="group card border border-black shadow-sm p-3 hover:bg-black transition-all duration-300 ease-in-out">
            <img src={gall.url} alt={gall.title} />
            <h2 className="font-bold group-hover:text-white">{gall.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About;