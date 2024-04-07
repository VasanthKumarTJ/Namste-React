// import vasanth from "../../assets/vasanth.jpg";
import sky from "../../assets/sky.jpg"


const About = () => {
  return (
    <div className=" min-h-screen bg-cover bg-center bg-no-repeat object-contain" style={{ backgroundImage: `url(${sky})` }}>
      <div className="w-8/12  mx-auto py-4 text-lg font-semibold  backdrop-blur-sm">
        <div className="my-5">
          <h1 className=" text-3xl font-serif my-8">
            They Shared a Story Later To Be Retold By Many!!
          </h1>

          <p>
            Founders <span className=" text-lg font-serif">Haritha</span> and{" "}
            <span className=" text-lg font-serif">Vasanth</span> often took
            long strolls during their college days. They were both youthful and
            full of innovation. The vibrant online avenues of Kanchipuram
            witnessed their endless discussions while the enticing digital aroma
            of various cuisines intrigued them. Their conversations seamlessly
            transitioned into envisioning a successful journey in the online
            food delivery realm. The highlight of their venture was establishing
            a digital platform, spreading it far and wide as a go-to destination
            for tech-savvy food enthusiasts seeking fresh, delightful, and
            authentic dishes. They christened their dream "TechCuisine,"
            symbolizing the fusion of technology and culinary excellence,
            embodying the modern era's digital food culture.
          </p>
        </div>
        <div>
          How apt that the name would eventually resonate. Originating with the
          inception of a pioneering online food delivery platform in 2022, their
          fervor and aspiration to propagate the ethos of nutritious, authentic
          dining burgeoned, captivatingly evolving under the TechCuisine banner.
          With a presence spanning 12 locations across India and Qatar,
          TechCuisine fosters an optimal dining ambiance for a seamless, yet
          personalized digital experience rooted in a comprehensive service
          ethos.
        </div>
      </div>

      {/* <div className="flex justify-around w-8/12  mx-auto my-4 bg-slate-400">
        <div className="flex flex-col gap-3">
          <img src={vasanth} alt="" className="h-60 w-80 rounded-xl object-cover " />
          <p className=" text-2xl font-serif font-semibold">Co-founder & CEO</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={} alt="" className=" h-60 w-80 rounded-xl object-cover " />
          <p className=" text-2xl font-serif font-semibold">Co-founder & CEO</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
