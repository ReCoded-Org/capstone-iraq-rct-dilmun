/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

    
    export default function AddItemForm() {
    
        return (
          <div className=" bg-white">
          <div className="   py-10 px-5   w-full">
            <div className="text-3xl mb-6 text-center my-5 text-blue font-bold ">Add New Item</div>
              <form>
               <div className="grid grid-cols-2 gap-8   my-4">
                <div className="col-span-2 lg:col-span-1">
                <label htmlFor="title" className="md:text-xl text-blue font-semibold">Title</label>
              <input type="text" name="title" id="title" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
            </div>
            <div className="col-span-2 lg:col-span-1 p-12 item-center border-2 border-darkgray border-dashed rounded-3xl text-center">
            <FontAwesomeIcon icon="images" className="fa-3x"/> <br/>
            <label htmlFor="photo" className="relative cursor-pointer bg-white rounded-md font-medium hover:text-green text-blue">
            <span>Upload Item photos</span>
            <input  id="file-upload" name="file-upload" type="file" className="sr-only"/>
            </label>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:-mt-14 ">
            <label htmlFor="type" className="md:text-xl text-blue font-semibold ">Select the Item Type</label><br/>
            <div className="inline-flex mt-2 ">
            <button className=" hover:bg-blue    border-2 border-blue  font-bold py-3 px-4 lg:w-40 rounded-l">
            Crafted
            </button>
            <button className=" hover:bg-blue   border-t-2 border-b-2 border-blue font-bold py-3 px-4  lg:w-40 ">
              Used
            </button>
            <button className=" hover:bg-blue  border-2 border-blue font-bold py-3 px-4  lg:w-40  rounded-r">
            Donated
          </button>
        </div>          </div>
            <div className="col-span-2 lg:col-span-1 ">
            <label htmlFor="tel" className="md:text-xl text-blue font-semibold">Phone Number</label>
            <input type="tel" name="tel" id="tel" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
          </div>
            <div className="col-span-2 lg:col-span-1 ">
            <label htmlFor="days" className="md:text-xl text-blue font-semibold">How long  the item will be available?</label>
            <input type="date" name="days" id="days" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
          </div>
            <div className="col-span-2 lg:col-span-1">
            <label htmlFor="country" className="md:text-xl text-blue font-semibold">Country</label>
            <input type="country" name="country" id="country" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
             </div>
            
        
            <div className="col-span-2 lg:col-span-1 ">
            <label htmlFor="categories" className="md:text-xl text-blue font-semibold">Select the categories this item belong to below</label><br/>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Men</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32  rounded-xl">Women</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Kids</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Toys</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Electronics</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Home</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Sports</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Homemade</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Furniture</button>
            <button className=" hover:bg-blue mr-4 mt-4 border-2 border-black  bg-blue bg-opacity-25 font-bold py-2 px-4 w-32 rounded-xl">Other</button>
             </div>
             <div className="col-span-2 lg:col-span-1">
              <label htmlFor="city" className="md:text-xl text-blue font-semibold">City</label>
              <input type="text" name="city" id="city" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
               </div>
        
            <div className="col-span-2 mt-4">
            <label htmlFor="categories" className="md:text-xl text-blue font-semibold">Description</label>
           <textarea cols="1" rows="1" className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkgray focus:outline-none"/>
            </div>
        
            <div className="col-span-2 lg:col-span-1 text-center">
            
              <button className="py-3 px-6 border-2  hover:bg-darkBlue  bg-blue text-black font-bold w-full sm:w-28">
              Add 
             </button>
           
            </div>
            <div className="col-span-2 lg:col-span-1 text-center">
            
              
             <button className="py-3 px-6 bg-white border-2 hover:bg-darkBlue  text-blue font-bold w-full sm:w-28">
             Cancel 
            </button>

            </div>
        
        
          </div>
          </form>
        </div>
        </div>
                
           
        )
    }
    