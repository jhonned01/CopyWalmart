import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="flex-1 ">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-3 m-3">
        <GridOption
          title="Sweet gifts fo less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Furniture"
          image="https://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Toy"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="Soccer"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 row-span-2  col-span-2"
        />
        <GridOption
          title="Tools"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100 h-64 "
        />
        <GridOption
          title="Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64 "
        />
        <GridOption
          title="Sport"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-64 "
        />{" "}
        <GridOption
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-blue-100 h-64 "
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-blue-100  col-span-2 "
        />
      </div>
    </main>
  );
}
