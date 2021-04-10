import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import {db} from '../../firebase'


export default function AddItemForm() {
  const { t } = useTranslation()
  const categ = t('additem.cat', { returnObjects: true })
  const result = Object.keys(categ).map(key => categ[key])

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("productdetails")
      .add({
        productName,
        category,
        date,
        description,
        location,
        country,
        phone,
        price,
        state
      })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert(t('addtem.aform'));    
        })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.message);
      });

    setProductName("");
    setCategory("");
    setDate("");
    setDescription("");
    setLocation("");
    setCountry("");
    setPhone("");
    setPrice("");
    setState("");

  };

  return (
    <div className=" bg-white p-8">
      <div className="  p-4  w-full">
        <div className="text-4xl mb-10 text-center text-darkBlue font-bold py-4 underline">
          {t('additem.new')}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8   my-4">
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="title"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.title')}
              </label>
              <input
                type="text"
                name="title"
                required
                value={productName}
                onChange={(e)=> setProductName (e.target.value)}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 p-12 item-center border-2 border-darkgray border-dashed rounded-3xl text-center">
              <FontAwesomeIcon icon="images" className="fa-3x" /> <br />
              <label
                htmlFor="photo"
                className="relative cursor-pointer bg-white rounded-md font-medium hover:text-green text-blue"
              >
                <span>{t('additem.upload')}</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:-mt-14 ">
              <label
                htmlFor="type"
                className="md:text-xl text-blue font-semibold "
              >
                {t('additem.itemtype')}
              </label>
              <br />
              <div className="inline-flex mt-2 text-center ">
                <label htmlFor="crafted">
                  <input
                    type="radio"
                    name="type"
                    value={state.selected}
                    className="hidden"
                    onChange={(e)=> setState (e.target.value)}
                  />
                  <div className="label-checked:bg-blue label-checked:text-white  hover:bg-blue hover:text-white   border-2 border-blue  font-bold p-3 lg:w-32  rounded-l">
                    {' '}
                    {t('footer.crafted')}
                  </div>
                </label>
                <label htmlFor="used">
                  <input
                    type="radio"
                    name="type"
                    value={state.selected}
                    className="hidden"
                    onChange={(e)=> setState (e.target.value)}
                  />
                  <div className="label-checked:bg-blue label-checked:text-white hover:bg-blue  hover:text-white border-t-2 border-b-2 border-blue font-bold p-3  lg:w-32">
                    {t('footer.used')}
                  </div>
                </label>
                <label htmlFor="donated">
                  <input
                    type="radio"
                    name="type"
                    value={state.selected}
                    className="hidden"
                    onChange={(e)=> setState (e.target.value)}

                  />
                  <div className="label-checked:bg-blue label-checked:text-white hover:bg-blue hover:text-white  border-2 border-blue font-bold p-3  lg:w-32  rounded-r">
                    {t('footer.donated')}
                  </div>
                </label>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <label
                htmlFor="tel"
                className="md:text-xl text-blue font-semibold"
              >
                {' '}
                {t('additem.phone')}
              </label>
              <input
                type="tel"
                name="tel"
                required
                value={phone}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
                onChange={(e)=> setPhone (e.target.value)}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <label
                htmlFor="days"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.how')}
              </label>
              <input
                type="date"
                name="date"
                value={date}
                required
                onChange={(e)=> setDate (e.target.value)}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="country"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.country')}
              </label>
              <input
                type="text"
                name="country"
                required
                value={country}
                onChange={(e)=> setCountry (e.target.value)}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="categories"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.itemcate')}
              </label>
              <br />

              <div className="flex flex-wrap text-center"  > 
              {result.map(cate => (
                <label htmlFor={cate.value} key={uuid()}>
                  <input type="checkbox" name="category" id={cate.value} className="hidden"
                  value={category.checked}
                  onChange={(e)=> setCategory (e.target.value)} />
                  <div
                    row="1"
                    className="label-checked:bg-blue label-checked:text-white hover:text-white hover:bg-blue mr-4  mt-4 border-darkBlue  border-2  bg-blue bg-opacity-25 font-bold py-2 px-2 w-32 rounded-xl"
                  >
                    {cate.value}
                  </div>
                </label>
              ))}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="city"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.city')}
              </label>
              <input
                type="text"
                name="city"
                required
                value={location}
                onChange={(e)=> setLocation (e.target.value)}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="price"
                className="md:text-xl text-blue font-semibold"
              >
                {t('proudctDetail.price')}
              </label>
              <input
                required
                type="text"
                name="price"
                value={price}
                onChange={(e)=> setPrice (e.target.value)}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>

            <div className="col-span-2 mt-4">
              <label
                htmlFor="categories"
                className="md:text-xl text-blue font-semibold"
              >
                {t('proudctDetail.description')}
              </label>

              <textarea
                cols="1"
                rows="1"
                required
                value={description}
                className="border-b-2 border-blue  py-3 bg-white md:text-xl w-full h-24  focus:border-darkBlue focus:outline-none"
                onChange={(e)=> setDescription (e.target.value)}
              />
            </div>

            <div className="col-span-2 lg:col-span-1 text-center">
              <button
                type="submit"
                className="py-3 px-6 border-2 border-darkBlue hover:bg-darkBlue  bg-blue text-white font-bold w-full sm:w-28"
              >
                {t('additem.add')}
              </button>
            </div>
            <div className="col-span-2 lg:col-span-1 text-center">
              <input
                value={t('additem.cancel')}
                type="reset"
                className="py-3 px-6 bg-white text-black border-2 border-darkBlue hover:bg-darkBlue hover:text-white font-bold w-full sm:w-28"   />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}