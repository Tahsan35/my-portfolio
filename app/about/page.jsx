//import DevImg from "../../components/DevImg";
//import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import mypic from "../../public/my-bg.png";
const Hero = () => {
  return (
    <>
      <section className=" flex py-12 xl:py-16 h-[70vh]">
        <div className="container mx-auto absolute">
          <div className="flex justify-between">
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 tracking-[4px] text-orange-200">
                web Developer
              </div>
              <h1 className="h1 mb-4 text-orange-400">
                Hello, This is Tahsan Shakil
              </h1>
              <p className="text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0">
                Brief description with insights into my self, my vocational
                journey, and what I engage in professionally.
              </p>
              <div className=" flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href="/contact">
                  <Button className="bg-orange-400 text-slate-200 gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Link href="/resume.pdf">
                  <Button className=" text-slate-200 gap-x-2 bg-slate-600">
                    Download CV <Download size={18} />
                  </Button>
                </Link>
              </div>
              {/* <div className="hiden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
              <RiArrowDownSLine className="text-3xl"></RiArrowDownSLine>
            </div> */}
            </div>
            <div className="hidden xl:flex">
              <Image src={mypic} alt="tahsan" width={700} height={550} />
            </div>
          </div>
          {/* <div>image</div> */}
        </div>
      </section>
      <section className="mx-10 mt-5 pt-10 xl:mt-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        accusamus rerum dolores cumque obcaecati, commodi laudantium perferendis
        libero modi vitae vero facere repellendus qui. Itaque beatae id
        inventore similique dignissimos repellendus error, odio corrupti! Sit
        modi velit, est ullam tenetur labore voluptatibus rerum laboriosam
        sequi. Asperiores consequuntur voluptatum maxime facilis recusandae
        molestiae a accusamus veniam, molestias vitae quod nemo excepturi,
        quisquam animi alias odit at perferendis quo hic ipsa unde illo itaque.
        Quam, neque temporibus illum quisquam repellat iusto maiores beatae
        magni ducimus quas odio veritatis saepe natus rem in voluptatum nam
        architecto ad voluptates autem doloribus! Blanditiis itaque autem esse
        debitis ullam nostrum porro, cum ducimus magnam tenetur voluptatem
        obcaecati officia magni reprehenderit, assumenda dolorum dolor, at vel
        exercitationem excepturi reiciendis fugit aliquam! In accusamus nobis
        quos amet nesciunt voluptas enim autem quod totam quia, molestiae a
        tempore, praesentium alias harum nihil minus non, sit laudantium? Cum ut
        ex sequi tempora a amet, adipisci libero sed! Porro architecto eaque
        tempore, possimus voluptatem deserunt error inventore aspernatur a nemo
        illo laudantium dolorem rem maxime debitis! Aspernatur nihil aliquid
        dolorem velit magni minus animi, dolores aut perspiciatis iusto ea?
        Nobis, praesentium illo veritatis ea nesciunt ab quia sed exercitationem
        et repudiandae sequi quod nisi perspiciatis laborum, dolorum a atque
        magnam? Obcaecati, totam. Sequi dolor aliquam, ratione nulla totam
        blanditiis architecto aliquid natus reprehenderit rerum, cumque minima
        magni ab fugit quibusdam dolorem incidunt autem? Totam voluptates
        eligendi, eos nostrum, sapiente hic corrupti vitae fugit soluta deserunt
        dolorem magnam quo necessitatibus, ex eius veniam quas nam sit
        molestias? Impedit tenetur ullam asperiores, ex ad ipsum, adipisci saepe
        sint accusantium et sit exercitationem dignissimos hic odit consequatur
        libero laboriosam porro voluptatum eligendi. Nesciunt, repellat qui
        beatae ratione atque iusto. Ullam a adipisci earum quaerat modi quisquam
        aperiam aliquid numquam reiciendis vero. Soluta, nihil hic!
      </section>
    </>
  );
};

export default Hero;
