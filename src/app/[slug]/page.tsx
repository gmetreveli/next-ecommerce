import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
      {/* Img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* Texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa placeat nobis, expedita tenetur cumque unde obcaecati fuga
          accusantium ipsum veritatis accusamus blanditiis, aperiam quam
          laudantium amet eligendi impedit! Asperiores?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$67</h3>
          <h2 className="font-medium text-2xl">$56</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit officia unde recusandae assumenda aliquid tenetur
            quisquam, pariatur aliquam, quibusdam laudantium praesentium nobis
            dolor, fugit eum repudiandae impedit perferendis dicta?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit officia unde recusandae assumenda aliquid tenetur
            quisquam, pariatur aliquam, quibusdam laudantium praesentium nobis
            dolor, fugit eum repudiandae impedit perferendis dicta?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit officia unde recusandae assumenda aliquid tenetur
            quisquam, pariatur aliquam, quibusdam laudantium praesentium nobis
            dolor, fugit eum repudiandae impedit perferendis dicta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
