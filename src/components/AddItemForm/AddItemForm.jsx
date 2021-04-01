import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';

    
    export default function AddItemForm() {
      const { t } = useTranslation()
      const categ = (t('additem.cat', { returnObjects: true }));
      const listcate = categ.map((cate) => 
      <button type="button" className=" hover:bg-blue mr-4  mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-2 w-32 rounded-xl">{cate}</button> );

      return (
          <div className=" bg-white">
          <div className="   py-10 px-5   w-full">
            <div className="text-4xl mb-10 text-center my-5 text-darkBlue font-bold py-4 ">{t('additem.new')}</div>
              <form>
               <div className="grid grid-cols-2 gap-8   my-4">
                <div className="col-span-2 lg:col-span-1">
                <label htmlFor="title" className="md:text-xl text-blue font-semibold">{t('additem.title')}</label>
              <input type="text" name="title" id="title" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
            </div>
            <div className="col-span-2 lg:col-span-1 p-12 item-center border-2 border-darkgray border-dashed rounded-3xl text-center">
            <FontAwesomeIcon icon="images" className="fa-3x"/> <br/>
            <label htmlFor="photo" className="relative cursor-pointer bg-white rounded-md font-medium hover:text-green text-blue">
            <span>{t('additem.upload')}</span>
            <input  id="file-upload" name="file-upload" type="file" className="sr-only"/>
            </label>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:-mt-14 ">
            <label htmlFor="type" className="md:text-xl text-blue font-semibold ">{t('additem.itemtype')}</label><br/>
            <div className="inline-flex mt-2 ">
            <button type="button" className=" hover:bg-blue   border-2 border-blue  font-bold py-3 px-4 lg:w-40 rounded-l">
            {t('footer.crafted')}
            </button>
            <button type="button" className=" hover:bg-blue   border-t-2 border-b-2 border-blue font-bold py-3 px-4  lg:w-40 ">
            {t('footer.used')}

            </button>
            <button type="button" className=" hover:bg-blue  border-2 border-blue font-bold py-3 px-4  lg:w-40  rounded-r">
            {t('footer.donated')}
          </button>
        </div>        
          </div>
            <div className="col-span-2 lg:col-span-1 ">
            <label htmlFor="tel" className="md:text-xl text-blue font-semibold"> {t('additem.phone')}
            </label>
            <input type="tel" name="tel" id="tel" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
          </div>
            <div className="col-span-2 lg:col-span-1 ">
            <label htmlFor="days" className="md:text-xl text-blue font-semibold">{t('additem.how')}</label>
            <input type="date" name="days" id="days" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
          </div>
            <div className="col-span-2 lg:col-span-1">
            <label htmlFor="country" className="md:text-xl text-blue font-semibold">{t('additem.country')}</label>
            <input type="country" name="country" id="country" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
             </div>
            
        
            <div className="col-span-2 lg:col-span-1 ">
            <label htmlFor="categories" className="md:text-xl text-blue font-semibold">{t('additem.itemcate')}</label><br/>
            {listcate}
             </div>
             <div className="col-span-2 lg:col-span-1">
              <label htmlFor="city" className="md:text-xl text-blue font-semibold">{t('additem.city')}</label>
              <input type="text" name="city" id="city" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
               </div>
        
            <div className="col-span-2 mt-4">
            <label htmlFor="categories" className="md:text-xl text-blue font-semibold">{t('proudctDetail.description')}</label>

           <textarea cols="1" rows="1" className="border-b-2 border-blue  py-3 bg-white md:text-xl w-full h-24  focus:border-darkgray focus:outline-none"/>
            </div>
        
            <div className="col-span-2 lg:col-span-1 text-center">
            
              <button type="submit" className="py-3 px-6 border-2  hover:bg-darkBlue  bg-blue text-black font-bold w-full sm:w-28">
              {t('additem.add')} 
             </button>
           
            </div>
            <div className="col-span-2 lg:col-span-1 text-center">
            
              
             <button type="submit" className="py-3 px-6 bg-white border-2 hover:bg-darkBlue  text-blue font-bold w-full sm:w-28">
             {t('additem.cancel')}  
            </button>

            </div>
        
        
          </div>
          </form>
        </div>
        </div>
                
           
        )
    }
    