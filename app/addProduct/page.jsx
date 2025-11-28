import "./addProduct.css";

export default function addProductPage() {
  return (
    <>
      <div className="addProduct w-screen py-[50px] flex items-center justify-center flex-col max-w-[1280x] ">
        <p className="addProduct__title w-full text-start max-w-[1280px]">
          Add Product
        </p>

        <form className="addProduct__container bg-amber-200 w-full max-w-[1280px] flex items-start justify-start border border-gray-300 p-[10px]  rounded-[15px] gap-3">
          <div className="addProduct__left">
            <div className="addProduct__productName">
              <label htmlFor="product name">Product Name</label>
              <input type="text" placeholder="Enter product name" />
            </div>
            <div className="addProduct__category">
              <label htmlFor="category">Category</label>
              <input type="text" placeholder="Select category" />
            </div>
            <div className="addProduct__price">
              <label htmlFor="Price">Price (Rs) </label>
              <input type="number" placeholder="450" />
            </div>
            <div className="addProduct__stockQuantity">
              <label htmlFor="stock quantity">Stock quantity</label>
              <input type="text" placeholder="E.g. 20" />
            </div>
          </div>
          <div className="addProduct__right">
            <div className="addProduct__productImage gap-[10px]">
              <label htmlFor="product images">Product Image</label>
              <input type="image" placeholder="Drag & drop images here " />
              <div className="productImageContainer w-full flex items-start justify-start flex-col">
                <div className="boxContainer flex gap-3">
                  <div className="productImage h-[40px] w-[40px] bg-gray-400 rounded-[5px]"></div>
                  <div className="productImage h-[40px] w-[40px] bg-gray-400 rounded-[5px]"></div>
                </div>

                <p className="desc">Up to 5 images, PNG or JPG</p>
              </div>
            </div>
            <div className="addProduct__description">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Describe your product,quantity,and any specific notes."
              ></textarea>
            </div>
            <div className="addProduct__tags">
              <label htmlFor="tags">Tags(Optional)</label>
              <input type="text" placeholder="E.g. organic,seasonal,cow milk" />
            </div>
            <div className="addProduct__btnContainer w-full flex items-start justify-end gap-[20px]">
              <button className="addProduct__cancel">Cancel</button>
              <button className="addProduct__saveProduct">Save Product</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
